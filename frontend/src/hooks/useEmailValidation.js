import { useState, useEffect, useReducer } from 'react';
import { regexTests } from 'globals/js';

const emailReducer = (state, action) => {
	switch (action.type) {
		case 'USER_INPUT':
			return {
				value: action?.val,
				isValid: null
			}
		case 'INPUT_BLUR':
			return {
				value: state?.value,
				isValid: regexTests.email.test(state?.value)
			}
		default:
			return {
				value: '',
				isValid: null
			}
	}
};

const useEmailValidation = () => {

	const [formIsValid, setFormIsValid] = useState(false);
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null
	});

	useEffect(() => {
		const identifier = setTimeout(() => setFormIsValid(emailState.isValid), 500);
		return () => clearTimeout(identifier)
	}, [emailState.isValid]);

	return {
		formIsValid,
		emailIsValid: emailState.isValid,
		emailValue: emailState.value,
		dispatchEmail
	}
};

export default useEmailValidation;
