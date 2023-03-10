import { useEffect, useState } from 'react';
import { ToastDialogDelete } from '.';

const ToastDelete = ({ deleteItem, setDeleteItem }) => {

	const [cancelReady, setCancelReady] = useState(false);

	const onClickHandler = () => {
		setDeleteItem(prev => ({ ...prev, confirmed: true }))
	};

	useEffect(() => {
		if (cancelReady) {
			setDeleteItem(() => ({
				name: '',
				confirmed: false,
				deleteId: ''
			}))
			const timeout = setTimeout(() => {
				setCancelReady(false)
			}, 100)
			return () => clearTimeout(timeout)
		}
	}, [cancelReady, setDeleteItem])

	return (
		<ToastDialogDelete
			reqType="delete"
			itemName={deleteItem.deleteId}
			actionHandler={onClickHandler}
			cancelHandler={() => setCancelReady(true)}
			confirmLabel="Item has been deleted."
		/>
	)
};

export default ToastDelete;
