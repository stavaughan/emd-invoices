import { CheckBox } from 'components/Forms';
import { InputElements, ForgotPasswordBtn, LoginButtons, ResetButton } from '.'

const LoginForm = (props) => {

	const {
		setFetchReady,
		dispatchPassword,
		passwordIsValid,
		dispatchEmail,
		emailIsValid,
		formIsValid,
		setSavePW,
		savePW,
		disabled,
		navigate,
		pwReset
	} = props;

	const onSubmit = (e) => {
		e.preventDefault()
		setFetchReady(true);
	}

	const onSavePassword = (e) => {
		const isChecked = e.target.checked;
		setSavePW(isChecked ? 'local' : 'session')
	}

	return (
		<form onSubmit={onSubmit}>
			<InputElements
				dispatchPassword={dispatchPassword}
				passwordIsValid={passwordIsValid}
				dispatchEmail={dispatchEmail}
				emailIsValid={emailIsValid}
				pwReset={pwReset}
			/>
			<CheckBox
				label="Keep me logged in"
				handleOnChange={onSavePassword}
				className="form-check-inline text-secondary mt-4 text-sm"
				checkboxID="loginSavePW"
				checked={savePW === 'local' || ''}
			/>
			<div className="mt-3">
				{navigate ? (
					<>
						<LoginButtons
							formDataIsValid={formIsValid}
							disabled={disabled}
							label="Login"
						/>
						<ForgotPasswordBtn navigate={navigate} />
					</>
				) : (
					<ResetButton formIsValid={formIsValid} />
				)}
			</div>
		</form>
	)
}

export default LoginForm
