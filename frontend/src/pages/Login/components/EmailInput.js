import { ValidationInput } from 'components/Forms/Inputs'

const EmailInput = ({
	dispatchEmail,
	dispatchPassword,
	dispatchFName,
	dispatchLName,
	emailIsValid,
	required,
	label
}) => {

    const handleOnBlur = () => {
        if (dispatchPassword) {
            dispatchPassword({ type: 'INPUT_BLUR' });
        }
        if(dispatchFName){
            dispatchFName({ type: 'INPUT_BLUR' })
        }
        if(dispatchLName){
            dispatchLName({ type: 'INPUT_BLUR' })
        }
    };

    return (
        <ValidationInput
            type="email"
            id="loginusername"
            notValid={emailIsValid === false}
            alertMsg="Please enter a valid email address."
            autoComplete="username"
            changeType="USER_INPUT"
            blurType="INPUT_BLUR"
            handleOnBlur={handleOnBlur}
            dispatch={dispatchEmail}
            placeholder="Enter your email"
            label={`Email: ${label || 'username'}`}
			required={required}
        />
    )
}

export default EmailInput
