import { useState, useEffect } from 'react'
import { accountSetup, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RequestAccessSection, CancelRequest, AuthWrapper, VerifyButton } from './components'
import { EmailSentNotice } from 'components/Blocks'
import { useNavigate } from 'react-router-dom'
import { useRequestAccessValidation } from 'hooks';
import { toast } from 'react-toastify'

const SetupNewAccount = () => {

    const {
        formIsValid,
        emailIsValid,
        fNameIsValid,
        lNameIsValid,
        emailValue,
        fNameValue,
        lNameValue,
        dispatchEmail,
        dispatchFName,
        dispatchLName
    } = useRequestAccessValidation()

    const [fetchReady, setFetchReady] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }

        if (isSuccess && !user?.message) {
            toast.success('Email sent.')
            setShowMessage(true)
        }

        if (user?.message) {
            toast.error(user.message)
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    useEffect(() => {
        if (fetchReady) {
            if(!fNameValue || !lNameValue || !emailValue) {
                toast.error('Please fill out all fields');
                return;
            }
            dispatch(accountSetup({
                firstName: fNameValue,
                lastName: lNameValue,
                email: emailValue
            }))
            setFetchReady(false)
        }
    }, [fetchReady, dispatch, emailValue, fNameValue, lNameValue])

    const footerContent = (
        <>
            <VerifyButton
                navigate={navigate}
                setShowMessage={setShowMessage}
            />
            <CancelRequest
                label={showMessage ? 'Close' : 'Cancel'}
                message="New account setup canceled..."
                navigate={navigate}
                setShowMessage={setShowMessage}
            />
        </>
    );

    return (
        <AuthWrapper
            cardTitle={showMessage ? 'Check your email' : 'Register for New Account'}
            footerContent={footerContent}
        >
            {showMessage ? (
                <EmailSentNotice
                    setFetchReady={setFetchReady}
                    successMessage="You should get an email with a new user registration link within a few minutes."
                />
            ) : (
                <RequestAccessSection
                    setFetchReady={setFetchReady}
                    dispatchEmail={dispatchEmail}
                    dispatchFName={dispatchFName}
                    dispatchLName={dispatchLName}
                    emailIsValid={emailIsValid}
                    fNameIsValid={fNameIsValid}
                    lNameIsValid={lNameIsValid}
                    formIsValid={formIsValid}
                />
            )}
        </AuthWrapper>
    )
}

export default SetupNewAccount
