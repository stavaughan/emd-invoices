import { useCallback, useContext } from 'react';
import { DateSelectOrCurrent } from 'components/Forms/Groups';
import { formsLogic } from '.';
import { DatesContext } from 'contexts';

const PaymentDateInputs = ({
	payment,
	setPayment,
	setRequestData,
	initialInvoice,
	selectedID,
	setEntering,
	clear
}) => {

	const { formats } = useContext(DatesContext)

	const onUpdateDate = useCallback((date) => formsLogic.updatePaymentDate({
		date,
		formats,
		setPayment,
		setRequestData,
		payments: initialInvoice?.payments,
		payment,
		selectedID
	}), [formats, setPayment, setRequestData, initialInvoice?.payments, payment, selectedID]);

	const onSelectDate = (date) => {
		onUpdateDate(date);
		setEntering(true);
	};

	return (
		<DateSelectOrCurrent
			idCurrent={`invoicepaymentdatetoday-${selectedID}`}
			idNew={`invoicepaymentdate-${selectedID}`}
			label="Payment Date"
			setDate={onSelectDate}
			clear={clear}
		/>
	)
}

export default PaymentDateInputs
