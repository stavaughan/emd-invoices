import { useState, useMemo, useEffect } from 'react';
import { updateInvoices } from 'features/invoices/invoiceDataSlice';
import { InputCardContainer } from 'components/Forms/components';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';
import { MultiSentCheckBox, BulkDateSelect } from '.';
import { useSelectorAlert } from 'hooks';

const BulkSentStatus = ({ modalID }) => {

    const { filteredInvoices } = useSelector(state => state.invoicedata)

    const invoicesNotSent = useMemo(() => {
        return filteredInvoices.filter(invoice => invoice.sentStatus === 'noSent')
    }, [filteredInvoices])

    const [entering, setEntering] = useState(false);
    const [selectedIDs, setSelectedIDs] = useState([]);
    const [requestData, setRequestData] = useState([]);
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
        setSelectedIDs([])
        setRequestData([])
		setEntering(false);
		setClear(true);
    };

	const { selector } = useSelectorAlert('invoicedata', 'Invoice updates successfully added.');

    return (
        <UpdateItemForm
			entering={entering}
            clearForm={clearForm}
            updateItem={requestData}
            updateSlice={updateInvoices}
			setEntering={setEntering}
			selector={selector}
            modalTitle="Set Invoices as Sent"
			modalID={modalID}
        >
            <div className="p-3">
                <InputCardContainer
                    noBorder={true}
                    label="Invoice Numbers that haven't been sent:"
                >
                    <MultiSentCheckBox
                        setRequestData={setRequestData}
                        invoices={invoicesNotSent}
                        setSelectedIDs={setSelectedIDs}
						setEntering={setEntering}
                        noneLabel="sent"
                        selectedIDs={selectedIDs}
                        clear={clear}
                    />
                </InputCardContainer>
                {invoicesNotSent?.length ? (
                    <BulkDateSelect
                        selectedIDs={selectedIDs}
                        setRequestData={setRequestData}
						setEntering={setEntering}
						clear={clear}
                    />
                ) : null}
            </div>
        </UpdateItemForm>
    );
}

export default BulkSentStatus
