import { useMemo, useCallback, useState, useEffect } from 'react';
import { TitleDescription } from '.';

const useBusinessesLogic = ({ setUpdate }) => {

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
			head: ['Business', ''], // cols 2,3,4
			colWidths: [
				null, // image col
				{ 'minWidth': '300px' }, // title col
				{ 'width': 'auto' } // action col
			], // cols 1,2,3,4
			colClasses: ['','text-start','text-end d-print-none'] // cols 1,2,3,4
		}
	}, []);

	const itemDescription = useCallback((item) => (
		<TitleDescription item={item} />
	), []);

	const resultsData = useCallback((data) => {
		if (!data?.length) return [];
		return data.map(item => ({
			_id: item._id,
			content: [
				itemDescription(item) // col 2
			],
			apiImage: { pid: item?.logoID ? `app-images/${item?.logoID}` : null },
		}))
	}, [itemDescription]);

	return {
		headerFooter,
		resultsData,
		setEditData,
		editReady
	}
}

export default useBusinessesLogic
