import React, { useState } from 'react'
import { AlertPassword } from 'components/Alerts';
import { InputComponent } from 'components/Forms/Inputs';
import { ShowDataIcon } from 'components/Buttons';
import clsx from 'clsx';

import Classes from '../../../components/Forms/styles/InputValidation.module.css';

const PasswordInput = ({
	label,
	nameID,
	placeholder,
	password,
	isValid,
	autoComplete,
	onChangePassword,
	validatePassword,
	required
}) => {

	const [show, setShow] = useState(false);

    const Icon = () => <ShowDataIcon show={show} setShow={setShow} />

    return (
        <div className="position-relative">
            <InputComponent
                label={label}
                type={show ? 'text' : 'password'}
                id={nameID}
                placeholder={placeholder}
                wrapStyle={{ width: '100%' }}
                inputStyle={{ margin: '0 auto' }}
                groupClass={clsx(
					'mb-2',
					Classes.control,
					isValid === false && Classes.invalid
				)}
                autoComplete={autoComplete}
                value={password || ''}
                onChange={onChangePassword}
				{...validatePassword && { onBlur: validatePassword }}
                name={nameID}
                Icon={Icon}
				required={required}
                floating
            />
            {isValid === false && <AlertPassword className="mb-1" />}
        </div>
    )
}

export default PasswordInput
