import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Alerts, Global } from 'globals/js';
import { InputCol } from 'components/Forms/components';

const InputValidSSN = ({ setData, prefix }) => {

	const [ssNum, setSSNum] = useState('');

	const validateSSN = useCallback((ssNum) => {
		const num = ssNum?.replaceAll('-', '');
		return num?.length === 9 ? num : '';
	}, []);

	const onChangeSSNHandler = (value) => {
		const formNum = Global.formatSSN(value);
		setSSNum(formNum);
		const ssn = validateSSN(formNum);
		if (!ssn) {
			toast.error(Alerts.ssn, {
				toastId: `${prefix}ssnerror`,
				position: "top-center"
			})
		} else {
			setData(ssn);
		}
	};

	return (
		<InputCol.Text
			id={`${prefix}ssninput`}
			value={ssNum}
			cols="12 sm-6"
			autoComplete="off"
			placeholder="***-**-****"
			onChange={onChangeSSNHandler}
			groupClass="bg-white text-primary"
			label="Social Security Number"
		/>
	)
}

export default InputValidSSN
