import { usePagination } from 'components/Navigation/Pagination';
import { DataContext } from 'contexts';
import { useItemDelete } from 'hooks';
import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRemoveLastPayment } from './SelectedInvoice';

const useInvoicesLogic = (invoices, invoiceID, invoice, businesses) => {

	const { visibleElems, setVisibleElems } = useContext(DataContext)

	const printRef = useRef(null)

	const [editID, setEditID] = useState('');
	const [editSubmit, setEditSubmit] = useState(false);
	const [filter, setFilter] = useState(false);
	const [activeFilterID, setActiveFilterID] = useState('');
	const [cancelFilter, setCancelFilter] = useState(false);

	const business = useMemo(() => {
		return invoiceID && businesses?.length
			? businesses.find(business => business?._id === invoice?.contrID) : '';
	}, [businesses, invoice?.contrID, invoiceID])

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

	const { currentPage, bodyFooter, countFooter } = usePagination({
		data: invoices,
		itemLabel: "invoice",
		itemsPerPage: 20,
		setCancelFilter,
		cancelFilter,
		filter
	});

	const selectedTitle = useMemo(() => {
		return `Invoice: ${invoice?.number}`;
	}, [invoice?.number]);

	return {
		printRef,
		editID,
		setEditID,
		editSubmit,
		setEditSubmit,
		selectedTitle,
		filter,
		setFilter,
		setCancelFilter,
		business,
		selector,
		visibleFN,
		visibleElems,
		handleRemoveLastPayment,
		activeFilterID,
		setActiveFilterID,
		setDeleteId,
		invoiceCount,
		currentPage,
		bodyFooter: invoices?.length > 20 ? bodyFooter : null,
		countFooter
	}
}

export default useInvoicesLogic
