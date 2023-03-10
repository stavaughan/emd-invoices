import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useFilterProducts = () => {

	const { invoices } = useSelector(state => state.invoicedata)

	const findInvoicesBySID = useCallback((sid) => {
		return invoices.filter(invoice => {
			return invoice.rendered_services.find(service => service.sID === sid);
		});
	}, [invoices]);

	return {
		findInvoicesBySID
	}
}

export default useFilterProducts
