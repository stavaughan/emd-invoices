import React from 'react'
import { AlertBanner } from 'components/Alerts';
import { InputComponent } from '..'

import Classes from '../../../Forms/styles/InputValidation.module.css'

const InputValidation = ({
	value,
	onChange,
	autoComplete,
	onBlur,
	pattern,
	required,
	label,
	control,
	invalidMessage,
	placeholder,
	smallLabel,
	isValid,
	...props
}) => {

	const showError = isValid === false && !!value

	return (
		<>
			<InputComponent
				label={label}
				smallLabel={smallLabel}
				onChange={onChange}
				groupClass={`has-validation mb-2 ${control ? Classes.control : Classes['control-block']} ${showError ? Classes.invalid : ''}`}
				placeholder={placeholder || " "}
				autoComplete={autoComplete || "off"}
				required={required}
				onBlur={onBlur}
				value={value}
				{...props}
			/>
			{showError && <AlertBanner>{invalidMessage}</AlertBanner>}
		</>
	)
}

export default InputValidation
