import { InputComponent } from '..'

const InputText = ({
	onChange,
	groupClass,
	onBlur,
	errorMsg,
	required,
	optional,
	label,
	smallLabel,
	...props
}) => {

	return (
		<InputComponent
			label={label}
			errorMsg={errorMsg}
			groupClass={groupClass}
			onChange={onChange}
			onBlur={onBlur}
			smallLabel={smallLabel}
			required={required}
			optional={optional}
			{...props}
		/>
	)
}

export default InputText
