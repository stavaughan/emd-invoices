import { useCallback } from 'react';
import { filterInvoiceByYear, filterInvoices } from 'features/invoices/invoiceDataSlice';
import { useDispatch } from 'react-redux';

const useFilterInvoices = (setFilter, setTableTitle) => {

	const dispatch = useDispatch();

	const onFilterByYear = useCallback((year) => {
		setFilter(true)
		setTableTitle(`Invoices ${year}`)
		dispatch(filterInvoiceByYear({ year }))
	}, [setFilter, setTableTitle, dispatch])

	const onFilterInvoices = useCallback((item, k, v) => {
		setFilter(true)
		setTableTitle(`Invoices by ${v}: ${item.label}`)
		dispatch(filterInvoices({
			facet: k,
			value: item.id
		}))
	}, [setFilter, setTableTitle, dispatch]);

	return {
		onFilterByYear,
		onFilterInvoices
	}
}

export default useFilterInvoices
