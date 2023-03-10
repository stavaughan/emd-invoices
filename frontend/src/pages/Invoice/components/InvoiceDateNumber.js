import { ItemFloatRight, InvoiceNumber } from '.';
import '../styles/invoice.css';

const InvoiceDateNumber = ({ invoice, dates, color }) => {

	const invoiceSent = invoice?.sentStatus === 'sent';

	return (
		<>
			<InvoiceNumber
				number={invoice?.number}
				sentStatus={invoice.sentStatus}
				sent={invoiceSent}
				color={color}
			/>
			<div className="my-2">
				<ItemFloatRight
					label={invoiceSent ? 'Invoice date:' : 'Estimate date:'}
					name={invoiceSent ? dates?.dateSent : dates?.dateCreated}
				/>
				{(invoiceSent && !!dates?.dueDate) && (
					<ItemFloatRight
						label="Due date:"
						name={dates?.dueDate}
					/>
				)}
				{invoiceSent && (
					<ItemFloatRight
						label="Payment terms:"
						name={dates?.terms}
					/>
				)}
			</div>
		</>
	);
};

export default InvoiceDateNumber;
