import { useState, useEffect } from 'react'
import { verifyEmail, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { CancelRequest, AuthWrapper, VerifyAccountSection } from './components'
import { EmailSentNotice } from 'components/Blocks'
import { useNavigate } from 'react-router-dom'
import { useEmailValidation } from 'hooks';
import { toast } from 'react-toastify'

const VerifyAccount = () => {

    const [fetchReady, setFetchReady] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { formIsValid, emailIsValid, emailValue, dispatchEmail } = useEmailValidation()
    const { user, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            navigate('/login')
        }

        if (isSuccess) {
            toast.success('Your new password has been accepted.')
            setShowMessage(true)
        }

        if (user?.stack) {
            toast.error(user.message)
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    useEffect(() => {
        if (fetchReady) {
            const responseData = verifyEmail({
                email: emailValue
            });
            if (responseData !== null) {
                dispatch(responseData)
            }
            setFetchReady(false)
        }
    }, [fetchReady, dispatch, emailValue])

    const footerContent = (
        <CancelRequest
            label={showMessage ? 'Close' : 'Cancel'}
            setShowMessage={setShowMessage}
            message="Change password request canceled..."
            navigate={navigate}
        />
    );

    return (
        <AuthWrapper
            cardTitle={showMessage ? 'Check your email' : 'Verify Your Account'}
            cardDescription={!showMessage ? 'Verify your email and reset your password.' : ''}
            footerContent={footerContent}
        >
            {showMessage ? (
                <EmailSentNotice
                    setFetchReady={setFetchReady}
                    successMessage={<>You should get an email with a password reset link within a few minutes if there's an associated account linked to <b>{user.email}</b></>}
                />
            ) : (
                <VerifyAccountSection
                    setFetchReady={setFetchReady}
                    dispatchEmail={dispatchEmail}
                    emailIsValid={emailIsValid}
                    formIsValid={formIsValid}
                />
            )}
        </AuthWrapper>
    )
}

export default VerifyAccount
