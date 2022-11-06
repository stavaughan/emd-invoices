import { useState } from 'react';
import { PaymentMethodInputs, SelectPaymentAmount, PaymentDateInputs } from 'pages/Invoices/components/Forms';
import { useClear } from 'hooks';

const PaymentAndMethodInputs = ({
	payment,
	setPayment,
	setEntering,
	clear
}) => {

    const [showError, setShowError] = useState(false);

	useClear(clear, () => setShowError(false))

    return (
        <>
            <PaymentDateInputs
                payment={payment}
                setPayment={setPayment}
                setEntering={setEntering}
                clear={clear}
            />
            <SelectPaymentAmount
                setShowError={setShowError}
                showError={showError}
                setPayment={setPayment}
                clear={clear}
                payment={payment}
            />
            <PaymentMethodInputs
                setShowError={setShowError}
                showError={showError}
                setEntering={setEntering}
                setPayment={setPayment}
                payment={payment}
            />
        </>
    )
}

export default PaymentAndMethodInputs
