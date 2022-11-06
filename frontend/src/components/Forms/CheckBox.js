import React from 'react'
import clsx from 'clsx'

const CheckBox = ({
	value,
	label,
	checked,
	className,
	handleOnChange,
	checkboxID,
	onBlur
}) => {

	return (
		<div className={clsx('form-check', className)}>
			<input
				type="checkbox"
				className="form-check-input"
				onChange={handleOnChange}
				{...value && { value }}
				checked={checked || ''}
				{...checkboxID && { id: checkboxID }}
				{...onBlur && { onBlur }}
			/>
			<label
				className="form-check-label"
				{...checkboxID && { htmlFor: checkboxID }}
			>
				{label}
			</label>
		</div>
	)
}

export default CheckBox
