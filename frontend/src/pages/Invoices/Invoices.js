import { useMemo } from 'react';
import { DefaultEmpty } from 'components/EmptyState';
import { Loader } from 'components/Loader';
import { InvoicesProvider } from 'contexts/invoices-context';
import { SiteData } from 'data';
import { useLoadInvoices } from 'hooks';
import { StartingPointsPage } from 'Layout';
import { useSelector } from 'react-redux';
import { InvoicesPageContainer } from './components';

const Invoices = ({ pageID, unitLabel }) => {

	const { loading } = useLoadInvoices();

	const { services, filteredInvoices: invoices, selectedInvoice } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)

	const hasData = [customers, services, businesses].every(data => data?.length);

	return (
		<InvoicesProvider>
			{loading && <Loader />}
			<StartingPointsPage
				containerProps={{ className: 'py-3 px-xl-3', fluid: true }}
				dataKey="invoices"
				noPageData={!loading && !hasData}
			>
				{!invoices?.length && !loading ? (
					<DefaultEmpty
						title={`Click "Create invoice" to add your first invoice`}
						label="Create invoice"
						modalID={SiteData.modalIDs.newInvoice}
					/>
				) : (
					<InvoicesPageContainer
						pageID={pageID}
						unitLabel={unitLabel}
						invoiceData={{
							invoices,
							selectedInvoice,
							selectedID: selectedInvoice?._id,
							services,
							customers,
							businesses
						}}
					/>
				)}
			</StartingPointsPage>
		</InvoicesProvider>
	);
};

export default Invoices;
