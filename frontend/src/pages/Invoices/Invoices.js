import { Loader } from 'components/Loader';
import { InvoicesProvider } from 'contexts/invoices-context';
import { StartingPointsPage } from 'Layout';
import { InvoicesPageContainer, useCompileInvoices } from './components';

const Invoices = () => {

	const res = useCompileInvoices();

	return (
		<InvoicesProvider>
			{res.loading && <Loader />}
			<StartingPointsPage
				containerProps={{ className: 'py-3 px-xl-3', fluid: true }}
				dataKey="invoices"
				noPageData={!res?.loading && !res?.hasData}
			>
				<InvoicesPageContainer
					title={res.tableTitle}
					searchKey="number"
					filterProps={{
						initTitle: res?.initTitle,
						setTableTitle: res?.setTableTitle,
					}}
					groupDisplayed={res?.groupDisplayed}
					selectedInvoice={res?.selectedInvoice}
					selectedID={res?.selectedInvoice?._id}
					filteredInvoices={res?.filteredInvoices}
					snapShotData={res?.snapShotData}
					services={res?.services}
					customers={res?.customers}
					businesses={res?.businesses}
				/>
			</StartingPointsPage>
		</InvoicesProvider>
	);
};

export default Invoices;
