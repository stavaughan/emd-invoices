import { InvoicesContext } from 'contexts';
import { useMemo, useContext } from 'react';
import { PayWrap } from '.';
import '../styles/invoice.css';

const InvoiceAmounts = ({ servicesInvoiced, color, payments, taxRate, sentStatus }) => {

	const { invoiceTotals } = useContext(InvoicesContext);

	const amounts = useMemo(() => invoiceTotals({
		servicesInvoiced,
		sentStatus,
		payments,
		taxRate
	}), [servicesInvoiced, payments, taxRate, sentStatus, invoiceTotals])

	return (
		<tfoot>
			{taxRate ? (
				<>
					<PayWrap
						label="Sub Total"
						amount={amounts?.subTotal}
						margin="pt-3"
					/>
					<PayWrap
						label={`Sales Tax ${taxRate}%`}
						amount={amounts?.salesTax}
					/>
				</>
			) : null}
			<PayWrap
				label="Net Total"
				amount={amounts?.netTotal}
				margin={!taxRate ? "pt-3" : ''}
			/>
			{payments?.length ? (
				<>
					<PayWrap
						label={`Payment on ${amounts?.lastPaymentDate}`}
						amount={amounts?.lastPaymentAmount}
					/>
					<PayWrap
						label="Payments Received"
						amount={amounts?.paymentsReceived}
					/>
				</>
			) : null}
			<PayWrap
				label={amounts?.netBalanceMessage}
				amount={amounts?.netBalance}
				color={color}
				pclass="font-semibold"
			/>
		</tfoot>
	);
};

export default InvoiceAmounts;
