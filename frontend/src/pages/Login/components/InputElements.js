import React, { useState } from 'react'
import { PasswordInput, EmailInput } from '.';

const InputElements = (props) => {

    const {
        dispatchPassword,
        passwordIsValid,
        dispatchEmail,
        emailIsValid,
        pwReset = false
    } = props;

    const [password, setPassword] = useState('')

    const onChangePassword = (value) => {
        setPassword(value)
		const inputValue = value.trim();
        if (inputValue?.length) {
			dispatchPassword({
				type: 'USER_INPUT',
				val: inputValue
			});
        }
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    return (
        <>
            <EmailInput
                dispatchEmail={dispatchEmail}
                dispatchPassword={dispatchPassword}
                emailIsValid={emailIsValid}
            />
            <PasswordInput
                label={pwReset ? 'New Password' : 'Password'}
                nameID={pwReset ? 'newpassword' : 'password'}
                placeholder={pwReset ? 'Enter new password' : 'Enter password'}
                password={password}
                isValid={passwordIsValid}
                autoComplete={pwReset ? "new-password" : "current-password"}
                onChangePassword={onChangePassword}
                validatePassword={validatePasswordHandler}
            />
        </>
    )
}

export default InputElements
