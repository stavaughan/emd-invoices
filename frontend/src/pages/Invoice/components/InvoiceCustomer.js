import { AddressBlock } from '.';

import '../styles/invoice.css';

const InvoiceCustomer = ({ customer, customerName }) => {

	return (
		<div className="w-100">
			<div className="text-xxs fw-light text-muted mb-1">INVOICE TO</div>
			<h3 className="text-dark">
				{customerName}
			</h3>
			<div className="d-flex flex-column text-sm">
				{(customer?.address && !!customer?.address?.physical?.street1) && (
					<AddressBlock address={customer?.address?.physical} />
				)}
				<div>
					{customer?.email || null}
				</div>
				<div>
					{customer?.phone || null}
				</div>
			</div>
		</div>
	);
};

export default InvoiceCustomer;
