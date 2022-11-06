import { InlineLabelButton } from 'components/section-content/ListingPage/SelectedItem';
import { SiteData } from 'data';
import { useSetPaymentStatus } from '.';

const PaymentStatus = ({ invoice, removeLast }) => {

	const {
		status,
		displayButton,
		payment,
		onRemoveLastPayment
	} = useSetPaymentStatus({ invoice, removeLast });

	return (
		<>
			{status.paidInFull && (
				<>{`Paid in full on ${payment.date}`}</>
			)}
			{status.partiallyPaid && payment?.amount ? (
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
					modalID={SiteData.modalIDs.invoicePayment}
					icon={["far", "credit-card"]}
				/>
			)}
		</>
	);
};

export default PaymentStatus;
