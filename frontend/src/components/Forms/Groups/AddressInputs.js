import { InputCol } from 'components/Forms/components';
import { SiteData } from 'data';
import { Global } from 'globals/js';

const AddressInputs = ({
	newAddress,
	onSetAddress,
	onBlurFn,
	smallLabel,
	prefix = ""
}) => {

	const placeholder = (field) => `enter ${field}`;

	const onSelZipCode = (value) => {
		const num = Global.allNumberCharacters(value);
		onSetAddress('zip_code', num)
	}

	return (
		<>
			<InputCol.Text
				id={`${prefix}Street1`}
				value={newAddress.street1}
				onChange={(value) => onSetAddress('street1', value)}
				placeholder={placeholder('street1')}
				{...onBlurFn && { onBlur: onBlurFn }}
				maxLength={50}
				label="Street 1"
				cols="12 md-6"
				smallLabel={smallLabel}
			/>
			<InputCol.Text
				id={`${prefix}street2`}
				value={newAddress.street2}
				onChange={(value) => onSetAddress('street2', value)}
				placeholder={placeholder('street2')}
				{...onBlurFn && { onBlur: onBlurFn }}
				maxLength={50}
				label="Street 2"
				cols="12 md-6"
				smallLabel={smallLabel}
			/>
			<InputCol.Text
				id={`${prefix}city`}
				value={newAddress.city}
				onChange={(value) => onSetAddress('city', value)}
				{...onBlurFn && { onBlur: onBlurFn }}
				placeholder={placeholder('city')}
				maxLength={50}
				label="City"
				cols="12 md-6"
				smallLabel={smallLabel}
			/>
			<InputCol.Dropdown
				cols="6 md-3"
				id={`${prefix}State`}
				label="State"
				selected={newAddress.state || placeholder('state')}
				onChange={(value) => onSetAddress('state', value)}
				optionData={SiteData.USStates}
				{...onBlurFn && { onBlur: onBlurFn }}
				smallLabel={smallLabel}
			/>
			<InputCol.Text
				id={`${prefix}zip_code`}
				value={newAddress.zip_code}
				onChange={onSelZipCode}
				placeholder={placeholder('zip_code')}
				{...onBlurFn && { onBlur: onBlurFn }}
				pattern="^\d{5}(?:[-\s]\d{4})?$"
				maxLength={5}
				label="Zip Code"
				cols="6 md-3"
				smallLabel={smallLabel}
			/>
		</>
	)
}

export default AddressInputs
