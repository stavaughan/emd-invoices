import { useMemo, useContext } from 'react';
import { InlineLabelButton } from 'components/section-content/ListingPage/SelectedItem';
import { PaymentDescription } from 'pages/Invoices/components';
import { InvoicesContext } from 'contexts';
import { toast } from 'react-toastify';
import { SiteData } from 'data';
import { ToastDialogDelete } from 'components/Toasts';

const PaymentStatus = ({ invoice, removeLast }) => { 

	const { selInvoice, lastPayment } = useContext(InvoicesContext);

	const { payStatus, displayStatus } = selInvoice;

	const { modalIDs } = SiteData;

	const status = useMemo(() => payStatus(invoice), [invoice, payStatus]);
	const displayButton = useMemo(() => displayStatus(invoice), [invoice, displayStatus]);
	const payment = useMemo(() => lastPayment(invoice), [invoice, lastPayment]);

	const onRemoveLastPayment = () => {
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
	}

	return (
		<>
			{status.paidInFull && (
				<PaymentDescription
					label={`Paid in full on ${payment.date}`}
					methodLine={payment.lastPaymentMethodLine}
				/>
			)}
			{payment?.amount ? (
				<>{`Last Payment: ${payment.amount} on ${payment.date}`}</>
			) : null}
			{displayButton.correctPayment && (
				<div className="mt-1">
					<InlineLabelButton
						label="Remove last payment"
						toolTip={SiteData.messages.invoice.removeLastPayment}
						onClick={onRemoveLastPayment}
						icon="wrench"
					/>
				</div>
			)}
			{displayButton.recordPayment && (
				<InlineLabelButton
					label={status.partiallyPaid ? "Make another payment" : "No payments received"}
					toolTip="record payment"
					modalID={modalIDs.invoicePayment}
					icon={["far", "credit-card"]}
				/>
			)}
		</>
	);
};

export default PaymentStatus;
