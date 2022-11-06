import { ToastDialogDelete } from 'components/Toasts';
import { InvoicesContext } from 'contexts';
import { useCallback, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';

const useSetPaymentStatus = ({ invoice, removeLast }) => {

	const { selInvoice, lastPayment } = useContext(InvoicesContext);

	const { payStatus, displayStatus } = selInvoice;

	const status = useMemo(() => payStatus(invoice), [invoice, payStatus]);
	const displayButton = useMemo(() => displayStatus(invoice), [invoice, displayStatus]);
	const payment = useMemo(() => lastPayment(invoice), [invoice, lastPayment]);

	const onRemoveLastPayment = useCallback(() => {
		const { amount, date } = payment;
		toast.error(
			<ToastDialogDelete
				reqType="delete"
				itemName={`the last payment? of ${amount} made on ${date}`}
				confirmLabel="Last payment removed."
				actionHandler={() => removeLast()}
			/>, {
			autoClose: false
		})
	}, [payment, removeLast]);

	return {
		status,
		displayButton,
		payment,
		onRemoveLastPayment
	};
}

export default useSetPaymentStatus
