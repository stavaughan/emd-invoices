import { useState, useMemo, useEffect } from 'react';
import { SelectInvoiceIDs, PaymentAndMethodInputs } from 'pages/Invoices/components/Forms';
import { updateInvoices } from 'features/invoices/invoiceDataSlice';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';
import { formsLogic } from 'pages/Invoices/components/Forms';
import { useSelectorAlert } from 'hooks';

const AddBulkPaymentModal = ({ modalID }) => {

	const { filteredInvoices } = useSelector(state => state.invoicedata)

	const invoicesData = useMemo(() => {
		return filteredInvoices.filter(invoice => invoice?.paidStatus !== 'Paid')
	}, [filteredInvoices]);

	const [entering, setEntering] = useState(false);
	const [payment, setPayment] = useState(formsLogic.initialPayment);
	const [selectedIDs, setSelectedIDs] = useState([]);
	const [requestData, setRequestData] = useState([]);
	const [clear, setClear] = useState(false);

	useEffect(() => {
		if (clear) {
			let timeout = setTimeout(() => {
				setClear(false)
			}, 300);
			return () => clearTimeout(timeout);
		}
	}, [clear])

	const clearForm = () => {
		setClear(true);
		setEntering(false);
		setSelectedIDs([])
		setRequestData([])
		setPayment(formsLogic.initialPayment);
	};

	const { selector } = useSelectorAlert('invoicedata', 'Payment statuses updated.');

	return (
		<UpdateItemForm
			entering={entering}
			clearForm={clearForm}
			updateItem={requestData}
			updateSlice={updateInvoices}
			setEntering={setEntering}
			selector={selector}
			modalTitle="Record Invoice Payments"
			modalID={modalID}
		>
			<div className="p-3">
				<PaymentAndMethodInputs
					payment={payment}
					setPayment={setPayment}
					setEntering={setEntering}
					entering={entering}
				/>
				<SelectInvoiceIDs
					paymentAmount={payment.amount_paid}
					notPaidInvoices={invoicesData}
					setSelectedIDs={setSelectedIDs}
					selectedIDs={selectedIDs}
					setRequestData={setRequestData}
					entering={entering}
					payment={payment}
				/>
			</div>
		</UpdateItemForm>
	)
}

export default AddBulkPaymentModal;
