import { FormsProvider } from 'contexts/forms-context';
import { InvoicesProvider } from 'contexts/invoices-context';
import { InvoiceFormInputs } from '.';
import { SiteData } from 'data';

const NewInvoiceForm = () => {

	const { modalIDs } = SiteData;

	return (
		<FormsProvider
			modalID={modalIDs.newInvoice}
			collection='invoices'
			itemTitle="Invoice"
		>
			<InvoicesProvider>
				<InvoiceFormInputs />
			</InvoicesProvider>
		</FormsProvider>
	)
}

export default NewInvoiceForm
