import NumberFormat from 'react-number-format';
import { InputComponentWrap } from '.';

const InputNumberFormat = ({
	type,
	value,
	onChange,
	numFormat,
	required,
	label,
	mask,
	groupClass,
	optional,
	onBlur,
	Icon,
	...props
}) => {

	const handleChange = (e) => {
		e.preventDefault();
		onChange(e.target.value);
	};

	const handleBlur = (e) => {
		onBlur && onBlur(e);
	};

	return (
		<InputComponentWrap
			label={label}
			required={required}
			groupClass={groupClass}
			optional={optional}
			Icon={Icon}
			{...props}
		>
			<NumberFormat
				type={type || "text"}
				className="form-control"
				defaultValue={value}
				onChange={handleChange}
				onBlur={handleBlur}
				format={numFormat}
				mask={mask || " "}
				allowEmptyFormatting={true}
				{...props}
			/>
		</InputComponentWrap>
	)
}

export default InputNumberFormat
