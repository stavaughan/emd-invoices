import { FormsProvider } from 'contexts/forms-context';
import { InvoicesProvider } from 'contexts/invoices-context';
import { SiteData } from 'data';
import { TempPriceInput } from '.';

const BulkInvoiceForm = () => {
	return (
		<FormsProvider
			modalID={SiteData.modalIDs.bulkInvoices}
			collection='invoicedata'
			itemTitle="Invoice"
		>
			<InvoicesProvider>
				<div className="p-3">
					<TempPriceInput />
				</div>
			</InvoicesProvider>
		</FormsProvider>
	)
}

export default BulkInvoiceForm
