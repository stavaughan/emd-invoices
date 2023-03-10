import { useMemo, useCallback, useState, useEffect, useContext } from 'react';
import { TitleDescription } from '.';
import { InvoicesContext } from 'contexts';

const useCustomersLogic = ({ setUpdate }) => {

	const { customerBusName } = useContext(InvoicesContext);

	const [editID, setEditID] = useState('');
	const [requestBody, setRequestBody] = useState({});
	const [editReady, setEditReady] = useState(false);

	const setEditData = useCallback((id, editData) => {
		setEditID(id);
		setRequestBody(prev => editData)
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
			head: ['Customer', ''], // cols 2,3,4
			colWidths: [
				null, // image col
				{ 'minWidth': '300px' }, // title col
				{ 'width': 'auto' } // action col
			], // cols 1,2,3,4
			colClasses: ['','text-start','text-end d-print-none'] // cols 1,2,3,4
		}
	}, []);

	const itemDescription = useCallback((item) => (
		<TitleDescription item={item} customerBusName={customerBusName} />
	), [customerBusName]);

	const resultsData = useCallback((data) => {
		if (!data?.length) return [];
		return data.map(item => ({
			_id: item._id,
			content: [
				itemDescription(item) // col 2
			],
			apiImage: { pid: item?.pid || null }
		}))
	}, [itemDescription]);

	return {
		headerFooter,
		resultsData,
		setEditData,
		editReady
	}
}

export default useCustomersLogic
