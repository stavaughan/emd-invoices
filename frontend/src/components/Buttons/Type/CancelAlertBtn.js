import { ToastDialog } from 'components/Toasts';

const CancelAlertBtn = ({
	formActionComplete,
	setModalClose,
	setDisplay,
	type
}) => {

	const handleCancelEvent = () => {
		setDisplay(false);
	};

	const handleConfirmEvent = () => {
		if (formActionComplete) {
			formActionComplete()
		};
		setDisplay(false);
		if (setModalClose) {
			setModalClose(true);
		}
	};

	const message = (
		<>
			<p>Cancel updates to {type}?</p>
			<p>This action cannot be undone.</p>
		</>
	);

	return (
		<ToastDialog
			message={message}
			reqType={`"Cancel Updates"`}
			actionHandler={handleConfirmEvent}
			cancelHandler={handleCancelEvent}
			confirmLabel="Updates have been canceled."
			actionLabel="Cancel Update"
			cancelLabel="Return"
		/>
	);
};

export default CancelAlertBtn;
