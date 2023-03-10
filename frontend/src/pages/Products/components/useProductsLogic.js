import { useMemo, useCallback, useState, useEffect } from 'react';
import { TitleDescription, EditPrice, useFilterProducts } from '.'

const useProductsLogic = ({ setUpdate }) => {

	const { findInvoicesBySID } = useFilterProducts();

	const [editID, setEditID] = useState('');
	const [requestBody, setRequestBody] = useState({
		unit_price: 0
	});
	const [editReady, setEditReady] = useState(false);

	const setEditValue = useCallback((field) => {
		return (value)	=> {
			setRequestBody(prev => ({
				...prev,
				[field]: value
			}))
		}
	}, [setRequestBody]);

	const setEditData = useCallback((item) => {
		setEditID(item?._id);
		setRequestBody(prev => ({
			unit_price: item?.unit_price
		}))
	}, [setRequestBody]);

	useEffect(() => {
		if(editID && editReady) {
			setUpdate(editID, requestBody)
			let timer = setTimeout(() => {
				setEditReady(false);
				setEditID('');
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [requestBody, editID, setUpdate, editReady]);

	const headerFooter = useMemo(() => {
		return {
			head: ['title', 'unit price', '', ''],
			colWidths: [
				null,
				{ 'minWidth': '300px' },
				{ 'minWidth': '70px' },
				{ 'width': 'auto' }
			],
			colClasses: ['','', 'text-end', 'text-end d-print-none']
		}
	}, []);

	const itemDescription = useCallback((item) => (
		<TitleDescription item={item} />
	), []);

	const editiblePrice = useCallback((item) => (
		<EditPrice
			itemValue={item.unit_price || 0}
			editID={editID}
			itemID={item._id}
			setValue={setEditValue('unit_price')}
			newValue={requestBody.unit_price}
			setEditReady={setEditReady}
		/>
	), [editID, requestBody.unit_price, setEditValue]);

	const resultsData = useCallback((data) => {
		if (!data?.length) return [];
		return data.map(item => ({
			_id: item._id,
			content: [
				itemDescription(item),
				editiblePrice(item),
			],
			colClasses: ['', '', 'text-end', 'text-end'],
			apiImage: { pid: item?.pid || null }
		}))
	}, [editiblePrice, itemDescription]);

	return {
		findInvoicesBySID,
		headerFooter,
		resultsData,
		setEditData,
		editReady
	}
}

export default useProductsLogic
