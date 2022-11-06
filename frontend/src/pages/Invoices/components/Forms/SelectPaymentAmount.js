import { useCallback } from 'react'
import { Alerts, Global } from 'globals/js';
import { formsLogic } from '.';
import { GroupInputRow, InputCol } from 'components/Forms/components';

const SelectPaymentAmount = ({
	initialInvoice,
	setRequestData,
	setPayment,
	payment,
	showError,
	setShowError
}) => {

    const onSelectAmount = useCallback((value) => {
		const amount = Global.numbersOnly(value);
		if(!amount) return;
        if(setRequestData) {
            formsLogic.onUpdatePayment({
                invoice: initialInvoice,
                amount,
                payment,
                setPayment,
                setRequestData,
                setShowError
            })
        } else {
            setPayment(prev => ({
                ...prev,
                amount_paid: amount
            }))
        }
    }, [initialInvoice, payment, setPayment, setRequestData, setShowError]);

    return (
        <GroupInputRow label="Payment Amount">
			<InputCol.Text
				cols="8 sm-6"
				placeholder="0.00"
				errorMsg={showError && Alerts.nonZero}
				value={payment.amount_paid.toString()}
				onChange={onSelectAmount}
			/>
        </GroupInputRow>
    )
}

export default SelectPaymentAmount
