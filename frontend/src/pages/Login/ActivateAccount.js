import { useState, useEffect, useMemo } from 'react'
import { ActivateForm, AuthWrapper, CancelRequest } from './components'
import { activate, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginValidation } from 'hooks';
import { toast } from 'react-toastify'

const ActivateAccount = () => {

    const {
        formIsValid,
        emailIsValid,
        emailValue,
        passwordIsValid,
        passwordValue,
        dispatchEmail,
        dispatchPassword
    } = useLoginValidation()

    const [fetchReady, setFetchReady] = useState(false);
    const [suppliedPassword, setSuppliedPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(state => state.auth)

    const [submitAlert, setSubmitAlert] = useState('');

    const urlQuery = useMemo(() => {
        const sp = new URLSearchParams(window.location.search);
        return {
            hasToken: sp.has("rid"),
            token: sp.get("rid")
        }
    }, [])

    useEffect(() => {
        if (!urlQuery.hasToken) {
            toast.warning(`Resource cannot be accessed directly!`)
            navigate('/login')
        }
    }, [urlQuery.hasToken, navigate])

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success('Activation successful.')
            navigate('/')
        }

        if (user?.stack) {
            toast.error(user.message)
            setSubmitAlert('Something went wrong...')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    useEffect(() => {
        if (fetchReady) {
            const responseData = activate({
                email: emailValue,
                password: passwordValue,
                suppliedPassword,
                token: urlQuery?.token
            });
            if (responseData !== null) {
                dispatch(responseData)
            }
            setFetchReady(false)
        }
    }, [fetchReady, dispatch, emailValue, passwordValue, suppliedPassword, urlQuery?.token])

    const modalProps = {
        submitAlert,
        setFetchReady,
        setSubmitAlert,
        dispatchEmail,
        dispatchPassword
    }

    const footerContent = (
        <CancelRequest
            message="Registration canceled..."
            navigate={navigate}
        />
    );

    return (
        <AuthWrapper
            cardTitle="Register for Account Access"
            modalID="userRegisterWrongCredentials"
            modalProps={modalProps}
            footerContent={footerContent}
        >
            <ActivateForm
                setFetchReady={setFetchReady}
                suppliedPassword={suppliedPassword}
                setSuppliedPassword={setSuppliedPassword}
                dispatchPassword={dispatchPassword}
                passwordIsValid={passwordIsValid}
                dispatchEmail={dispatchEmail}
                emailIsValid={emailIsValid}
                formIsValid={formIsValid}
            />
        </AuthWrapper>
    )
}

export default ActivateAccount
