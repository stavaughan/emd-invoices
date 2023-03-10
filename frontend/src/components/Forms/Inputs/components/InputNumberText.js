import { useState } from 'react';
import { InputComponent } from '..';
import { Global } from 'globals/js';

const InputNumberText = ({
	dec,
	type = "text",
	amount,
	setAmount,
	setEntering,
	placeholder = "00.00",
	required,
	optional,
	onBlur,
	setMin,
	label,
	...props
}) => {

	const [number, setNumber] = useState('');

	const handleValueChange = (value) => {
		const textValue = value.trim();
		const numValue = Global.allNumberCharacters(textValue);
		setAmount(textValue ? numValue : 0);
		setNumber(textValue ? numValue.toString() : '');
		!!setEntering && setEntering(true);
	};

	return (
		<InputComponent
			type={type}
			value={number}
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

export default InputNumberText
