import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { InputWrapper2 } from './components';
import { useInputMethods } from 'hooks';

const PhoneInput = ({
	phone,
	setPhone,
	onBlur,
	required,
	label,
	id,
	placeholder,
	smallLabel,
	...props
}) => {

	const { formatPlaceholder, updateNumber } = useInputMethods();

	const [showError, setShowError] = useState(false);

	const handleChange = (e) => {
		updateNumber(setPhone, setShowError, e.target.value)
	};

	const handleBlur = () => {
		if (onBlur) {
			if (phone && phone?.error) {
				setShowError(true);
			} else {
				onBlur()
			}
		}
	};

	return (
		<InputWrapper2
			id={id}
			label={label}
			error={showError}
			alertType="phone"
			smallLabel={smallLabel}
		>
			<PatternFormat
				id={id}
				type="tel"
				className="form-control"
				onChange={handleChange}
				onBlur={handleBlur}
				required={required}
				format="+1 (###) ###-####"
				{...placeholder && {
					placeholder: formatPlaceholder(placeholder)
				}}
				mask=" "
				{...props}
			/>
		</InputWrapper2>
	);
};

export default PhoneInput;
