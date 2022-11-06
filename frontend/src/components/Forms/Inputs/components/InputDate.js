import React from 'react'
import { InputComponent } from '..'
import { Global } from 'globals/js';

const InputDate = ({
	onChange,
	autoComplete,
	groupClass,
	required,
	onBlur,
	errorMsg,
	optional,
	label,
	...props
}) => {

	const onDateChange = (value) => {
		const dateObj = Global._Date.dateObjectFromInput(value);
		onChange(dateObj)
	}

	return (
		<InputComponent
			label={label}
			type="date"
			errorMsg={errorMsg}
			groupClass={groupClass}
			onChange={onDateChange}
			required={required}
			optional={optional}
			onBlur={onBlur}
			{...props}
		/>
	)
}

export default InputDate
