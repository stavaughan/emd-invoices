import { useState, useMemo, useEffect } from 'react';
import { updateInvoice } from 'features/invoices/invoiceDataSlice';
import { AddPaymentInputs } from 'pages/Invoices/components/Forms';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';
import { formsLogic } from '../Forms';

const AddPaymentModal = ({ modalID }) => {

    const { filteredInvoices, selectedID, isLoading } = useSelector(state => state.invoicedata);

    const initialInvoice = useMemo(() => {
		return formsLogic.initialInvoicePayments(filteredInvoices, selectedID)
	}, [filteredInvoices, selectedID]);

    const [requestData, setRequestData] = useState({
        id: '', reqBody: { paidStatus: '', payments: [] }
    });
    const [entering, setEntering] = useState(false);
	const [clear, setClear] = useState(false);

	useEffect(() => {
		if(clear) {
			let timeout = setTimeout(() => {
				setClear(false)
			}, 300);
			return () => clearTimeout(timeout);
		}
	}, [clear])

    const clearForm = () => {
        setRequestData({
			id: '', reqBody: { paidStatus: '', payments: [] }
		})
		setEntering(false);
		setClear(true);
    };

    return (
        <UpdateItemForm
            size="md"
            modalID={modalID}
            clearForm={clearForm}
            updateItem={requestData}
            updateSlice={updateInvoice}
			isLoading={isLoading}
            modalTitle={`Record Payment for Invoice ${initialInvoice.number}`}
            formTitle="Record payment"
			setEntering={setEntering}
			entering={entering}
        >
            <div className="p-3">
                <AddPaymentInputs
                    selectedID={selectedID}
                    initialInvoice={initialInvoice}
                    setRequestData={setRequestData}
                    setEntering={setEntering}
					clear={clear}
                />
            </div>
        </UpdateItemForm>
    )
}

export default AddPaymentModal
