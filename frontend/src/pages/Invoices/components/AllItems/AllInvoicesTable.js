import { useState, useCallback, useRef, useContext } from 'react';
import { setSelectInvoiceID, updateInvoice } from 'features/invoices/invoiceDataSlice';
import { ActionCellRow } from 'components/Tables/components';
import { AllItemsSection } from 'components/Page/ListPage';
import { InvoicesTableRow, InvoiceFilters, InvoiceToolButtons } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateModals } from 'pages/Invoices/components/Forms'
import { DataContext } from 'contexts';
import { useSetFilter } from '.';

const AllInvoicesTable = ({
	pageID,
	count,
	title,
	itemsData,
	filterProps,
	printModalID,
	setDeleteID,
	setEditID,
	bodyFooter,
	pageCountInfo
}) => {

	const { visibleElems, setVisibleElems } = useContext(DataContext)
	const [searchID, setSearchID] = useState('');

	const printRef = useRef(null)

	const { invoices, selectedID, sortBy } = useSelector(state => state.invoicedata)
	const dispatch = useDispatch();
	const setSelID = useCallback((id) => dispatch(setSelectInvoiceID({ id })), [dispatch]);

	const [message, setMessage] = useState('');

	const {
		onClickHandler,
		filterOptions,
		onClickReset
	} = useSetFilter({ filterProps, setSearchID, searchID })

	const rowActions = useCallback((id) => {
		setSelID(id);
		setVisibleElems(prev => ({ ...prev, invoices: 'hide-small' }));
	}, [setSelID, setVisibleElems])

	const isActiveID = useCallback((id) => {
		return !selectedID ? itemsData[0]._id === id : selectedID === id;
	}, [itemsData, selectedID]);

	const ToolButtons = useCallback(() => <InvoiceToolButtons
		test={itemsData?.length}
		printRef={printRef}
		sortBy={sortBy}
	/>, [itemsData, sortBy]);

	const onReverseSent = useCallback((id) => {
		dispatch(updateInvoice({
			id,
			reqBody: {
				sentStatus: 'noSent',
				dateSent: null
			}
		}));
	}, [dispatch]);

	return (
		<>
			<AllItemsSection
				id="invoices"
				pageID={pageID}
				count={count}
				title={title}
				visibleItems={visibleElems.invoices}
				searchData={invoices}
				searchKey="number"
				setSearchID={setSearchID}
				setSelID={setSelID}
				printRefAll={printRef}
				message={message}
				HeadActions={ToolButtons}
				BodyActions={() => <InvoiceFilters
					filter={filterProps.filter}
					filterOptions={filterOptions}
					onClickHandler={onClickHandler}
					onClickReset={onClickReset}
				/>}
				btnCount={9}
				bodyFooter={bodyFooter}
				pageCountInfo={pageCountInfo}
			>
				{itemsData.map(item => (
					<ActionCellRow
						key={item._id}
						itemID={item._id}
						print={true}
						sentStatus={item?.sentStatus}
						printModalID={printModalID}
						activeID={selectedID}
						setEditID={setEditID}
						setDeleteID={setDeleteID}
						setMessage={setMessage}
						rowSelectFN={setSelID}
						setActiveID={setSelID}
						rowActions={rowActions}
						loading={false}
						active={isActiveID(item._id)}
					>
						<InvoicesTableRow
							item={item}
							rowSelectFN={setSelID}
							active={isActiveID(item._id)}
							onReverseSent={onReverseSent}
						/>
					</ActionCellRow>
				))}
			</AllItemsSection>
			<UpdateModals />
		</>
	);
};

export default AllInvoicesTable;
