import { useState, useCallback } from 'react';
import { addressSchema } from 'state/inputSchemas';
import { useClear } from 'hooks';

const useInputAddress = ({
	setAddress,
	setUser,
	setObject,
	ownerObject,
	currentAddress,
	afterSetValue,
	setEntering,
	type,
	setToggle,
	clear
}) => {

	const initAddress = currentAddress?.street1 ? currentAddress : addressSchema;

	const [newAddress, setNewAddress] = useState(initAddress);

	useClear(clear, () => setNewAddress(initAddress))

	const onSetValue = useCallback((field, value) => setNewAddress(prev => ({
		...prev,
		[field]: value
	})), [setNewAddress]);

	const resetInputs = useCallback(() => {
		setNewAddress(initAddress)
		if (setAddress) setAddress({});
		if (setUser) setUser(prev => ({
			...prev,
			address: { ...prev?.address, [type]: {} }
		}))
		if (setObject) {
			setObject('address', {
				...ownerObject?.address,
				[type]: addressSchema
			})
		}
		if (setToggle) {
			setToggle(false)
		};
	}, [initAddress, setAddress, setUser, setObject, ownerObject, type, setToggle]);

	const handleBlur = useCallback(() => {
		!!setEntering && setEntering(true);
		!!setAddress && setAddress(newAddress)
		!!setObject && setObject('address', {
			...ownerObject?.address,
			[type]: newAddress
		})
		if (setUser) {
			setUser(prev => ({
				...prev,
				address: { ...prev?.address, [type]: newAddress }
			}))
		}
		if (afterSetValue) {
			afterSetValue()
		}
	}, [
		setEntering,
		setAddress,
		setObject,
		ownerObject,
		type,
		setUser,
		newAddress,
		afterSetValue
	]);

	const onDeleteAddress = (e) => {
		e.preventDefault();
		resetInputs();
	};

	return {
		newAddress,
		onSetValue,
		handleBlur,
		onDeleteAddress
	}
}

export default useInputAddress
