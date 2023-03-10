import { useState, useEffect, useCallback, useMemo } from 'react';
import { ToastDelete } from 'components/Toasts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { sliceData } from 'features';

const useItemDelete = (dataID) => {

	const action = useMemo(() => sliceData.find(_ => _.id === dataID), [dataID])

	const dispatch = useDispatch()

	const stateID = ['services', 'invoices'].includes(dataID) ? 'invoicedata' : dataID

	const { isLoading } = useSelector(state => state[stateID])

	const [deleteItem, setDeleteItem] = useState({
		name: dataID,
		confirmed: false,
		deleteId: ''
	})

	const { confirmed, deleteId } = deleteItem;

	const setDeleteId = useCallback((id) => setDeleteItem(prev => ({
		...prev,
		deleteId: id
	})), [setDeleteItem])

	useEffect(() => {
		if (confirmed && !isLoading) {
			setDeleteItem(prev => ({ ...prev, confirmed: false }))
		}
	}, [confirmed, isLoading, deleteId, dataID])

	useEffect(() => {
		if (deleteId && confirmed) {
			dispatch(action.delete(deleteId))
			const timeout = setTimeout(() => {
				setDeleteItem(prev => ({
					...prev,
					name: dataID,
					confirmed: false,
					deleteId: ''
				}));
			}, 200)
			return () => clearTimeout(timeout)
		}
	}, [confirmed, deleteId, dataID, action, dispatch, setDeleteItem])

	useEffect(() => {
		if (deleteId) {
			toast.error(<ToastDelete
				deleteItem={deleteItem}
				setDeleteItem={setDeleteItem}
				isLoading={isLoading}
			/>, {
				toastId: `delete${deleteId}`,
				autoClose: false,
				hideProgressBar: false,
				closeButton: false
			})
		}
	}, [deleteId, deleteItem, isLoading])

	return { setDeleteId, deleteId, isLoading, confirmed }
}

export default useItemDelete
