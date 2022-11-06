import { useContext } from 'react';
import { InputCol } from '../components';
import { InputValidSSN } from '../Inputs/components';
import { DatesContext, FormInputsContext } from 'contexts';

const SSNDOBGroup = ({ setData, prefix, dodTest }) => {

	const { formats } = useContext(DatesContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setData);

	return (
		<>
			<InputValidSSN
				setData={setValue('ownerSSN')}
				prefix={prefix}
			/>
			<InputCol.Date
				id={`${prefix}dobinput`}
				cols="12 sm-6 md-4"
				label="Date of Birth"
				groupClass="mb-3"
				onChange={(value) => setValue('dateOfBirth')(formats(value).dateFull)}
			/>
			{dodTest && (
				<InputCol.Date
				id={`${prefix}dodinput`}
				cols="12 sm-6 md-4"
				label="Date of Death"
				groupClass="mb-3"
				onChange={(value) => setValue('DOD')(formats(value).dateFull)}
			/>
			)}
		</>
	)
}

export default SSNDOBGroup
