import { useState, useEffect } from 'react'
import { forgotPassword, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { ForgotPasswordSection, CancelRequest, AuthWrapper } from './components'
import { EmailSentNotice } from 'components/Blocks'
import { useNavigate } from 'react-router-dom'
import { useEmailValidation } from 'hooks';
import { toast } from 'react-toastify'

const ForgotPassword = () => {

    const {
        formIsValid,
        emailIsValid,
        emailValue,
        dispatchEmail
    } = useEmailValidation()

    const [fetchReady, setFetchReady] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            navigate('/login')
        }

        if (isSuccess) {
            toast.success('Your request has been succesfully sent.')
            setShowMessage(true)
        }

        if (user?.stack) {
            toast.error(user.message)
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    useEffect(() => {
        if (fetchReady) {
            const responseData = forgotPassword({
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

	const successMessage = (
		<>
			You should get an email with a password reset link within a few minutes if there's an associated account linked to <b>{user?.email}</b>
		</>
	);

    return (
        <AuthWrapper
            cardTitle={showMessage ? 'Check your email' : 'Reset Password'}
            footerContent={footerContent}
        >
            {showMessage ? (
                <EmailSentNotice
                    setFetchReady={setFetchReady}
                    successMessage={successMessage}
                />
            ) : (
                <ForgotPasswordSection
                    setFetchReady={setFetchReady}
                    dispatchEmail={dispatchEmail}
                    emailIsValid={emailIsValid}
                    formIsValid={formIsValid}
                />
            )}
        </AuthWrapper>
    )
}

export default ForgotPassword
