import { InvoicesContext } from 'contexts';
import {
	filterInvoiceByYear,
	filterInvoices,
	resetInvoiceFilters
} from 'features/invoices/invoiceDataSlice';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useSetFilter = ({ filterProps, setSearchID, searchID }) => {

	const { selectedInvoice } = useSelector(state => state.invoicedata)

	const dispatch = useDispatch();

	const {
		filteredCustomers,
		filteredBusinesses,
		filteredYear
	} = useContext(InvoicesContext).filterLogic;

	const filterOptions = useMemo(() => ({
		byYear: filteredYear(),
		byClient: filteredCustomers(filterProps?.customers),
		byBusiness: filteredBusinesses(filterProps?.businesses)
	}), [filteredYear, filteredCustomers, filteredBusinesses, filterProps?.customers, filterProps?.businesses]);

	useEffect(() => {
		if (selectedInvoice && selectedInvoice?._id === searchID) {
			filterProps?.setFilter(true);
			filterProps.setTableTitle(`Invoice Number: ${selectedInvoice?.number}`);
			setSearchID('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedInvoice?._id, searchID])

	useEffect(() => {
		if(searchID) {
			dispatch(filterInvoices({ facet: '_id', value: searchID }));
		}
	}, [dispatch, searchID]);

	const onFilterByYear = useCallback((item, label) => {
		filterProps?.setFilter(true)
		filterProps?.setTableTitle(`Invoices by ${label}: ${item.label}`)
		dispatch(filterInvoiceByYear({ year: item.id }))
	}, [dispatch, filterProps])

	const onFilterInvoices = useCallback((item, label, filterID) => {
		filterProps?.setFilter(true)
		filterProps?.setTableTitle(`Invoices by ${label}: ${item.label}`)
		dispatch(filterInvoices({ facet: filterID, value: item.id }))
	}, [dispatch, filterProps]);

	const onClickHandler = useCallback((label, filterID) => {
		return (item) => {
			label === 'Year'
				? onFilterByYear(item, label)
				: onFilterInvoices(item, label, filterID)
		}
	}, [onFilterByYear, onFilterInvoices]);

	const onClickReset = () => {
        filterProps?.setTableTitle(filterProps?.initTitle);
        filterProps?.setFilter(false)
        dispatch(resetInvoiceFilters())
    };

	return { onClickHandler, filterOptions, onClickReset }
}

export  default  useSetFilter;
