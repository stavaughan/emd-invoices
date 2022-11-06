import { Loader } from 'components/Loader';
import { InvoicesProvider } from 'contexts/invoices-context';
import { Suspense, useRef } from 'react';
import { ComponentToPrint } from 'services';
import { Invoice } from '.';

const PrintableInvoice = ({ invoice, modal }) => {

	const componentRef = useRef(null);

	return (
		<Suspense fallback={<Loader />}>
			<ComponentToPrint
				componentRef={componentRef}
				documentTitle={`invoice${invoice?.number}`}
				modal={modal}
			>
				<InvoicesProvider>
					<Invoice invoice={invoice} />
				</InvoicesProvider>
			</ComponentToPrint>
		</Suspense>
	)
}

export default PrintableInvoice
