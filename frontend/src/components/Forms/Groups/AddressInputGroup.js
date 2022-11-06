import { useState, useCallback } from 'react';
import { addressSchema } from 'state/inputSchemas';
import { useClear } from 'hooks';
import { AddressInputs } from '.';

const AddressInputGroup = ({ setContact, setEntering, entering, clear }) => {

	const [newAddress, setNewAddress] = useState(addressSchema);

	const onSetValue = useCallback((field, value) => {
		setNewAddress(prev => ({ ...prev, [field]: value }))
		setContact(prev => ({
			...prev,
			address: { ...prev.address, [field]: value }
		}))
		setEntering(true)
	}, [setContact, setEntering]);

	useClear(clear, () => setNewAddress(addressSchema))

	return (
		<AddressInputs
			newAddress={newAddress}
			onSetAddress={onSetValue}
			currentAddress={addressSchema}
		/>
	);
};

export default AddressInputGroup;
