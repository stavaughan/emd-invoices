import { EmailSentNotice } from 'components/Blocks'
import { requestAccess, reset } from 'features/auth/authSlice'
import { useRequestAccessValidation } from 'hooks'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthWrapper, CancelRequest, RequestAccessSection, VerifyButton } from './components'

const RequestAccess = () => {

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

    const [submitAlert, setSubmitAlert] = useState('');
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
            setSubmitAlert(user.message)
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    useEffect(() => {
        if (fetchReady) {
            const responseData = requestAccess({
                firstName: fNameValue,
                lastName: lNameValue,
                email: emailValue,
                userRole: 'approvedvisitor'
            });
            if(!fNameValue || !lNameValue || !emailValue) {
                toast.error('Please fill out all fields');
                return;
            }
            dispatch(responseData)
            setFetchReady(false)
        }
    }, [fetchReady, dispatch, emailValue, fNameValue, lNameValue])

    const modalProps = {
        submitAlert,
        setFetchReady,
        setSubmitAlert,
        dispatchEmail
    }

    const footerContent = (
        <>
            <VerifyButton
                navigate={navigate}
                setShowMessage={setShowMessage}
            />
            <CancelRequest
                label={showMessage ? 'Close' : 'Cancel'}
                message="Account access request canceled..."
                navigate={navigate}
                setShowMessage={setShowMessage}
            />
        </>
    );

    return (
        <AuthWrapper
            cardTitle={showMessage ? 'Check your email' : 'Request Account Access?'}
            modalID="userRequestAccess"
            modalProps={modalProps}
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

export default RequestAccess
