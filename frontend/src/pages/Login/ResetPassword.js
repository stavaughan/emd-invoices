import { useState, useEffect, useMemo } from 'react'
import { CancelRequest, LoginForm, AuthWrapper } from './components'
import { resetPassword, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginValidation } from 'hooks';
import { toast } from 'react-toastify'

const ResetPassword = () => {

    const {
        formIsValid,
        emailIsValid,
        emailValue,
        passwordIsValid,
        passwordValue,
        dispatchEmail,
        dispatchPassword
    } = useLoginValidation()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(state => state.auth)
    const [savePW, setSavePW] = useState(user?.savePW || 'session')
    const [fetchReady, setFetchReady] = useState(false);

    const [submitAlert, setSubmitAlert] = useState('');

    const urlQuery = useMemo(() => {
        const sp = new URLSearchParams(window.location.search);
        return {
            hasToken: sp.has("rid"),
            token: sp.get("rid")
        }
    }, []);

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

        if (isSuccess && user?._id) {
            toast.success('Your password has been updated.')
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
            const responseData = resetPassword({
                email: emailValue,
                password: passwordValue,
                token: urlQuery?.token,
				savePW
            });
            if (responseData !== null) {
                dispatch(responseData)
            }
            setFetchReady(false)
        }
    }, [fetchReady, dispatch, emailValue, passwordValue, urlQuery?.token, savePW])

    const modalProps = {
        submitAlert,
        setFetchReady,
        setSubmitAlert,
        dispatchEmail,
        dispatchPassword
    }

    const footerContent = (
        <CancelRequest
            message="Change password request canceled..."
            navigate={navigate}
        />
    );

    return (
        <AuthWrapper
            cardTitle="Create New Password"
            modalID="userResetWrongCredentials"
            modalProps={modalProps}
            footerContent={footerContent}
        >
            <LoginForm
                setFetchReady={setFetchReady}
                dispatchPassword={dispatchPassword}
                passwordIsValid={passwordIsValid}
                dispatchEmail={dispatchEmail}
                emailIsValid={emailIsValid}
                formIsValid={formIsValid}
                setSavePW={setSavePW}
                savePW={savePW}
                pwReset={true}
            />
        </AuthWrapper>
    )
}

export default ResetPassword
