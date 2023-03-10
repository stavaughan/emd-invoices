import { useMemo, useContext } from 'react';
import { InvoicesContext } from 'contexts';
import { useSelector } from 'react-redux';
import { Global } from 'globals/js';

const useCompileInvoice = (invoice) => {

	const {
		displayStamp,
		invoiceTotals,
		invoiceDates,
		customerBusName
	} = useContext(InvoicesContext);

	const { businesses } = useSelector(state => state.businesses);
	const { customers } = useSelector(state => state.customers)

	const business = useMemo(() => {
		return businesses?.length ? businesses.find(_ => _._id === invoice?.contrID) : {};
	}, [businesses, invoice?.contrID])

	const paidStamp = useMemo(() => displayStamp(invoice), [invoice, displayStamp])

	const brandColor = business?.brandColor;

	const businessPhone = useMemo(() => {
		return business?.phone && Global.formatPhone(business?.phone)
	}, [business?.phone])

    const customer = useMemo(() => {
        return customers?.length ? customers.find(_ => _._id === invoice?.clientID) : {};
    }, [customers, invoice?.clientID]);

	const amounts = useMemo(() => invoiceTotals({
		servicesInvoiced: invoice?.rendered_services,
		sentStatus: invoice?.sentStatus,
		payments: invoice?.payments,
		taxRate: invoice?.taxRate
	}), [invoice?.rendered_services, invoice?.sentStatus, invoice?.payments, invoice?.taxRate, invoiceTotals]);

	const dates = useMemo(() => invoiceDates(invoice), [invoice, invoiceDates])

	const customerName = useMemo(() => customerBusName(customer), [customer, customerBusName]);

	return {
		business,
		customer,
		paidStamp,
		brandColor,
		customerName,
		businessPhone,
		amounts,
		dates
	}

}

export default useCompileInvoice
