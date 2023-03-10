import React from 'react'
import { DropdownSelect } from '..';

const InputDropdown = ({
	selected,
	onChange,
	optionData,
	optional,
	required,
	onBlur,
	label,
	smallLabel,
	...props
}) => {

	return (
		<DropdownSelect
			options={optionData}
			label={label}
			onChange={onChange}
			selected={selected}
			onBlur={onBlur}
			optional={optional}
			required={required}
			smallLabel={smallLabel}
			{...props}
		/>
	)
}

export default InputDropdown
