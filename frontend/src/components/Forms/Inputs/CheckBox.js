import clsx from "clsx"
import { useState } from "react"

const CheckBox = ({
	label,
	className,
	handleOnChange,
	checkboxID
}) => {

	const [isChecked, setIsChecked] = useState(false)

	const onChangeHandler = (e) => {
		const checked = e.target.checked;
		setIsChecked(checked);
		handleOnChange(checked);
	}

	return (
		<div className={clsx('form-check', className)}>
			<input
				type="checkbox"
				className="form-check-input"
				onChange={onChangeHandler}
				checked={isChecked}
				{...checkboxID && { id: checkboxID }}
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
