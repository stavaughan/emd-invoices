import { ActionCellRow } from 'components/Tables/components';
import { AllItemsSection } from 'components/Page/ListPage';
import { InvoicesTableRow, InvoiceFilters, useAllInvoices } from '.';
import { UpdateModals } from 'pages/Invoices/components/Forms';
import { InvoicesSnapShots } from '../SnapShot';

import { SiteData } from 'data';

const AllInvoicesTable = (props) => {

	const res = useAllInvoices({
		itemsData: props?.itemsData,
		groupDisplayed: props?.groupDisplayed,
		setFilter: props.filterProps?.setFilter,
		setTitle: props?.filterProps?.setTableTitle,
	});

	return (
		<>
			<InvoicesSnapShots
				initTitle={props?.filterProps?.initTitle}
				setTableTitle={props?.filterProps?.setTableTitle}
				setFilter={props?.filterProps?.setFilter}
				filter={props?.filterProps?.filter}
				snapShotData={props?.snapShotData}
			/>
			<AllItemsSection
				id="invoices"
				pageID="invoices"
				count={props?.count}
				title={props?.title}
				visibleItems={res?.visibleElems?.invoices}
				searchData={res?.allInvoices}
				searchKey="number"
				setSelID={res?.setSearchData}
				setSearchData={res?.setSearchData}
				printRefAll={res?.printRef}
				message={res?.message}
				HeadActions={res?.ToolButtons}
				BodyActions={() => <InvoiceFilters {...props?.filterProps } />}
				btnCount={9}
				bodyFooter={props?.bodyFooter}
				pageCountInfo={props?.pageCountInfo}
			>
				{props?.itemsData.map(item => (
					<ActionCellRow
						key={item._id}
						itemID={item._id}
						print={true}
						sentStatus={item?.sentStatus}
						printModalID={SiteData.modalIDs.invoicePrint}
						activeID={res?.selectedID}
						setEditID={props?.setEditID}
						setDeleteID={props?.setDeleteID}
						setMessage={res?.setMessage}
						rowSelectFN={res?.setSelID}
						setActiveID={res?.setSelID}
						rowActions={res?.rowActions}
						loading={false}
						active={res?.isActiveID(item?._id)}
						sticky={true}
					>
						<InvoicesTableRow
							item={item}
							rowSelectFN={res?.setSelID}
							active={res?.isActiveID(item?._id)}
							onReverseSent={res?.onReverseSent}
						/>
					</ActionCellRow>
				))}
			</AllItemsSection>
			<UpdateModals />
		</>
	);
};

export default AllInvoicesTable;
