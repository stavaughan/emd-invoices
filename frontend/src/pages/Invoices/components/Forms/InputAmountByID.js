import { useState, useMemo, useCallback } from 'react';
import { formsLogic } from '.';
import { amountUSD } from 'globals/js';
import { Row, Col } from 'components/HTML';
import { useClear } from 'hooks';

const InputAmountByID = ({
	invoice,
	setSelectedIDs,
	setRequestData,
	totalAmount,
	setTotalAmount,
	selectedIDs,
	paymentAmount,
	clear
}) => {

	// TODO refactor this to a custom hook and useEffect to update the total amount

	const { _id, date, number, payments, invoicePrice } = invoice;

    const paymentsMade = useMemo(() => {
        return payments?.length ? payments.map(_ => _.amount_paid).reduce((a, b) => a + b, 0) : 0;
    }, [payments]);

    const amountDue = useMemo(() => invoicePrice - paymentsMade, [invoicePrice, paymentsMade]);

    const [amount, setAmount] = useState(amountDue);
    const [checked, setChecked] = useState(false)

    const onAmountChange = (e) => {
        const value = Number(e.target.value);
        const newAmount = value > amountDue ? amountDue : value
        setTotalAmount(totalAmount + newAmount - amount)
        setAmount(newAmount);
    }

    const updatedAmounts = useCallback((amount) => {
        return formsLogic.updatedAmounts(amountDue, amount)
    }, [amountDue])

    const reqDataUpdate = useCallback((amounts) => {
        return (amounts.amount_paid)
            ? (prev) => [
                ...prev.filter(_ => _.id !== _id),
                {
                    ...prev.find(_ => _.id === _id),
                    id: _id,
                    reqBody: {
                        paidStatus: amounts.paidStatus
                    }
                }
            ] : (prev) => prev.filter(_ => _.id !== _id)
    }, [_id])

    const onChangeHandler = useCallback((e) => {
        const dif = paymentAmount - totalAmount;
        const newAmount = (amount) > dif ? dif : amount
        if (e.target.checked) {
            setChecked(true)
            setAmount(newAmount)
            setTotalAmount(totalAmount + newAmount)
            setSelectedIDs(prev => [...prev, _id]);
            const amounts = updatedAmounts(newAmount)
            setRequestData(reqDataUpdate(amounts))
        } else {
            setChecked(false)
            setAmount(amountDue)
            setTotalAmount(totalAmount - amount);
            setSelectedIDs(prev => prev.filter(_ => _ !== _id));
            const amounts = updatedAmounts(0)
            setRequestData(reqDataUpdate(amounts))
        }
    }, [_id, amount, amountDue, paymentAmount, reqDataUpdate, setRequestData, setSelectedIDs, setTotalAmount, totalAmount, updatedAmounts]);

    const amountDisplay = useMemo(() => {
        return selectedIDs.length && selectedIDs.includes(_id) ? 'show' : 'hide';
    }, [_id, selectedIDs])

	useClear(clear, () => {
		setAmount(0)
		setChecked(false)
	})

    return (
        <Row className="mb-2 py-2">
            <Col cols="7">
                <div className="form-check">
                    <input
                        id={`bulkpayLine${_id}`}
                        className="form-check-input"
                        type="checkbox"
                        checked={checked}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor={`bulkpayLine${_id}`}>
                        <span className="text-sm text-dark mx-auto pe-3">{number}</span>
                        <span className="text-sm text-secondary mx-auto pe-3"><em>{date}</em></span>
                        <span className="text-sm text-primary mx-auto pe-3 text-end">
                            {amountUSD({ num: amountDue })}
                        </span>
                    </label>
                </div>
            </Col>
            {selectedIDs.length && selectedIDs.includes(_id) ? (
                <Col cols="2">
                    <input
                        className={`form-control py-0 ${amountDisplay}`}
                        type="number"
                        value={amount}
                        placeholder="0.00"
                        onChange={onAmountChange}
                    />
                </Col>
            ) : null}
            <Col cols="3"></Col>
        </Row>
    )
}

export default InputAmountByID
