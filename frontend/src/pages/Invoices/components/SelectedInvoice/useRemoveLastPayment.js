import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInvoice } from 'features/invoices/invoiceDataSlice';
import { toast } from 'react-toastify';

const useRemoveLastPayment = () => {

	const dispatch = useDispatch()

	const { filteredInvoices, selectedID, isLoading } = useSelector(state => state.invoicedata);

	const removeLastPayment = useCallback((payments) => {
		const last = payments.length - 1;
		return payments.filter((_, i) => i !== last)
	}, []);

	const initialInvoiceRemoveLast = useCallback(() => {
		if (!filteredInvoices?.length) return '';
		const invoice = filteredInvoices?.find(_ => _._id === selectedID);
		const payments = invoice?.payments;
		const updatedPayments = payments?.length ? removeLastPayment(payments) : [];
		const totalPayments = updatedPayments?.length ? removeLastPayment(updatedPayments) : 0;
		return {
			number: invoice.number,
			invoicePrice: invoice.invoicePrice,
			paidStatus: invoice?.paidStatus,
			updatedPayments: updatedPayments,
			totalPayments,
			amountDue: invoice.invoicePrice - totalPayments
		}
	}, [filteredInvoices, selectedID, removeLastPayment]);

	const requestData = useMemo(() => {
		const initialInvoice = initialInvoiceRemoveLast();
		return {
			id: selectedID,
			reqBody: {
				paidStatus: initialInvoice?.updatedPayments?.length ? 'Partial' : 'Not Paid',
				payments: initialInvoice?.updatedPayments
			}
		}
	}, [initialInvoiceRemoveLast, selectedID]);

	const handleRemoveLastPayment = useCallback(() => {
		try {
			dispatch(updateInvoice(requestData))
		} catch (error) {
			toast.error(error.message)
		}
	}, [requestData, dispatch]);

	return { handleRemoveLastPayment, isLoading }
}

export default useRemoveLastPayment
