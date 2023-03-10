import { InputComponent } from '..';

const InputNumber = ({
	dec,
	amount,
	setAmount,
	setDisabled,
	placeholder = "00.00",
	required,
	optional,
	onBlur,
	setMin,
	label,
	...props
}) => {


	const handleValueChange = (value) => {
		const fixedFloat = parseFloat(value).toFixed(dec)
		if (!isNaN(fixedFloat)) {
			setAmount(fixedFloat)
			!!setDisabled && setDisabled(false);
		} else {
			setAmount(setMin || '')
		}
	};

	return (
		<InputComponent
			type="number"
			value={amount || ''}
			onChange={handleValueChange}
			placeholder={placeholder}
			required={required}
			optional={optional}
			label={label}
			onBlur={onBlur}
			{...props}
		/>
	)
}

export default InputNumber
