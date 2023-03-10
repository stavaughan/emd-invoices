import { NewPasswordInputs, LoginButtons } from '.'

const ActivateForm = ({
	setFetchReady,
	suppliedPassword,
	setSuppliedPassword,
	dispatchPassword,
	passwordIsValid,
	dispatchEmail,
	emailIsValid,
	formIsValid
}) => {

	const onSubmit = (e) => {
		e.preventDefault()
		setFetchReady(true);
	}

	return (
		<form onSubmit={onSubmit}>
			<NewPasswordInputs
				suppliedPassword={suppliedPassword}
				setSuppliedPassword={setSuppliedPassword}
				dispatchPassword={dispatchPassword}
				passwordIsValid={passwordIsValid}
				dispatchEmail={dispatchEmail}
				emailIsValid={emailIsValid}
			/>
			<LoginButtons
				formDataIsValid={formIsValid && !!suppliedPassword}
				label="Activate"
			/>
		</form>
	)
}

export default ActivateForm
