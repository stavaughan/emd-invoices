import { useState, useMemo, useEffect, useCallback } from 'react';
import { updateInvoice } from 'features/invoices/invoiceDataSlice';
import { UpdateItemForm } from 'services/DataUpdates';
import { useSelector } from 'react-redux';
import { DateSelectOrCurrent } from 'components/Forms/Groups';

const SentStatusForm = ({ modalID }) => {

	const { filteredInvoices, selectedID, isLoading } = useSelector(state => state.invoicedata)

	const invoiceNumber = useMemo(() => {
		if (!filteredInvoices?.length) return '';
		return filteredInvoices?.find(_ => _._id === selectedID)?.number
	}, [filteredInvoices, selectedID])

	const [clear, setClear] = useState(false);
	const [entering, setEntering] = useState(false);
	const [requestData, setRequestData] = useState({
		id: '',
		reqBody: { sentStatus: 'sent', dateSent: '' }
	});

	const onSelectDate = (date) => {
		setRequestData(prev => ({
			id: selectedID,
			reqBody: {
				...prev.reqBody,
				dateSent: date.getTime()
			}
		}))
		setEntering(true)
	};

	useEffect(() => {
		if(clear) {
			let timeout = setTimeout(() => {
				setClear(false)
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [clear])

	const clearForm = useCallback(() => {
		setRequestData({
			id: '',
			reqBody: { sentStatus: 'sent', dateSent: '' }
		})
		setEntering(false);
		setClear(true);
	}, [setRequestData, setEntering, setClear]);

	return (
		<UpdateItemForm
			modalID={modalID}
			clearForm={clearForm}
			updateItem={requestData}
			updateSlice={updateInvoice}
			isLoading={isLoading}
			modalTitle={`Set Invoice ${invoiceNumber} as "Sent"`}
			formTitle="status update"
			setEntering={setEntering}
			entering={entering}
		>
			<div className="p-3">
				<DateSelectOrCurrent
					idCurrent="sentStatusDate"
					idNew={modalID + 'date'}
					label="Date Invoice Sent"
					setDate={onSelectDate}
					groupLabel="Status Date"
					clear={clear}
				/>
			</div>
		</UpdateItemForm>
	);
}

export default SentStatusForm
