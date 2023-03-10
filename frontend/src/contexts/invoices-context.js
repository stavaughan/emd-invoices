import { createContext, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Name } from 'state/schemaConstructors';
import { DatesContext } from 'contexts';
import { amountUSD } from 'globals/js';
import { dates } from 'globals/js/lib';
import { SiteData } from 'data';

const InvoicesContext = createContext({
	services: [],
	sumNums: () => { },
	newInvoiceNumber: () => { },
	getAmountDue: () => { },
	customerName: () => { },
	customerBusName: () => { },
	businessOptions: () => { },
	invoiceDates: () => { },
	dueDateString: () => { },
	totalPayments: () => { },
	lastPayment: () => { },
	invoiceTotals: () => { },
	descriptionText: () => { },
	svcDetail: () => { },
	displayStamp: () => { },
	getNetTotal: () => { },
	paymentMethodLine: () => { },
	getDueDateObj: () => { },
	selInvoice: {}
});

export const InvoicesProvider = (props) => {

	const { services, invoices } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)
	const { formats } = useContext(DatesContext);

	// called by: this file at customerName, fullName
	// called by: Invoice at InvoiceCustomer and useNewInvoiceMethods
	const customerBusName = useCallback((customer) => {
		if (!customer?.contactName?.surname && !customer?.contactName?.given_name) return '';
		const contactName = new Name(customer?.contactName)?.fullName;
		const businessName = customer?.BusinessName || '';
		return businessName || contactName;
	}, []);

	// called by: this file at detailsRowData
	// called by: Invoice at InvoiceTableRow
	const customerName = useCallback((clientID) => {
		if (!customers?.length) return ''
		const customer = customers.find(_ => _._id === clientID);
		return customerBusName(customer);
	}, [customers, customerBusName]);

	// called by: Forms at NewInvoiceFormInputs, ResultFromTextInput, BulkInvoiceFormInputs
	const businessOptions = useCallback(() => {
		if (!businesses?.length) return [];
		return businesses.map(_ => ({
			_id: _._id,
			label: _.shortName
		}))
	}, [businesses]);

	// called by: Invoice at InvoiceDateNumber
	const invoiceDates = useCallback((invoice) => {
		const dateSent = invoice?.dateSent || '';
		const createdOn = invoice?.dateCreated || '';
		const paymentTerms = invoice?.paymentTerms || '';
		const msDay = 1000 * 60 * 60 * 24;
		const payableTerms = SiteData.forms.invoices.paymentTerms;
		const terms = paymentTerms ? payableTerms.find(_ => _._id === paymentTerms) : {};
		const dueDateStr = dateSent ? dateSent + (terms?.days * msDay) : '';
		return {
			dateSent: dateSent ? formats(new Date(dateSent)).dateFull : '',
			dueDate: dueDateStr ? formats(new Date(dueDateStr)).dateFull : '',
			dateCreated: createdOn ? formats(new Date(createdOn)).dateFull : '',
			terms: terms?.label || '',
		}
	}, [formats]);

	/**
	 *  BulkInvoiceFormInputs and NewInvoiceFormInputs
	 */

	// Used by this file at newInvoiceNumber for use at NewInvoiceFormInputs and BulkInvoiceFormInputs
	const highestInt = useCallback((prevInvoices) => {
		const previdxs = prevInvoices
			.map(_ => Number(_.number.slice(-3)))
			.sort((a, b) => a - b);
		const lastidx = previdxs.length - 1;
		return previdxs[lastidx];
	}, []);

	// called by this file at newInvoiceNumber for use at NewInvoiceFormInputs and BulkInvoiceFormInputs
	const invoiceNumber = useCallback(() => {
		const newDate = new Date();
		const today = newDate.getDate();
		const day = [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(today) ? `0${today}` : `${today}`
		const fullYear = newDate.getFullYear() + '';
		const monthIdx = newDate.getMonth();
		const month = dates.monthArray.find((_, i) => i === monthIdx).dig;
		return `${fullYear.slice(2, 4) + month + day}`;
	}, []);

	// Used by this file at invoiceData for use at NewInvoiceFormInputs and BulkInvoiceFormInputs
	const newInvoiceNumber = useCallback((busPfx, i = 0) => {
		const baseNumber = `${invoiceNumber() + busPfx}`;
		const prevInvoices = invoices?.length
			? invoices.filter(_ => _.number.slice(0, -3) === baseNumber)
			: [];
		const idx = prevInvoices?.length
			? highestInt(prevInvoices) + i + 1 : i + 1;
		const idxNum = idx < 10 ? `00${idx}` : `0${idx}`;
		return `${baseNumber}${idxNum}`;
	}, [invoiceNumber, highestInt, invoices]);

	// called by: this file at sumFromPrices, getTotalPaid, getSubTotal, getAmountDue
	const sumNums = useCallback((nums) => nums.reduce((a, b) => a + b, 0), []);

	// called by: this file at descriptionText
	// called by: Invoice at PriceRows
	const svcDetail = useCallback((service) => {
		return services?.length ? services.find(_ => _._sID === service.sID) : {};
	}, [services]);

	// called by: this file at invoiceTotals
	const getTotalPaid = useCallback((payments) => {
		const paymentArray = payments?.length ? payments.map(_ => _.amount_paid) : [0];
		return paymentArray.length > 1
			? sumNums(payments.map(_ => _.amount_paid))
			: paymentArray[0];
	}, [sumNums]);

	// called by: this file at getNetTotal and invoiceTotals
	const getSubTotal = useCallback((services) => {
		const priceArray = services?.length
			? services.map(service => service.amount * service.units) : [];
		return priceArray.length > 1 ? sumNums(priceArray) : priceArray[0];
	}, [sumNums]);

	// called by: this file at getAmountDue, detailsRowData and 'pages/Invoices/componentes/AllItems/InvoicesTableRow'
	const getNetTotal = useCallback((invoice) => {
		const rate = invoice?.taxRate;
		const subTotal = getSubTotal(invoice?.rendered_services);
		const salesTax = rate ? (subTotal * rate / 10000) : 0;
		return salesTax ? subTotal + salesTax : subTotal;
	}, [getSubTotal]);

	// called by: this file at detailsRowData and 'pages/Invoices/componentes/AllItems/InvoicesTableRow'
	const getAmountDue = useCallback((invoice) => {
		const amountPaid = invoice?.payments?.length
			? invoice.payments[0]
				? sumNums(invoice.payments.map(_ => _.amount_paid))
				: invoice.payments[0].amount_paid
			: 0;
		return getNetTotal(invoice) - amountPaid;
	}, [getNetTotal, sumNums]);

	const paymentNumber = useCallback((payment) => {
		if (payment === 0) return '';
		return payment?.methodNo || payment?.checkNo;
	}, []);

	const paymentMethodLine = useCallback((payment) => {
		if (payment === 0) return '';
		const method = payment?.method || '';
		if (!method) return '';
		const number = payment?.methodNo || payment?.checkNo;
		return method === 'check'
			? `check number ${number}`
			: `credit card ending in ${number}`;
	}, []);

	// called by Invoice at PaymentStatus
	const lastPayment = useCallback((invoice) => {
		const payments = invoice.payments;
		const lastIdx = payments.length - 1;
		if (!invoice.payments?.length) return {}
		return {
			date: payments[lastIdx]?.date,
			amount: amountUSD({ num: payments[lastIdx]?.amount_paid, dec: 2 }),
			method: payments[lastIdx]?.method,
			lastPaymentMethodLine: paymentMethodLine(payments[lastIdx]),
			lastPaymentNumber: paymentNumber(payments[lastIdx]),
		};
	}, [paymentMethodLine, paymentNumber]);

	// called by: Invoice at InvoiceAmounts
	const invoiceTotals = useCallback(({
		taxRate,
		payments,
		sentStatus,
		servicesInvoiced
	}) => {
		const subTotal = servicesInvoiced?.length
			? getSubTotal(servicesInvoiced, services)
			: 0;
		const salesTax = taxRate ? (subTotal * taxRate / 10000) : 0;
		const netTotal = salesTax ? subTotal + salesTax : subTotal;
		const lastPayment = payments?.length ? payments[payments.length - 1] : 0;
		const balance = payments?.length ? netTotal - getTotalPaid(payments) : netTotal;
		return {
			subTotal: amountUSD({ num: subTotal, dec: 2 }),
			netTotal: amountUSD({ num: netTotal, dec: 2 }),
			salesTax: amountUSD({ num: salesTax, dec: 2 }),
			lastPaymentDate: lastPayment?.date,
			lastPaymentAmount: amountUSD({ num: lastPayment?.amount_paid, dec: 2 }),
			lastPaymentMethodLine: paymentMethodLine(lastPayment),
			lastPaymentNumber: paymentNumber(lastPayment),
			paymentsReceived: amountUSD({ num: getTotalPaid(payments), dec: 2 }),
			netBalanceMessage: sentStatus === 'sent'
				? balance === 0
					? 'No Balance Due'
					: 'Balance Due'
				: 'Price Quote',
			netBalance: amountUSD({ num: balance, dec: 2 })
		}
	}, [getSubTotal, getTotalPaid, services, paymentMethodLine, paymentNumber]);

	// called by: this file at detailsRowData
	// Both dateCreated and dueDate return value is in timestring ms format
	const getDueDateObj = useCallback((invoice) => {
		const msDay = 1000 * 60 * 60 * 24;
		const payableTerms = SiteData.forms.invoices.paymentTerms;
		const terms = payableTerms.find(term => term._id === invoice?.paymentTerms);
		return {
			dueDate: invoice?.dateSent + (terms?.days * msDay),
			label: terms?.label
		}
	}, []);

	// called by: Invoice at SelectedItemDetails
	const detailsRowData = useCallback((invoice) => {
		if (!customers?.length || !invoice?._id) return {}
		const dueDateObj = getDueDateObj(invoice);
		const dueDate = new Date(dueDateObj.dueDate);
		const sentDate = new Date(invoice?.dateSent)
		return {
			customer: customers.find(c => c._id === invoice?.clientID),
			totalAmount: amountUSD({ num: getNetTotal(invoice), dec: 2 }),
			amountDue: amountUSD({ num: getAmountDue(invoice), dec: 2 }),
			dueDateObj,
			customerName: customerName(invoice?.clientID),
			dueDate: formats(dueDate).dateFull,
			dateSent: formats(sentDate).dateFull
		}
	}, [customers, getDueDateObj, getNetTotal, getAmountDue, customerName, formats]);

	// called by: this file at displayStatus
	// called by: Invoice at PaymentStatus via selInvoice
	const payStatus = useCallback((invoice) => {
		return {
			invoiceSent: invoice?.sentStatus === 'sent',
			notPaid: invoice?.paidStatus !== 'Paid',
			paidInFull: invoice?.paidStatus === 'Paid',
			partiallyPaid: invoice?.paidStatus === 'Partial'
		}
	}, []);

	// called by: Invoice at PaymentStatus via selInvoice
	// TODO: dont test for current year, test for if no current year then test for last 6 months
	const displayStatus = useCallback((invoice) => {
		const status = payStatus(invoice)
		const year = {
			current: new Date().getFullYear(),
			invoiceSentDate: new Date(invoice?.dateSent).getFullYear()
		};
		const condition = {
			currentYearInvoice: !!year.invoiceSentDate,
			//currentYearInvoice: year.current === year.invoiceSentDate,
			notPaidInFull: status.notPaid || status.partiallyPaid,
			paymentMade: status.paidInFull || status.partiallyPaid
		}
		return {
			recordPayment: status.invoiceSent && condition.notPaidInFull,
			correctPayment: status.invoiceSent && condition.paymentMade && (condition.currentYearInvoice || status.partiallyPaid)
		}
	}, [payStatus]);

	// begin external methods no dependencies

	// called by: Invoice at PriceRows
	const descriptionText = useCallback((service, svcDetail) => {
		const notes = service?.notes;
		const description = svcDetail?.description;
		switch (true) {
			case !!notes && !!description:
				return `${description} ${notes}`;
			case !!notes && !description:
				return notes;
			default:
				return description;
		}
	}, []);

	// called by: InvoicesTableRow
	const totalPayments = useCallback((payments) => {
		return payments?.length ? payments.map(_ => _.amount_paid).reduce((a, b) => a + b, 0) : 0;
	}, []);

	// called by: Invoice at Invoice
	const displayStamp = useCallback((invoice) => {
		const payments = invoice?.payments?.length ? invoice.payments.map(_ => _.amount_paid) : [];
		const total = payments.length ? payments.reduce((a, b) => a + b, 0) : 0;
		return invoice?.invoicePrice - total === 0;
	}, []);

	// called by SelectedItemDetails as a property of selInvoice
	const rowID = useCallback((unitLabel, label, idx) => {
		const labelID = typeof label === 'string' ? label.replace(' ', '') : idx;
		return 'sel' + unitLabel + labelID
	}, []);

	// called by: InvoicesTableRow
	const dueDateString = useCallback((invoice) => {
		const msDay = 1000 * 60 * 60 * 24;
		const payableTerms = SiteData.forms.invoices.paymentTerms;
		const terms = payableTerms.find(_ => _._id === invoice?.paymentTerms);
		return invoice?.dateSent + (terms?.days * msDay);
	}, []);

	// end external methods no dependencies

	return (
		<InvoicesContext.Provider value={{
			services,
			sumNums,
			newInvoiceNumber,
			getAmountDue,
			customerName,
			customerBusName,
			businessOptions,
			invoiceDates,
			dueDateString,
			lastPayment,
			invoiceTotals,
			paymentMethodLine,
			descriptionText,
			totalPayments,
			svcDetail,
			displayStamp,
			getNetTotal,
			getDueDateObj,
			selInvoice: {
				detailsRowData,
				displayStatus,
				payStatus,
				rowID
			}
		}}>
			{props.children}
		</InvoicesContext.Provider>
	);
};

export default InvoicesContext;
