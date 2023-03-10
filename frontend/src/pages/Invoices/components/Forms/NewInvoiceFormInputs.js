import { InputCol, GroupInputRow } from 'components/Forms/components';
import { useNewInvoiceMethods } from '.';

const NewInvoiceFormInputs = () => {

	const {
		customerOptions,
		servicesOptions,
		paymentTerms,
		onSelectService,
		onSelectPaymentTerms,
		onSelectBusiness,
		businessOptions,
		newItem,
		setValue,
		servID,
		busID
	} = useNewInvoiceMethods();

	return (
		<div className="p-3">
			<GroupInputRow label="Select Business">
				<InputCol.Dropdown
					id="invoicebusinesssel"
					cols="12 sm-6"
					optionData={businessOptions()}
					onChange={onSelectBusiness}
					selected={busID}
				/>
			</GroupInputRow>
			<GroupInputRow label="Details">
				<InputCol.Dropdown
					id="invoicecustomer"
					cols="12 sm-6"
					optionData={customerOptions()}
					label="Select Customer"
					onChange={setValue("clientID")}
					selected={newItem.clientID}
				/>
				<InputCol.Dropdown
					id="invoicepaymentterms"
					cols="12 sm-6"
					optionData={paymentTerms}
					label="Payment Terms"
					onChange={onSelectPaymentTerms}
					selected={newItem.paymentTerms}
				/>
				<InputCol.Dropdown
					cols="12 sm-6"
					id="invoiceselservice"
					optionData={servicesOptions()} // TODO: multi Select for services
					label="Select Service"
					onChange={onSelectService}
					selected={servID}
				/>
			</GroupInputRow>
		</div>
	)
}

export default NewInvoiceFormInputs
