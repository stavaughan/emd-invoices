import { FormsProvider } from 'contexts/forms-context';
import { InvoicesProvider } from 'contexts/invoices-context';
import { NewInvoiceFormInputs } from '.';
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
				<NewInvoiceFormInputs />
			</InvoicesProvider>
		</FormsProvider>
	)
}

export default NewInvoiceForm
