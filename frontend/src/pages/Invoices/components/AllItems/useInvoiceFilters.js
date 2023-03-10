import { useCallback, useContext } from 'react';
import { InvoicesContext } from 'contexts';
import { useSelector } from 'react-redux';
import { Global } from 'globals/js';

const useInvoiceFilters = () => {

	const { invoices } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)

	const { customerBusName } = useContext(InvoicesContext);

	const fullName = useCallback((fCutomers, clientID) => {
		const customer = fCutomers.find(c => c._id === clientID);
		return customerBusName(customer);
	}, [customerBusName]);

	// called by: InvoiceFilters
	const filteredCustomers = useCallback((fCutomers) => {
		const clientIDs = invoices?.length ? [...new Set(invoices.map(_ => _.clientID))] : [];
		return clientIDs.map(id => ({
			id,
			label: fullName(fCutomers, id)
		}))
	}, [invoices, fullName]);

	// called by: InvoiceFilters
	const filteredBusinesses = useCallback((fBusinesses) => {
		const busIDs = invoices?.length ? [...new Set(invoices.map(_ => _.contrID))] : [];
		return busIDs.map(busID => ({
			id: busID,
			label: fBusinesses.find(c => c._id === busID)?.longName
		}))
	}, [invoices]);

	// called by: InvoiceFilters
	const filteredYear = useCallback(() => {
		const allYears = invoices.map(invoice => new Date(invoice.dateCreated).getFullYear());
		const years = Global.uniqueArray(allYears);
		return years.map(_ => ({ id: _, label: _ }))
	}, [invoices]);

	const filteredGroups = useCallback(() => {
		const allGroups = invoices
			.filter(invoice => !!invoice?.groupID)
			.map(invoice => invoice?.groupID);
		const groups = Global.uniqueArray(allGroups);
		return groups.map(_ => ({ id: _, label: _ }))
	}, [invoices]);

	const getFilterOptions = useCallback(() => ({
		byYear: filteredYear(),
		byClient: filteredCustomers(customers),
		byBusiness: filteredBusinesses(businesses),
		byGroup: filteredGroups()
	}), [
		filteredYear,
		filteredCustomers,
		filteredBusinesses,
		filteredGroups,
		customers,
		businesses
	]);

	return { getFilterOptions };
}

export default useInvoiceFilters
