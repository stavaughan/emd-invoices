import { useState, useEffect } from 'react'
import { AuthWrapper, LoginForm, RequestAccessBtn } from './components'
import { login, reset } from 'features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLoginValidation } from 'hooks';
import { toast } from 'react-toastify'

const Login = () => {

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
	const location = useLocation()

	const storedUserStr = localStorage.getItem('user');
	const storedUser = JSON.parse(storedUserStr);

	const { message: settingsMsg } = useSelector((state) => state.settings)

	const [savePW, setSavePW] = useState(storedUser?.savePW || 'session')
	const [fetchReady, setFetchReady] = useState(false);
	const [submitAlert, setSubmitAlert] = useState('');
	const [disabled, setDisabled] = useState(false);

	const from = location.state?.from?.pathname || "/";

	const { user, isError, isSuccess, message } = useSelector(state => state.auth);

	useEffect(() => {
		const status500 = "Request failed with status code 500";
		const status404 = "not found!";
		if ([status500, status404].includes(settingsMsg)) {
			navigate('/landing', {
				replace: true,
				state: {
					title: 'No Data',
					message: 'Server is currently unavailable. Please try again later.'
				}
			})
		}
	}, [navigate, settingsMsg])

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		if (isSuccess && user?._id) {
			navigate(from, { replace: true })
		}

		if (user?.stack) {
			toast.error('Your password or username is incorrect. Please try again or click "Forgot password"')
			setSubmitAlert('Your password or username is incorrect. Please try again or click "Forgot password"')
		}

		dispatch(reset())
	}, [user, isError, isSuccess, message, navigate, dispatch, from])

	useEffect(() => {
		let subscribed = true;
		if (subscribed && fetchReady) {
			const responseData = login({
				email: emailValue,
				password: passwordValue,
				savePW
			});
			if (responseData !== null) {
				dispatch(responseData)
			}
			setFetchReady(false)
		}
		return () => subscribed = false;
	}, [fetchReady, dispatch, emailValue, passwordValue, savePW])

	return (
		<AuthWrapper
			cardTitle="Account Login"
			modalID="userLoginWrongCredentials"
			modalProps={{
				submitAlert,
				setFetchReady,
				setSubmitAlert,
				dispatchEmail,
				dispatchPassword
			}}
			footerContent={<RequestAccessBtn
				navigate={navigate}
				setDisabled={setDisabled}
			/>}
			showLogo
		>
			<LoginForm
				setFetchReady={setFetchReady}
				dispatchPassword={dispatchPassword}
				passwordIsValid={passwordIsValid}
				dispatchEmail={dispatchEmail}
				emailIsValid={emailIsValid}
				formIsValid={formIsValid}
				disabled={disabled}
				navigate={navigate}
				setSavePW={setSavePW}
				savePW={savePW}
				pwReset={false}
			/>
		</AuthWrapper>
	)
}

export default Login
