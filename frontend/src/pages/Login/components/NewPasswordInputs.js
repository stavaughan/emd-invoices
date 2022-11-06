import { useState } from 'react'
import { AlertBanner } from 'components/Alerts';
import { InputComponent } from 'components/Forms/Inputs';
import { PasswordInput } from '.';
import clsx from 'clsx';

import Classes from '../../../components/Forms/styles/InputValidation.module.css';

const NewPasswordInputs = (props) => {

    const {
        suppliedPassword,
        setSuppliedPassword,
        dispatchPassword,
        passwordIsValid,
        dispatchEmail,
        emailIsValid
    } = props;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (value) => {
		setEmail(value)
        const inputValue = value.trim();
        if (inputValue?.length) {
            dispatchEmail({
                type: 'USER_INPUT',
                val: inputValue.toLowerCase()
            });
        }
    }

    const onChangeExistingPassword = (value) => {
        setSuppliedPassword(value)
    }

    const onChangeNewPassword = (value) => {
        setPassword(value)
		const inputValue = value.trim();
        if (inputValue?.length) {
			dispatchPassword({
				type: 'USER_INPUT',
				val: inputValue
			});
        }
    }

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    return (
        <>
            <InputComponent
                label="Email"
                type="email"
                id="email"
                labelClass="small text-secondary"
                placeholder="Enter your email"
                groupClass={clsx('mb-2', Classes.control, !emailIsValid && Classes.invalid)}
                autoComplete="username"
                value={email}
                onChange={onChangeEmail}
                onBlur={validateEmailHandler}
                floating
                name="email"
				required
            />
            {emailIsValid === false && <AlertBanner>Please enter a valid email address.</AlertBanner>}
            <PasswordInput
                label="Password"
                nameID="password"
                placeholder="Enter password provided"
                password={suppliedPassword}
                isValid={true}
                autoComplete="current-password"
                onChangePassword={onChangeExistingPassword}
				required
            />
            <PasswordInput
                label="New Password"
                nameID="newpassword"
                placeholder="Enter new password"
                password={password}
                isValid={passwordIsValid}
                autoComplete="new-password"
                onChangePassword={onChangeNewPassword}
                validatePassword={validatePasswordHandler}
				required
            />
        </>
    )
}

export default NewPasswordInputs
