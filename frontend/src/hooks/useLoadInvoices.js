import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLoadData } from ".";

const useLoadInvoices = () => {

	const { isLoading: l1 } = useSelector(state => state.invoicedata)
	const { isLoading: l2 } = useSelector(state => state.customers)
	const { isLoading: l3 } = useSelector(state => state.businesses)

	const dataLoading = useMemo(() => [l1, l2, l3].includes(true), [l1, l2, l3])

	return { loading: dataLoading }
}

export default useLoadInvoices
