import { useState, useMemo } from 'react';
import { InputCardContainer } from 'components/Forms/components';
import { InputAmountByID } from 'pages/Invoices/components/Forms';
import { useClear } from 'hooks';
import { amountUSD } from 'globals/js';

const SelectInvoiceIDs = ({
	paymentAmount,
	notPaidInvoices,
	setSelectedIDs,
	selectedIDs,
	setRequestData,
	payment,
	clear
}) => {

    const [selAmount, setSelAmount] = useState(0)

    const remainingAmount = useMemo(() => {
        return amountUSD({ num: paymentAmount - selAmount })
    }, [paymentAmount, selAmount])

	useClear(clear, () => setSelAmount(0))

    return (
        <InputCardContainer label="Invoices that haven't been paid">
            {paymentAmount ? (
                <div className="py-3 loading p-3 text-center rounded-3">
                    <div className="mb-3 mt-2 h3 fw-bolder">
                        Payment: {amountUSD({ num: paymentAmount })}
                    </div>
                    {selAmount ? <div className="h3">Remaining: {remainingAmount}</div> : null}
                </div>
            ) : null}
            <div className="list-group-flush p-3">
                {notPaidInvoices?.length ? notPaidInvoices.map(invoice => (
                    <InputAmountByID
                        key={invoice.number}
                        invoice={invoice}
                        paymentAmount={paymentAmount}
                        payment={payment}
                        setSelectedIDs={setSelectedIDs}
                        setRequestData={setRequestData}
                        selectedIDs={selectedIDs}
                        totalAmount={selAmount}
                        setTotalAmount={setSelAmount}
                        clear={clear}
                    />
                )) : null}
            </div>
        </InputCardContainer>
    )
}

export default SelectInvoiceIDs
