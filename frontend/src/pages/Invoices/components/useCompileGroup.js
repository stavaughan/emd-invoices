import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { amountUSD } from 'globals/js';
import clsx from 'clsx';

const Emphasize = ({ children, bold }) => (
	<span className={clsx(
		bold ? "font-bold" : "font-semibold",
		"text-secondary"
	)}>
		{children}
	</span>
);

const useCompileGroup = (invoices, invoice) => {

	const { businesses } = useSelector(state => state.businesses)

	const business = useMemo(() => {
		return businesses?.length ? businesses.find(_ => _._id === invoice?.contrID) : {};
	}, [businesses, invoice?.contrID])

	const totalAmount = useMemo(() => {
		return invoices?.reduce((acc, curr) => acc + curr?.invoicePrice, 0);
	}, [invoices])

	const payment = useMemo(() => {
		if (!invoice?.paidStatus === 'Paid') return null;
		const invPayment = invoice?.payments?.length ? invoice?.payments[0] : null;
		if (!invPayment) return null;
		const na = <span className="text-danger">N/A</span>;
		const method = invPayment?.method ? <Emphasize>{invPayment?.method}</Emphasize> : na;
		const methodNo = invPayment?.methodNo ? <Emphasize>{invPayment?.methodNo}</Emphasize> : na;
		return {
			method,
			methodNo,
			date: invPayment?.date,
		}
	}, [invoice?.paidStatus, invoice?.payments])

	const header = useMemo(() => {
		const paid = invoice?.paidStatus === 'Paid';
		const title = paid
			? `Designs paid as of ${payment?.date}`
			: `Designs completed as of ${invoice?.date}`;
		const total = <Emphasize bold>{amountUSD({ num: totalAmount, dec: 2 })}</Emphasize>;
		const subtitle = paid
			? <span>Paid{' '}{total}{' '}via{' '}{payment?.method}{' '}ending{' '}in{' '}{payment?.methodNo}</span>
			: <span>Total{' '}amount{' '}submitted:{' '}{total}</span>;
		return { title, subtitle };
	}, [invoice?.paidStatus, invoice?.date, totalAmount, payment])

	return { business, header }
}

export default useCompileGroup
