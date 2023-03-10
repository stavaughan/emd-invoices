import { SiteData } from 'data';
import {
	filterInvoiceByYearStatus,
	filterInvoiceByYearFacetValue
} from 'features/invoices/invoiceDataSlice';
import { amountUSD } from "globals/js";
import { useCallback, useMemo } from 'react';

const useSnapShot = (invoices) => {

	const sumAll = useCallback((amounts) => {
		return amounts.reduce((a, b) => a + b, 0)
	}, []);

	const invoiceStats = useCallback((invs) => {
		if (!invs?.length) return [];
		const amount = sumAll(invs.map(inv => inv.invoicePrice));
		return {
			count: invs?.length || 0,
			amount,
			amountUSD: amountUSD({ num: amount }),
			invoices: invs
		}
	}, [sumAll]);

	const invoiceDueDate = useCallback((inv) => {
		const paymentTerms = inv?.paymentTerms || '';
		if(!paymentTerms) return null;
		const msDay = 1000 * 60 * 60 * 24;
		const payableTerms = SiteData.forms.invoices.paymentTerms;
		const terms = payableTerms.find(term => term._id === paymentTerms);
		return inv?.dateSent + (terms?.days * msDay);
	}, []);

	const checkOverDue = useCallback((inv) => {
		const dateNow = new Date().getTime();
		const dueDate = invoiceDueDate(inv);
		return dateNow > dueDate;
	}, [invoiceDueDate])

	const sumAllPayments = useCallback((invs) => {
		if (!invs?.length) return 0;
		const invsPayments = invs.map(_ => {
			const payments = _?.payments;
			const paymentsArray = payments?.length
				? payments.map(_ => _?.amount_paid)
				: [0];
			return sumAll(paymentsArray);
		});
		return sumAll(invsPayments);
	}, [sumAll]);

	const filterInvoice = useMemo(() => ({
		sent: (inv) => inv.sentStatus === 'sent',
		draft: (inv) => inv.sentStatus === 'noSent',
		paid: (inv) => inv.paidStatus === 'Paid',
		partial: (inv) => inv.paidStatus === 'Partial',
		notPaid: (inv) => inv.paidStatus === 'Not Paid' && inv.sentStatus === 'sent',
		overDue: (inv) => {
			const isInvoiceSentandNotPaid = inv.paidStatus === 'Not Paid' && inv.sentStatus === 'sent';
			if (!isInvoiceSentandNotPaid) return false;
			return checkOverDue(inv);
		},
	}), [checkOverDue]);

	const filteredInvoices = useCallback((invs, invFilter) => {
		if (!invs?.length) return [];
		const filtered = invs.filter(invFilter);
		return invoiceStats(filtered);
	}, [invoiceStats]);

	const filteredInvoicesWithSum = useCallback((invs, invFilter) => {
		if (!invs?.length) return [];
		const filtered = invs.filter(invFilter);
		const amount = sumAllPayments(filtered);
		return {
			count: filtered?.length || 0,
			amount,
			amountUSD: amountUSD({ num: amount }),
			invoices: filtered
		}
	}, [sumAllPayments]);

	const allInvoices = useCallback((invs) => {
		if (!invs?.length) return [];
		return invoiceStats(invs);
	}, [invoiceStats]);

	const yearOverYear = useCallback((data, i1, i2) => {
		const current = data[i1]?.amount;
		const previous = data[i2]?.amount;
		const difference = current - previous;
		const percentage = (difference / previous) * 100;
		return {
			_id: data[i1]._id,
			year: data[i1].year,
			amount: difference,
			amountUSD: amountUSD({ num: difference }),
			percent: percentage.toFixed(1),
			percentage: `${percentage.toFixed(1)}%`
		};
	}, []);

	const yearOverYearData = useCallback((data) => {
		if(!data?.length) return [];
		return data.map((_, i) => yearOverYear(data, i, i + 1));
	}, [yearOverYear]);

	const invoicesStats = useCallback((invoices, year) => {

		const sent = filteredInvoices(invoices, filterInvoice.sent);
		const draft = filteredInvoices(invoices, filterInvoice.draft);
		const paid = filteredInvoicesWithSum(invoices, filterInvoice.paid);
		const partial = filteredInvoicesWithSum(invoices, filterInvoice.partial);
		const notPaid = filteredInvoices(invoices, filterInvoice.notPaid);
		const overdue = filteredInvoices(invoices, filterInvoice.overDue);

		return [
			{
				_id: "invoicesSent",
				label: 'Sent',
				year,
				count: sent?.count,
				amount: sent?.amount,
				amountUSD: sent?.amountUSD,
				title: `Invoices Sent ${year} - ${sent?.amountUSD}`,
				sliceParams: {
					year,
					facet: 'sentStatus',
					value: 'sent'
				},
				filterSlice: filterInvoiceByYearFacetValue,
			},
			{
				_id: "invoicespaidfull",
				label: 'Paid',
				year,
				count: paid?.count,
				amount: paid?.amount,
				amountUSD: paid?.amountUSD,
				title: `Invoices Paid in Full ${year} - ${paid?.amountUSD}`,
				sliceParams: {
					year,
					facet: 'paidStatus',
					value: 'Paid'
				},
				filterSlice: filterInvoiceByYearFacetValue,
			},
			{
				_id: "invoicespaidpartial",
				label: 'Partially Paid',
				year,
				count: partial?.count,
				amount: partial?.amount,
				amountUSD: partial?.amountUSD,
				title: `Invoices Partially Paid ${year} - ${partial?.amountUSD}`,
				sliceParams: {
					year,
					facet: 'paidStatus',
					value: 'Partial'
				},
				filterSlice: filterInvoiceByYearFacetValue,
			},
			{
				_id: "invoicesdraft",
				label: 'Not sent',
				year,
				count: draft?.count,
				amount: draft?.amount,
				amountUSD: draft?.amountUSD,
				title: `Invoices not Sent ${year} - ${draft?.amountUSD}`,
				sliceParams: {
					year,
					facet: 'sentStatus',
					value: 'noSent'
				},
				filterSlice: filterInvoiceByYearFacetValue,
			},
			{
				_id: "invoicesnotpaid",
				label: 'Not paid',
				year,
				count: notPaid?.count,
				amount: notPaid?.amount,
				amountUSD: notPaid?.amountUSD,
				title: `Invoices Sent and not Paid ${year} - ${notPaid?.amountUSD}`,
				sliceParams: {
					year,
					statusFilter: filterInvoice.notPaid
				},
				filterSlice: filterInvoiceByYearStatus
			},
			{
				_id: "invoicesoverdue",
				label: 'Overdue',
				year,
				count: overdue?.count,
				amount: overdue?.amount,
				amountUSD: overdue?.amountUSD,
				title: `Invoices Overdue ${year} - ${overdue?.amountUSD}`,
				sliceParams: {
					year,
					statusFilter: filterInvoice.overDue
				},
				filterSlice: filterInvoiceByYearStatus,
			},
		]
	}, [filteredInvoices, filteredInvoicesWithSum, filterInvoice]);

	// TODO: change to reflect only paid invoices not all invoices
	const snapShotInvoices = useCallback((invs) => {

		if (!invs?.length) return [];

		const currentYear = new Date().getFullYear();
		const years = invs.map(inv => new Date(inv.dateCreated).getFullYear());
		const uniqueYears = [...new Set(years)].sort((a, b) => b - a);

		return uniqueYears.map((year, idx) => {
			const invoices = invs.filter(inv => new Date(inv.dateCreated).getFullYear() === year);
			const created = allInvoices(invoices);
			const id = `snapshot${year}${idx}`;
			return {
				_id: id,
				year,
				label: year === currentYear ? `${year} YTD` : `${year}`,
				count: invoices?.length,
				invoices,
				amount: created?.amount,
				amountUSD: created?.amountUSD,
				stats: invoicesStats(invoices, year)
			}
		});
	}, [invoicesStats, allInvoices]);

	const snapShotsByYear = useMemo(() => snapShotInvoices(invoices), [snapShotInvoices, invoices]);

	const performance = useMemo(() => {
		if (!snapShotsByYear.length) return null;
		return yearOverYearData(snapShotsByYear);
	}, [yearOverYearData, snapShotsByYear]);

	const snapShotData = useMemo(() => {
		if (!snapShotsByYear.length) return null;
		const firstCol = snapShotsByYear[0];
		const firstColPerf = performance[0];
		const remainingCols = snapShotsByYear.filter((_, i) => i !== 0);
		const remainingColsPerf = performance.filter((_, i) => i !== 0);
		return {
			firstCol,
			firstColPerf,
			remainingCols,
			remainingColsPerf
		}
	}, [snapShotsByYear, performance]);

	return { snapShotData };
}

export default useSnapShot
