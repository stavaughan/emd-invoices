import { useState } from 'react';
import { PaymentMethodInputs, SelectPaymentAmount, PaymentDateInputs } from 'pages/Invoices/components/Forms';
import { useClear } from 'hooks';
import { formsLogic } from '.';

const AddPaymentInputs = ({
	selectedID,
	initialInvoice,
	setRequestData,
	setEntering,
	clear
}) => {

    const [showError, setShowError] = useState(false);
    const [payment, setPayment] = useState(formsLogic.initialPayment);

	useClear(clear, () => {
		setPayment(formsLogic.initialPayment)
		setShowError(false)
	})

    return (
        <>
            <PaymentDateInputs
                payment={payment}
                setPayment={setPayment}
                setRequestData={setRequestData}
                initialInvoice={initialInvoice}
				setEntering={setEntering}
                selectedID={selectedID}
				clear={clear}
            />
            <SelectPaymentAmount
                initialInvoice={initialInvoice}
                setRequestData={setRequestData}
                setShowError={setShowError}
                showError={showError}
                setPayment={setPayment}
                payment={payment}
            />
            <PaymentMethodInputs
                setRequestData={setRequestData}
                setShowError={setShowError}
                showError={showError}
                setEntering={setEntering}
                initialInvoice={initialInvoice}
				selectedID={selectedID}
                setPayment={setPayment}
                payment={payment}
            />
        </>
    )
}

export default AddPaymentInputs
