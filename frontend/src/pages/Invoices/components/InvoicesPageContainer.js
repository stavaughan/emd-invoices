import React from 'react';
import { SelectedItemTitle } from 'components/Blocks/TitleBlocks';
import { Col } from 'components/HTML';
import { ListPageWrapper, SelectedItemContainer } from 'components/Page/ListPage';
import { ActionButtons } from 'components/Tables';
import { AllInvoicesTable, SelectedItemDetails, useInvoicesLogic } from '.';
import { DisplayGroupModal } from './Modals';

const InvoicesPageContainer = (props) => {

	const res = useInvoicesLogic(
		props?.filteredInvoices,
		props?.selectedID,
		props?.selectedInvoice,
		props?.businesses,
	);

	const invoicesFilterProps = {
		...props?.filterProps,
		setFilter: res?.setFilter,
		setCancelFilter: res?.setCancelFilter,
		setActiveFilterID: res?.setActiveFilterID,
		activeFilterID: res?.activeFilterID,
		filter: res?.filter,
	};

	return (
		<ListPageWrapper
			visibility={res?.currentPage?.items?.length ? 'show' : 'hide'}
		>
			<AllInvoicesTable
				count={res?.invoiceCount}
				title={props?.title}
				itemsData={res?.currentPage?.items}
				filterProps={invoicesFilterProps}
				invoices={props?.filteredInvoices}
				setDeleteID={res?.setDeleteId}
				snapShotData={props?.snapShotData}
				setEditID={res?.setEditID}
				bodyFooter={res?.bodyFooter}
				pageCountInfo={res?.countFooter}
				groupDisplayed={props?.groupDisplayed}
				setFilter={res?.setFilter}
			/>
			<Col cols="xl-4">
				<SelectedItemContainer
					printRef={res?.printRef}
					unitLabel="invoice"
					HeaderActions={() => <ActionButtons
						type="pe"
						id={props?.selectedID}
						test={props?.selectedID}
						printRef={res?.printRef}
						setEditID={res?.setEditID}
						editOn={res?.editID === props?.selectedID}
						collection="invoices"
					/>}
					visible={res?.visibleElems.invoices}
					visibleFN={res?.visibleFN}
					btnCount={4}
				>
					{props?.selectedInvoice?.number && (
						<SelectedItemTitle title={res?.selectedTitle} />
					)}
					<SelectedItemDetails
						invoice={props?.selectedInvoice}
						services={props?.services}
						customers={props?.customers}
						business={res?.business}
						removeLast={res?.handleRemoveLastPayment}
						setEditSubmit={res?.setEditSubmit}
						editSubmit={res?.editSubmit}
						selector={res?.selector}
						setEditID={res?.setEditID}
						editID={res?.editID}
					/>
				</SelectedItemContainer>
			</Col>
			<DisplayGroupModal />
		</ListPageWrapper>
	);
};

export default InvoicesPageContainer;
