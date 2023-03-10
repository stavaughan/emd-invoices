import { useState, useMemo, useEffect } from 'react';
import { updateInvoice } from 'features/invoices/invoiceDataSlice';
import { AddPaymentInputs } from 'pages/Invoices/components/Forms';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';
import { formsLogic } from '../Forms';
import { useSelectorAlert } from 'hooks';

const AddPaymentModal = ({ modalID }) => {

	const { filteredInvoices, selectedID } = useSelector(state => state.invoicedata);

	const initialInvoice = useMemo(() => formsLogic.initialInvoicePayments(filteredInvoices, selectedID), [filteredInvoices, selectedID])
	const initialState = {
		id: '',
		reqBody: {
			paidStatus: '',
			payments: []
		}
	};

	const [requestData, setRequestData] = useState(initialState);
	const [entering, setEntering] = useState(false);
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
		setRequestData(initialState)
		setEntering(false);
		setClear(true);
	};

	const { selector } = useSelectorAlert('invoicedata', 'Payment status updated.');

	return (
		<UpdateItemForm
			entering={entering}
			clearForm={clearForm}
			updateItem={requestData}
			updateSlice={updateInvoice}
			setEntering={setEntering}
			selector={selector}
			modalTitle={`Record Payment for Invoice ${initialInvoice.number}`}
			modalID={modalID}
			size="md"
		>
			<AddPaymentInputs
				selectedID={selectedID}
				initialInvoice={initialInvoice}
				setRequestData={setRequestData}
				setEntering={setEntering}
				clear={clear}
			/>
		</UpdateItemForm>
	)
}

export default AddPaymentModal
