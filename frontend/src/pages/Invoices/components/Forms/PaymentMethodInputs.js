import { useCallback } from 'react';
import { GroupInputRow, InputCol } from 'components/Forms/components';
import { Global } from 'globals/js';

const PaymentMethodInputs = ({
	setRequestData,
	setEntering,
	initialInvoice,
	setShowError,
	setPayment,
	payment
}) => {

	// TODO: This needs to be refactored when my brain is working better. Mon Nov 21 2022 21:29:05 GMT-0600
	const onSelectMethod = useCallback((value, field) => {
		setShowError(!payment?.amount_paid);
		setPayment(prev => ({ ...prev, [field]: value }))
		if (!!setRequestData) {
			setRequestData(prev => ({
				...prev,
				reqBody: {
					...prev.reqBody,
					payments: [
						...initialInvoice?.payments,
						{ ...payment, [field]: value }
					]
				}
			}))
		}
	}, [initialInvoice?.payments, payment, setPayment, setRequestData, setShowError]);

	const onSelectMethodNo = (value) => {
		onSelectMethod(value, 'methodNo');
		setEntering(true);
	};

	return (
		<GroupInputRow label="Payment Details">
			<InputCol.Dropdown
				id="invoicepaymentmethod"
				cols="8 sm-6"
				optionData={['check', 'card'].map(_ => ({ _id: _, label: _ }))}
				label="Payment Method"
				onChange={(value) => onSelectMethod(value, 'method')}
				selected={payment?.method}
			/>
			{(payment?.method && payment.method === 'check') && (
				<InputCol.Text
					cols="8 sm-6"
					id="invoicepaymentbycheck"
					label="Check Number"
					value={payment?.methodNo}
					onChange={onSelectMethodNo}
				/>
			)}
			{(payment?.method && payment.method !== 'check') && (
				<InputCol.NumberFormat
					id="invoicepaymentbycc"
					cols="8 sm-6"
					value={payment?.methodNo}
					onChange={onSelectMethodNo}
					groupClass="text-sm"
					numFormat={Global.maskCC('#', 1)}
					label="Last 4 Digits of Card"
				/>
			)}
		</GroupInputRow>
	)
}

export default PaymentMethodInputs
