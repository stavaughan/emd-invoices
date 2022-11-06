import { useState, useMemo, useEffect, useContext, useCallback } from "react";
import { GroupInputRow, InputCol } from "components/Forms/components";
import { InvoicesContext } from "contexts";
import { useSelector } from "react-redux";
import { useClear } from "hooks";
import { SiteData } from "data";

const NewInvoiceInputs = ({
	setInvoice,
	invoice,
	setEntering,
	clear,
	entering
}) => {

	const { customerOptions, servicesOptions } = useContext(InvoicesContext);

	const { services } = useSelector((state) => state.invoicedata);

	const setValue = (field, value) => {
		setInvoice((prev) => ({ ...prev, [field]: value }));
	};

	//const [renderedServices, setRenderedServices] = useState([]);
	const [servID, setServID] = useState("");

	const clearStates = useCallback(() => {
		//setRenderedServices([]);
		setServID("");
	}, []);

	useClear(clear, clearStates);

	const paymentTerms = useMemo(() => SiteData.forms.invoices.paymentTerms, []);
	const customers = useMemo(() => customerOptions(), [customerOptions]);
	const serviceOptions = useMemo(() => servicesOptions(), [servicesOptions]);

	const onSelectService = (value) => {
		setServID(value);
		const service = services.find((_) => _._sID === value);
		const unitPrice = service?.unit_price;
		setInvoice((prev) => ({
			...prev,
			priceType: service?.priceType,
			invoicePrice: unitPrice,
			rendered_services: [
				{
					sID: value,
					units: 1,
					amount: unitPrice,
				},
			],
		}));
		setEntering(true);
	};

	const onSelectPaymentTerms = (value) => {
		const terms = paymentTerms.find((_) => _._id === value);
		setInvoice((prev) => ({
			...prev,
			dateDue: terms.label,
			paymentTerms: value,
		}));
	};

	useEffect(() => {
		if (!entering && servID) {
			setServID("");
			//setRenderedServices([]);
		}
	}, [entering, servID]);

	return (
		<>
			<GroupInputRow label="Details">
				<InputCol.Dropdown
					id="invoicecustomer"
					cols="12 sm-6"
					optionData={customers}
					label="Select Customer"
					onChange={(value) => setValue("clientID", value)}
					selected={invoice.clientID}
				/>
				<InputCol.Dropdown
					id="invoicepaymentterms"
					cols="12 sm-6"
					optionData={paymentTerms}
					label="Payment Terms"
					onChange={onSelectPaymentTerms}
					selected={invoice.paymentTerms}
				/>
				<InputCol.Dropdown
					cols="12 sm-6"
					id="invoiceselservice"
					optionData={serviceOptions} // TODO: multi Select for services
					label="Select Service"
					onChange={onSelectService}
					selected={servID}
				/>
			</GroupInputRow>
		</>
	);
};

export default NewInvoiceInputs;
