import { useContext, useMemo } from 'react';
import { ItemFloatRight, InvoiceNumber } from '.';
import { InvoicesContext } from 'contexts';
import '../styles/invoice.css';


const InvoiceDateNumber = ({ invoice, color }) => {

	const { invoiceDates } = useContext(InvoicesContext);

	const { dateSent, dueDate, terms } = useMemo(() => invoiceDates({
		dateSent: invoice?.dateSent || '',
		paymentTerms: invoice?.paymentTerms
	}), [invoice?.dateSent, invoice?.paymentTerms, invoiceDates])

	return (
		<>
			<InvoiceNumber
				number={invoice?.number}
				sentStatus={invoice.sentStatus}
				color={color}
			/>
			<div className="my-2">
				{dateSent && (
					<ItemFloatRight
						label={`Invoice Date:`.toUpperCase()}
						name={dateSent}
					/>
				)}
				{dueDate && (
					<ItemFloatRight
						label={`Due Date:`.toUpperCase()}
						name={dueDate}
					/>
				)}
				<ItemFloatRight
					label={`Payment Terms:`.toUpperCase()}
					name={terms}
				/>
			</div>
		</>
	);
};

export default InvoiceDateNumber;
