const ForgotPasswordBtn = ({ navigate }) => {

	const onForgotPassword = (e) => {
		e.preventDefault()
		navigate('/forgot-password')
	}

	return (
		<div className="text-center mt-3">
			<button
				className="btn btn-link-blue px-0"
				onClick={onForgotPassword}
			>
				Forgot password?
			</button>
		</div>
	)
}

export default ForgotPasswordBtn
