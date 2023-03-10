import { InputCol } from '../components';

const EmailInputV2 = ({
	id,
	cols,
	label, 
	dispatchEmail,
	emailIsValid,
	emailValue,
	required,
	control,
	autoComplete,
	...props
}) => {

    const onChangeEmail = (value) => {
        const textValue = value.trim();
        const newEmail = textValue ? textValue.toLowerCase() : '';
		const emailObj = newEmail ? { type: 'USER_INPUT', val: newEmail } : { type: 'RESET' };
		dispatchEmail(emailObj);
    };

	const validateEmailHandler = (e) => dispatchEmail({ type: 'INPUT_BLUR' });

	return (
		<InputCol.Validation
			id={id}
			cols={cols}
			label={label || "Email"}
			type="email"
			autoComplete={autoComplete || "username"}
			value={emailValue}
			onChange={onChangeEmail}
			onBlur={validateEmailHandler}
			invalidMessage="Please enter a valid email address."
			isValid={emailIsValid}
			control={control}
			required={required}
			name="email"
			{...props}
		/>
	)
}

export default EmailInputV2
