import { SelectedItemTitle } from 'components/Blocks/TitleBlocks';
import { Col } from 'components/HTML';
import { ListPageWrapper, SelectedItemContainer } from 'components/Page/ListPage';
import { ActionButtons } from 'components/Tables';
import { DataContext } from 'contexts';
import { SiteData } from 'data';
import { useItemDelete } from 'hooks';
import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AllInvoicesTable, SelectedItemDetails } from '.';
import { useRemoveLastPayment } from './SelectedInvoice';
import { usePagination, Pagination } from 'components/Navigation/Pagination';
import { Global } from 'globals/js';

const InvoicesPageContainer = ({ pageID, unitLabel, invoiceData }) => {

	const {
		invoices,
		services,
		customers,
		businesses,
		selectedInvoice,
		selectedID
	} = invoiceData;

	const initTitle = useMemo(() => {
		const currentYear = new Date().getFullYear();
		return `${Global.upperCaseFirst(pageID)} ${currentYear} YTD`
	}, [pageID])

	const [tableTitle, setTableTitle] = useState(initTitle);

	const { visibleElems, setVisibleElems } = useContext(DataContext)

	const printRef = useRef(null)

	const [editID, setEditID] = useState('');
	const [editSubmit, setEditSubmit] = useState(false);
	const [filter, setFilter] = useState(false);

	const business = useMemo(() => {
		return selectedID && businesses?.length
			? businesses.find(b => b?._id === selectedInvoice?.contrID) : '';
	}, [businesses, selectedInvoice?.contrID, selectedID])

	const { isError, isSuccess, message } = useSelector(state => state.businesses);

	const selector = useCallback((id) => ({
		isError: id === editID && isError,
		isSuccess: id === editID && isSuccess,
		message: id === editID && message
	}), [editID, isError, isSuccess, message])

	const visibleFN = useCallback((value) => setVisibleElems(prev => ({ ...prev, invoices: value })), [setVisibleElems])

	const { handleRemoveLastPayment } = useRemoveLastPayment();

	const { setDeleteId } = useItemDelete('invoices');

	const invoiceCount = useMemo(() => {
		return invoices?.length ? invoices.length : 0;
	}, [invoices]);

	const {
		handlers,
		currentPage,
		pageNumbers,
		countFooter
	} = usePagination({
		data: invoices,
		itemLabel: unitLabel,
		itemsPerPage: 20,
		filter
	});

	const bodyFooter = useMemo(() => {
		if(invoices?.length < 21) return null;
		return (
			<Pagination
				pageNumbers={pageNumbers}
				handlers={handlers}
				currentPageNumber={currentPage?.pageNumber}
				color='secondary'
				isNext={false}
			/>
		)
	}, [handlers, currentPage, pageNumbers, invoices?.length]);

	return (
		<ListPageWrapper visibility={currentPage?.items?.length ? 'show' : 'hide'}>
			<AllInvoicesTable
				pageID={pageID}
				count={invoiceCount}
				title={tableTitle}
				itemsData={currentPage?.items}
				filterProps={{
					invoices,
					customers,
					businesses,
					initTitle,
					setTableTitle,
					setFilter,
					filter
				}}
				printModalID={SiteData.modalIDs.invoicePrint}
				setDeleteID={setDeleteId}
				setEditID={setEditID}
				bodyFooter={bodyFooter}
				pageCountInfo={countFooter}
			/>
			<Col cols="xl-4">
				<SelectedItemContainer
					printRef={printRef}
					unitLabel={unitLabel}
					HeaderActions={() => <ActionButtons
						type="pe"
						id={selectedID}
						test={selectedID}
						printRef={printRef}
						setEditID={setEditID}
						editOn={editID === selectedID}
						collection="invoices"
					/>}
					visible={visibleElems.invoices}
					visibleFN={visibleFN}
					btnCount={4}
				>
					{selectedInvoice?.number && <SelectedItemTitle title={`Invoice: ${selectedInvoice?.number}`} />}
					<SelectedItemDetails
						unitLabel={unitLabel}
						invoice={selectedInvoice}
						services={services}
						customers={customers}
						business={business}
						removeLast={handleRemoveLastPayment}
						printModalID={SiteData.modalIDs.invoicePrint}
						setEditSubmit={setEditSubmit}
						editSubmit={editSubmit}
						selector={selector}
						setEditID={setEditID}
						editID={editID}
					/>
				</SelectedItemContainer>
			</Col>
		</ListPageWrapper>
	);
};

export default InvoicesPageContainer;
