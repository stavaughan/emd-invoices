import { DataContext } from 'contexts';
import { setSelectInvoiceID, filterInvoices, updateInvoice } from 'features/invoices/invoiceDataSlice';
import { useCallback, useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InvoiceToolButtons } from '.';

const useAllInvoices = ({
	itemsData,
	groupDisplayed,
	setFilter,
	setTitle
}) => {

	const { visibleElems, setVisibleElems } = useContext(DataContext)

	const printRef = useRef(null)

	const { invoices, selectedID, sortBy } = useSelector(state => state.invoicedata)

	const dispatch = useDispatch();
	const setSelID = useCallback((id) => dispatch(setSelectInvoiceID({ id })), [dispatch]);
	const setSearchData = useCallback((id) => {
		const number = invoices?.find(item => item._id === id)?.number;
		setFilter(true);
		setTitle(`Search results: invoice ${number}`);
		dispatch(filterInvoices({
			facet: '_id',
			value: id
		}))
	}, [dispatch, setFilter, setTitle, invoices]);

	const [message, setMessage] = useState('');

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
		groupDisplayed={groupDisplayed}
	/>, [itemsData, sortBy, groupDisplayed]);

	const onReverseSent = useCallback((id) => {
		dispatch(updateInvoice({
			id,
			reqBody: {
				sentStatus: 'noSent',
				dateSent: null
			}
		}));
	}, [dispatch]);

	return {
		printRef,
		rowActions,
		isActiveID,
		ToolButtons,
		allInvoices: invoices,
		onReverseSent,
		visibleElems,
		selectedID,
		setSearchData,
		setSelID,
		message,
		setMessage
	}
}

export default useAllInvoices
