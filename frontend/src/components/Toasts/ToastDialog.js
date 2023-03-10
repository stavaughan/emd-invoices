import { toast } from 'react-toastify'
import { Button } from 'components/Buttons';
import { ToastDialogWrapper } from '.';
import clsx from 'clsx';

const ToastDialog = ({
	message,
	actionColor = 'danger',
	toastType = 'error',
	reqType,
	actionHandler,
	cancelHandler,
	confirmLabel,
	actionLabel,
	cancelLabel = 'Cancel',
}) => {

	return (
		<ToastDialogWrapper message={message}>
			<Button
				className={clsx("btn-sm", `btn-${actionColor}`)}
				rest={{
					onClick: () => {
						toast.dismiss();
						!!actionHandler && actionHandler();
						toast[toastType](confirmLabel, {
							delay: 1500,
							autoClose: 700,
							closeButton: false,
							theme: "colored"
						});
					}
				}}
			>
				{actionLabel}
			</Button>
			<Button
				className="btn-sm btn-outline-secondary ms-2"
				rest={{
					onClick: () => {
						toast.dismiss()
						!!cancelHandler && cancelHandler()
						toast.info(`${reqType} request canceled.`, {
							delay: 1000,
							autoClose: 500,
							closeButton: false,
							theme: "colored"
						})
					}
				}}
			>
				{cancelLabel}
			</Button>
		</ToastDialogWrapper>
	)
}

export default ToastDialog
