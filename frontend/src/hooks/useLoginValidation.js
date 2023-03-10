import { useState, useEffect, useReducer } from 'react';
import { regexTests, Global } from 'globals/js';

const reducerAction = (action, state, type) => {
    switch (action.type) {
        case 'USER_INPUT':
            return {
                value: action?.val,
                isValid: type === 'password'
                    ? Global.passWordCheck(action?.val?.trim())
                    : null
            }
        case 'INPUT_BLUR':
            return {
                value: state?.value,
                isValid: type === 'password'
                    ? Global.passWordCheck(state?.value?.trim())
					: regexTests.email.test(state?.value)
            }
        default:
            return {
				value: '',
				isValid: null
			}
    }
};

const useLoginValidation = () => {

    const [formIsValid, setFormIsValid] = useState(false);

    const emailReducer = (state, action) => reducerAction(action, state, "email");
    const passwordReducer = (state, action) => reducerAction(action, state, "password");

	const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);
        return () => clearTimeout(identifier)
    }, [emailState.isValid, passwordState.isValid]);

    return {
        formIsValid,
        emailIsValid: emailState.isValid,
        emailValue: emailState.value,
        passwordIsValid: passwordState.isValid,
        passwordValue: passwordState.value,
        dispatchEmail,
        dispatchPassword
    }
};

export default useLoginValidation;
