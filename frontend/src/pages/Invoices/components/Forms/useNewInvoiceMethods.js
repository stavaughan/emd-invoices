import { useState, useMemo, useContext, useCallback } from "react";
import { InvoicesContext, DatesContext, FormsContext } from "contexts";
import { useSelector } from "react-redux";
import { useClear } from "hooks";
import { SiteData } from "data";
import { Global } from "globals/js";

const useNewInvoiceMethods = () => {

	const [busID, setBusID] = useState('');
	const [servID, setServID] = useState('');

	const { services } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)

	const {
		clear,
		newItem,
		setNewItem,
		entering,
		setEntering
	} = useContext(FormsContext);

	const { customerBusName, newInvoiceNumber, businessOptions } = useContext(InvoicesContext);
	const { formats } = useContext(DatesContext);

	const selectBusiness = useCallback((busID) => {
		const busPfx = businesses.find(_ => _._id === busID).busPfx
		const today = new Date();
		const todayStr = today.getTime();
		setNewItem(prev => ({
			...prev,
			number: newInvoiceNumber(busPfx),
			date: formats(today).dateFull,
			dateCreated: todayStr,
			dateString: todayStr,
			contrID: busID
		}));
	}, [newInvoiceNumber, formats, businesses, setNewItem]);

	const onSelectBusiness = useCallback((value) => {
		setBusID(value)
		selectBusiness(setNewItem, value)
		setEntering(true)
	}, [selectBusiness, setNewItem, setEntering]);

	const customerOptions = useCallback(() => {
		if (!customers?.length) return [];
		return customers.map(customer => ({
			_id: customer._id,
			label: customerBusName(customer)
		}));
	}, [customerBusName, customers]);

	const servicesOptions = useCallback(() => {
		if (!services?.length) return [];
		const duplicateItems = Global.duplicateItems(services, 'title');
		const uniqueItems = duplicateItems.unique;
		if (!uniqueItems?.length) return [];
		const uniqueOptions = uniqueItems?.map(title => services.find(_ => _.title === title));
		return uniqueOptions.map(_ => ({
			_id: _._id,
			label: _.title
		}));
	}, [services]);

	const setValue = useCallback((field) => {
		return (value) => setNewItem((prev) => ({ ...prev, [field]: value }));
	}, [setNewItem]);

	const paymentTerms = useMemo(() => SiteData.forms.invoices.paymentTerms, []);

	const onSelectService = useCallback((value) => {
		setServID(value);
		const service = services.find((_) => _._sID === value);
		setNewItem((prev) => ({
			...prev,
			priceType: service?.priceType,
			invoicePrice: service?.unit_price,
			rendered_services: [
				{
					sID: value,
					units: 1,
					amount: service?.unit_price,
				},
			],
		}));
		setEntering(true);
	}, [setNewItem, setEntering, services]);

	const onSelectPaymentTerms = useCallback((value) => {
		const terms = paymentTerms.find((_) => _._id === value);
		setNewItem((prev) => ({
			...prev,
			dateDue: terms.label,
			paymentTerms: value,
		}));
	}, [setNewItem, paymentTerms]);

	useClear(clear, () => {
		setServID("");
		setBusID("");
	});

	return {
		customerOptions,
		servicesOptions,
		paymentTerms,
		onSelectService,
		onSelectPaymentTerms,
		onSelectBusiness,
		businessOptions,
		newItem,
		entering,
		setValue,
		servID,
		busID
	};
}

export default useNewInvoiceMethods
