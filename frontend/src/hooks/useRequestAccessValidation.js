import { useState, useEffect, useReducer } from 'react';
import { regexTests } from 'globals/js';

const reducerAction = (action, state, type) => {
    switch (action.type) {
        case 'USER_INPUT':
            return {
                value: action?.val,
                isValid: type === 'email'
                    ? null
                    : state?.value?.length > 1
            }
        case 'INPUT_BLUR':
            return {
                value: state?.value,
                isValid: type === 'email' ? regexTests.email.test(state?.value) : state?.value?.length > 1
            }
        default:
            return {
                value: '',
                isValid: null
            }
    }
};

const useRequestAccessValidation = () => {

    const [formIsValid, setFormIsValid] = useState(false);

    const emailReducer = (state, action) => reducerAction(action, state, "email");
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const {
        value: emailValue,
        isValid: emailIsValid
    } = emailState;

    const fNameReducer = (state, action) => reducerAction(action, state, "fName");
    const [fNameState, dispatchFName] = useReducer(fNameReducer, {
        value: '',
        isValid: null
    });

    const {
        value: fNameValue,
        isValid: fNameIsValid
    } = fNameState;

    const lNameReducer = (state, action) => reducerAction(action, state, "lName");
    const [lNameState, dispatchLName] = useReducer(lNameReducer, {
        value: '',
        isValid: null
    });

    const {
        value: lNameValue,
        isValid: lNameIsValid
    } = lNameState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && fNameIsValid && lNameIsValid);
        }, 500);
        return () => clearTimeout(identifier)
    }, [emailIsValid, fNameIsValid, lNameIsValid]);

    return {
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
    }
};

export default useRequestAccessValidation;
