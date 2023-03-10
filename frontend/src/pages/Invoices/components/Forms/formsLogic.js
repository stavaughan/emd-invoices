import { Global } from 'globals/js';

const formsLogic = {

	initialInvoicePayments: (invoices, selectedID) => {
		if (!invoices?.length) return '';
		const invoice = invoices?.find(_ => _._id === selectedID);
		const payments = invoice?.payments;
		const totalPayments = payments?.length ? Global.sumArrayItemValues(payments, 'amount_paid') : 0;
		return {
			number: invoice.number,
			invoicePrice: invoice.invoicePrice,
			paidStatus: invoice?.paidStatus,
			payments,
			totalPayments,
			amountDue: invoice.invoicePrice - totalPayments
		}
	},

	removeLastPayment: (payments) => {
		const last = payments.length - 1;
		return payments.filter((_, i) => i !== last)
	},

	initialInvoiceRemoveLast: (invoices, selectedID) => {
		if (!invoices?.length) return '';
		const invoice = invoices?.find(_ => _._id === selectedID);
		const payments = invoice?.payments;
		const updatedPayments = payments?.length ? formsLogic.removeLastPayment(payments) : [];
		const totalPayments = updatedPayments?.length ? formsLogic.removeLastPayment(updatedPayments) : 0;
		return {
			number: invoice.number,
			invoicePrice: invoice.invoicePrice,
			paidStatus: invoice?.paidStatus,
			updatedPayments: updatedPayments,
			totalPayments,
			amountDue: invoice.invoicePrice - totalPayments
		}
	},

	initialPayment: {
		date: '',
		dateStr: '',
		amount_paid: '',
		amount_due: 0,
		method: '',
		methodNo: ''
	},

	reqDataPaymentsCB: ({
		date,
		dateStr,
		selID,
		payment,
		payments
	}) => (prev) => ({
		id: selID, reqBody: {
			...prev.reqBody,
			payments: [
				...payments,
				{ ...payment, date, dateStr }
			]
		}
	}),

	updatedAmounts: (prevAmountDue, amount) => {
		const amount_paid = amount > prevAmountDue ? prevAmountDue : amount;
		const amount_due = prevAmountDue - amount_paid;
		return {
			paidStatus: amount_paid === prevAmountDue ? 'Paid' : 'Partial',
			amount_paid,
			amount_due
		}
	},

	onUpdatePayment: ({ amount, invoice, payment, setPayment, setRequestData, setShowError }) => {
		if (amount) {
			setShowError(false)
		}
		const {
			paidStatus,
			amount_paid,
			amount_due
		} = formsLogic.updatedAmounts(invoice.amountDue, amount);
		setPayment(prev => ({ ...prev, amount_paid, amount_due }));
		setRequestData(prev => ({
			...prev,
			reqBody: {
				...prev.reqBody,
				paidStatus,
				payments: [
					...invoice.payments,
					{ ...payment, amount_paid, amount_due }
				]
			}
		}));
	},

	updatePaymentDate: ({
		date,
		formats,
		setPayment,
		setRequestData,
		payments,
		payment,
		selectedID
	}) => {
		const fDate = formats(date);
		const dateObj = {
			date: fDate.dateFull,
			dateStr: fDate.dateString
		}
		setPayment(prev => ({ ...prev, ...dateObj }))
		if (setRequestData) {
			setRequestData(formsLogic.reqDataPaymentsCB({
				...dateObj,
				selID: selectedID,
				payment,
				payments
			}))
		}
	}
}

export default formsLogic
