import { InvoiceCustomer, InvoiceDateNumber } from '.';
import { Row, Col } from 'components/HTML';

import '../styles/invoice.css';

const InvoiceContact = (props) => {

	return (
		<div className="pb-4 d-flex justify-content-between align-items-start">
			<InvoiceCustomer
				customer={props?.customer}
				customerName={props?.customerName}
			/>
			<div className="flex-shrink-1">
				<InvoiceDateNumber
					invoice={props?.invoice}
					color={props?.color}
					dates={props?.dates}
				/>
			</div>
		</div>
	);
};

export default InvoiceContact;
