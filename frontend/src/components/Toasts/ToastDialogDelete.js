import { ToastDialog } from '.';

const ToastDialogDelete = ({
	actionLabel,
	reqType,
	itemName,
	actionMessage,
	actionHandler,
	cancelHandler,
	confirmLabel
}) => {

	const message = reqType === 'delete' ? (
		<>
			<p>Are you sure you want to remove {itemName}?</p>
			<p>This action cannot be undone.</p>
		</>
	) : actionMessage;

	return (
		<ToastDialog
			message={message}
			actionColor={reqType === 'delete' ? "danger" : "success"}
			toastType={reqType === 'delete' ? 'error' : 'success'}
			reqType={reqType}
			actionHandler={actionHandler}
			cancelHandler={cancelHandler}
			confirmLabel={confirmLabel}
			actionLabel={reqType === 'delete' ? 'Remove' : actionLabel}
		/>
	)
}

export default ToastDialogDelete
