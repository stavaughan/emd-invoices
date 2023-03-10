import { useCallback } from "react";
import { Global } from 'globals/js';

const useInputMethods = () => {

	const formatPlaceholder = useCallback((placeholder) => {
		return placeholder ? `+1 ${Global.formatPhone(placeholder)}` : ''
	}, [])

	const phoneState = useCallback((value) => {
		const phoneValue = value
			.replaceAll(' ', '')
			.replace('+1', '')
			.replace('(', '')
			.replace(')', '')
			.replace('-', '')
			.replaceAll('_', '');

		const isValidPhone = [0, 10].includes(phoneValue?.length);
		
		return {
			value: Number(phoneValue),
			error: !isValidPhone,
			isValid: isValidPhone
		};
	}, []);

	const updateNumber = useCallback((setPhone, setShowError, value) => {
		const newState = phoneState(value);
		setPhone(newState);
		if (newState.isValid) {
			setShowError(false)
		}
	}, [phoneState]);

	return {
		formatPlaceholder,
		updateNumber
	}
}

export default useInputMethods
