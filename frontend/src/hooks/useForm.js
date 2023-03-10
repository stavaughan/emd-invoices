import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sliceData } from 'features';
import { inputSchemas } from 'state';
import { useSelectorAlert } from 'hooks';

const useForm = ({ user, collection }) => {

	const dataID = useMemo(() => {
		return ['invoices', 'services'].includes(collection) ? 'invoicedata' : collection;
	}, [collection]);

	const getSchemaData = useCallback((collection, data) => {
		switch (collection) {
			case 'invoices':
				return {
					schema: data.schemaInvoice,
					create: data.createInvoice
				};
			case 'services':
				return {
					schema: data.schemaService,
					create: data.createService
				};
			default:
				return {
					schema: data.schema,
					create: data.create
				};
		}
	}, []);

	const dataFromSliceData = useMemo(() => {
		const data = sliceData.find(_ => _.id === dataID);
		return getSchemaData(collection, data);
	}, [collection, getSchemaData, dataID]);

	const { schema, create } = dataFromSliceData
	const { _id: userID } = useSelector(state => state.auth).user;
	const initialState = user ? inputSchemas[schema](userID) : inputSchemas[schema];

	const { selector } = useSelectorAlert(dataID, 'New item successfully added.');

	const [clear, setClear] = useState(false);
	const [entering, setEntering] = useState(false);
	const [newItem, setNewItem] = useState(initialState);

	const clearForm = useCallback(() => {
		setClear(true)
	}, [setClear]);

	useEffect(() => {
		if(clear) {
			let timer = setTimeout(() => {
				setEntering(false);
				setNewItem(initialState)
				setClear(false)
			}, 1000);
			return () => {
				clearTimeout(timer)
			};
		}
	}, [clear, initialState, setClear, setEntering, setNewItem]);

	return {
		newItem,
		setNewItem,
		clearForm,
		entering,
		setEntering,
		initialState,
		createSlice: create,
		selector,
		clear
	};
}

export default useForm;
