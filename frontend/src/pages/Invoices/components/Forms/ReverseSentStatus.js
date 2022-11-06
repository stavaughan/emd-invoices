import { useMemo, useState, useCallback } from 'react';
import { updateInvoice } from 'features/invoices/invoiceDataSlice';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';

const ReverseSentStatus = ({ modalID }) => {

    const { filteredInvoices, selectedID, isLoading } = useSelector(state => state.invoicedata)

	const [entering, setEntering] = useState(true);

    const invoiceNumber = useMemo(() => {
        if (!filteredInvoices?.length) return '';
        const invoice = filteredInvoices?.find(_ => _._id === selectedID);
        const totalPayments = invoice?.payments?.length
            ? invoice?.payments.map(_ => _.amount_paid).reduce((a,b) => a + b, 0) : 0;
        if(totalPayments) {
            return ''
        }
        return invoice?.number
    }, [filteredInvoices, selectedID]);

	const clearForm = useCallback(() => {
		setEntering(true)
	}, [setEntering]);

    return (
        <UpdateItemForm
            modalID={modalID}
            updateItem={{
                id: selectedID,
                reqBody: {
                    sentStatus: 'noSent',
                    dateSent: null
                }
            }}
			isLoading={isLoading}
            updateSlice={updateInvoice}
            modalTitle={`Set Invoice ${invoiceNumber} as "Not Sent"`}
            formTitle="reverse status update"
			entering={entering}
			setEntering={setEntering}
			clearForm={clearForm}
        />
    );
}

export default ReverseSentStatus
