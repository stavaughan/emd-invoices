import { Loader } from 'components/Loader';
import { InvoicesProvider } from 'contexts/invoices-context';
import { Suspense, useMemo, useRef } from 'react';
import { ComponentToPrint } from 'services';
import { Invoice } from '.';
import { useMobile } from 'hooks';

const PrintableInvoice = ({ invoice }) => {

	const { isXSmall } = useMobile();

	const printRef = useRef(null);

	const documentTitle = useMemo(() => {
		const paid = invoice?.paidStatus === 'Paid' ? '_paid' : '';
		return `invoice${invoice?.number + paid}`;
	}, [invoice?.number, invoice?.paidStatus]);

	return (
		<Suspense fallback={<Loader />}>
			<InvoicesProvider>
				<ComponentToPrint
					printRef={printRef}
					documentTitle={documentTitle}
					{...isXSmall && { top: '32%' }}
				>
					<Invoice
						printRef={printRef}
						invoice={invoice}
					/>
				</ComponentToPrint>
			</InvoicesProvider>
		</Suspense>
	)
}

export default PrintableInvoice
