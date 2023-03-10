import { PayWrap } from '.';
import '../styles/invoice.css';

const InvoiceAmounts = (props) => {

	return (
		<tfoot>
			{props?.taxRate ? (
				<>
					<PayWrap
						label="Sub Total"
						amount={props?.amounts?.subTotal}
						margin="pt-3"
					/>
					<PayWrap
						label={`Sales Tax ${props?.taxRate}%`}
						amount={props?.amounts?.salesTax}
					/>
				</>
			) : null}
			<PayWrap
				label="Net Total"
				amount={props?.amounts?.netTotal}
				margin={!props?.taxRate ? "pt-3" : ''}
			/>
			{props?.payments?.length ? (
				<>
					<PayWrap
						label={`Payment on ${props?.amounts?.lastPaymentDate}`}
						amount={props?.amounts?.lastPaymentAmount}
						methodLine={props?.amounts?.lastPaymentMethodLine}
					/>
					<PayWrap
						label="Payments Received"
						amount={props?.amounts?.paymentsReceived}
					/>
				</>
			) : null}
			<PayWrap
				label={props?.amounts?.netBalanceMessage}
				amount={props?.amounts?.netBalance}
				color={props?.color}
				pclass="font-semibold"
			/>
		</tfoot>
	);
};

export default InvoiceAmounts;
