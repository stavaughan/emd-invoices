import { createContext, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Name } from 'state/schemaConstructors';
import { DatesContext } from 'contexts';
import { amountUSD, Global } from 'globals/js';
import { toast } from 'react-toastify';
import { dates } from 'globals/js/lib';
import { SiteData } from 'data';

const InvoicesContext = createContext({
	getAmountDue: () => { },
	getFullName: () => { },
	customerName: () => { },
	customerBusName: () => { },
	customerOptions: () => { },
	businessOptions: () => { },
	servicesOptions: () => { },
	invoiceDates: () => { },
	getDueDateObj: () => { },
	dueDateString: () => { },
	totalPayments: () => { },
	setServices: () => { },
	setInvoices: () => { },
	sumFromPrices: () => { },
	lastPayment: () => { },
	invoiceTotals: () => { },
	uploadedImage: () => { },
	descriptionText: () => { },
	selectBusiness: () => { },
	svcDetail: () => { },
	displayStamp: () => { },
	getNetTotal: () => { },
	imagesLoaded: () => { },
	selInvoice: {},
	filterLogic: {}
});

export const InvoicesProvider = (props) => {

	const { services, invoices } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)
	const { formats } = useContext(DatesContext);

	const msDay = 1000 * 60 * 60 * 24;
	const payableTerms = SiteData.forms.invoices.paymentTerms;

	const sumNums = useCallback((nums) => nums.reduce((a, b) => a + b, 0), []);
	const formatAmount = useCallback((val) => amountUSD({ num: val, dec: 2 }), []);

	const getSubTotal = useCallback((services) => {
		const priceArray = services?.length
			? services.map(service => service.amount * service.units) : [];
		return priceArray.length > 1 ? sumNums(priceArray) : priceArray[0];
	}, [sumNums]);

	const dataFromString = useCallback((str) => {
		const strArray = str.split(/\r?\n/);
		const data = strArray.map(invStr => {
			const correctStr = invStr.replaceAll('$ ', '$');
			const invArray = correctStr.split(' ');
			const last = invArray.length - 1;
			return {
				busPfx: invArray[0],
				sID: invArray[0] + invArray[1],
				price: Number(invArray[last].replace('$', '').replace('.00', '')),
				description: invArray.filter((_, idx) => ![0, 1, last].includes(idx)).join(' ')
			}
		});
		return data;
	}, []);

	const invoiceNumber = useCallback(() => {
		const newDate = new Date();
		const today = newDate.getDate();
		const day = [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(today) ? `0${today}` : `${today}`
		const fullYear = newDate.getFullYear() + '';
		const monthIdx = newDate.getMonth();
		const month = dates.monthArray.find((_, i) => i === monthIdx).dig;
		return `${fullYear.slice(2, 4) + month + day}`;
	}, []);

	const servicesData = useCallback((resData, pids) => {
		return resData.map(({ price, sID, description }) => {
			const pid = pids?.length
				? pids.find(pid => pid.includes(sID))
				: '';
			if(!pid) {
				toast.error(`Uploaded Image doesn't match Service data.`, {
					toastId: `imageUploadError${sID}`
				});
				return null;
			}
			return {
				sID,
				_sID: sID + Global.randomHex(),
				title: "Jewelry CAD Design Services",
				description: `${sID} - ${description}`,
				priceType: "job",
				unit_price: price,
				pid: `invoice-images/${pid}`
			}
		});
	}, []);

	const highestInt = useCallback((prevInvoices) => {
		const previdxs = prevInvoices
			.map(_ => Number(_.number.slice(-3)))
			.sort((a, b) => a - b);
		const lastidx = previdxs.length - 1;
		return previdxs[lastidx];
	}, []);

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

	const invoiceData = useCallback((resData, svcs, contrID) => {
		return resData.map(({ price, sID, busPfx }, idx) => {
			const service = svcs.find(_ => _.sID === sID);
			const today = new Date();
			const todayStr = today.getTime();
			const clientID = customers.find(_ => _.busPfx === busPfx)._id;
			return {
				number: newInvoiceNumber(busPfx, idx),
				date: formats(today)?.dateFull,
				dateString: todayStr,
				dateSent: null,
				dateCreated: todayStr,
				paymentTerms: "onReceipt",
				dateDue: "Payable on Receipt",
				hasImage: 1,
				clientID,
				contrID,
				priceType: "job", // TODO: use Dropdown for this
				taxRate: 0,
				invoicePrice: price,
				sentStatus: "noSent",
				paidStatus: "Not Paid",
				payments: [],
				rendered_services: [{
					sID: service?._sID,
					units: 1,
					amount: price
				}]
			}
		})
	}, [formats, newInvoiceNumber, customers]);

	const uploadedImage = useCallback((image, base64) => {
		const nameArray = image.name.split(' ');
		return {
			sID: nameArray[0] + nameArray[1],
			image: { src: base64, mime: image.type }
		}
	}, []);

	const getFullName = useCallback((username) => {
		const mname = username?.mName ? ` ${username.mName}` : '';
		return `${username?.given_name + mname} ${username?.surname}`;
	}, []);

	//const getSalesTax = useCallback((taxRate, subTotal) => taxRate ? (subTotal * taxRate / 10000) : 0, []);

	const getNetTotal = useCallback((invoice) => {
		const rate = invoice?.taxRate;
		const subTotal = getSubTotal(invoice?.rendered_services);
		const salesTax = rate ? (subTotal * rate / 10000) : 0;
		//const salesTax = getSalesTax(invoice?.taxRate, subTotal);
		return salesTax ? subTotal + salesTax : subTotal;
	}, [getSubTotal]);

	const getTotalPaid = useCallback((payments) => {
		const paymentArray = payments?.length ? payments.map(_ => _.amount_paid) : [0];
		return paymentArray.length > 1
			? sumNums(payments.map(_ => _.amount_paid))
			: paymentArray[0];
	}, [sumNums]);

	const getAmountDue = useCallback((invoice) => {
		const amountPaid = invoice?.payments?.length
			? invoice.payments[0]
				? sumNums(invoice.payments.map(_ => _.amount_paid))
				: invoice.payments[0].amount_paid
			: 0;
		return getNetTotal(invoice) - amountPaid;
	}, [getNetTotal, sumNums]);

	const getCustomerName = useCallback((name) => {
		if(!name?.surname && !name?.given_name) return '';
		return new Name(name)?.fullName;
	}, []);

	const customerBusName = useCallback((customer) => {
		const contactName = getCustomerName(customer?.contactName);
		const businessName = customer?.BusinessName || '';
		return businessName || contactName;
	}, [getCustomerName]);

	const customerName = useCallback((clientID) => {
		if (!customers?.length) return ''
		const customer = customers.find(_ => _._id === clientID);
		return customerBusName(customer);
	}, [customers, customerBusName]);

	// Dropdown options for customer business or contact name
	const customerOptions = useCallback(() => {
		if (!customers?.length) return [];
		return customers.map(customer => ({
			_id: customer._id,
			label: customerBusName(customer)
		}));
	}, [customerBusName, customers]);

	const businessOptions = useCallback(() => {
		if (!businesses?.length) return [];
		return businesses.map(_ => ({
			_id: _._id,
			label: _.shortName
		}))
	}, [businesses]);

	const servicesOptions = useCallback(() => {
		if (!services?.length) return [];
		const optionServices = services?.filter((_) => _._sID[0] !== "V");
		if (!optionServices?.length) return [];
		return optionServices.map((_) => ({ _id: _._sID, label: _.title }));
	}, [services]);

	const invoiceDates = useCallback(({ dateSent, paymentTerms }) => {
		const terms = paymentTerms ? payableTerms.find(_ => _._id === paymentTerms) : {};
		const dueDateStr = dateSent ? dateSent + (terms?.days * msDay) : '';
		const sentDate = new Date(dateSent)
		const dueDate = new Date(dueDateStr);
		return {
			dateSent: dateSent ? formats(sentDate).dateFull : '',
			dueDate: dueDateStr ? formats(dueDate).dateFull : '',
			terms: terms?.label || '',
		}
	}, [formats, payableTerms, msDay]);

	//Both dateCreated and dueDate return value is in timestring ms format
	const getDueDateObj = useCallback((invoice) => {
		const terms = payableTerms.find(term => term._id === invoice?.paymentTerms);
		return {
			dueDate: invoice?.dateSent + (terms?.days * msDay),
			label: terms?.label
		}
	}, [payableTerms, msDay]);

	const dueDateString = useCallback((invoice) => {
		const terms = payableTerms.find(_ => _._id === invoice?.paymentTerms);
		return invoice?.dateSent + (terms?.days * msDay);
	}, [payableTerms, msDay]);

	const setServices = useCallback((str, pids) => {
		const resData = dataFromString(str);
		const newServices = servicesData(resData, pids);
		const data = newServices.filter(_ => !services.map(_ => _._sID).includes(_._sID));
		return data;
	}, [dataFromString, servicesData, services]);

	const setInvoices = useCallback((str, svcs, contrID) => {
		const resData = dataFromString(str);
		return invoiceData(resData, svcs, contrID);
	}, [dataFromString, invoiceData]);

	const imagesLoaded = useCallback((data, images) => {
		if(!images?.length || !data?.length) return false;
		const pids = data.map(service => service.pid.replace('invoice-images/', ''));
		const missingPids = pids.filter(_ => !images.includes(_));
		return {
			hasAll: Global.arrayCompare.unordered(pids, images),
			missing: missingPids?.length
				? missingPids.map(_ => _.split('_')[0]) : []
		};
	}, []);

	// Sum of prices in text lines
	const sumFromPrices = useCallback((text) => {
		if(!text) return 0;
		const numbers = text
			.split('$')
			.filter((_, i) => i)
			.map(a => {
				const numLength = a.indexOf('.') + 3;
				const numStr = a.slice(0, numLength).replace(',', '');
				return Number(numStr);
			});
		return sumNums(numbers).toFixed(2);
	}, [sumNums]);

	const lastPayment = useCallback((invoice) => {
		const payments = invoice.payments;
		const lastIdx = payments.length - 1;
		if (!invoice.payments?.length) {
			return {}
		}
		return {
			//id: payments[lastIdx]._id,
			date: payments[lastIdx]?.date,
			amount: formatAmount(payments[lastIdx]?.amount_paid),
			method: payments[lastIdx]?.method
		};
	}, [formatAmount]);

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
			subTotal: formatAmount(subTotal),
			netTotal: formatAmount(netTotal),
			salesTax: formatAmount(salesTax),
			lastPaymentDate: lastPayment?.date,
			lastPaymentAmount: formatAmount(lastPayment?.amount_paid),
			paymentsReceived: formatAmount(getTotalPaid(payments)),
			netBalanceMessage: sentStatus === 'sent'
				? balance === 0
					? 'No Balance Due'
					: 'Balance Due'
				: 'Price Quote',
			netBalance: formatAmount(balance)
		}
	}, [formatAmount, getSubTotal, getTotalPaid, services]);

	// TODO: busPfx f'd up
	const selectBusiness = useCallback((setInvoice, busID) => {
		const busPfx = businesses.find(_ => _._id === busID).busPfx
		const today = new Date();
		const todayStr = today.getTime();
		setInvoice(prev => ({
			...prev,
			number: newInvoiceNumber(busPfx),
			date: formats(today).dateFull,
			dateCreated: todayStr,
			dateString: todayStr,
			contrID: busID
		}));
	}, [newInvoiceNumber, formats, businesses]);

	const svcDetail = useCallback((service) => {
		return services?.length ? services.find(_ => _._sID === service.sID) : {};
	}, [services]);

	const descriptionText = useCallback((service, svcDetail) => {
		const notes = service?.notes;
		const description = svcDetail.description;
		switch (true) {
			case !!notes && !!description:
				return `${description} ${notes}`;
			case !!notes && !description:
				return notes;
			default:
				return description;
		}
	}, []);

	const displayStamp = useCallback((invoice) => {
		const payments = invoice?.payments?.length ? invoice.payments.map(_ => _.amount_paid) : [];
		const total = payments.length ? payments.reduce((a, b) => a + b, 0) : 0;
		return invoice?.invoicePrice - total === 0;
	}, []);

	const totalPayments = useCallback((payments) => {
		return payments?.length ? payments.map(_ => _.amount_paid).reduce((a, b) => a + b, 0) : 0;
	}, []);

	const imageIDs = useCallback((pids) => {
		if (!pids || !pids?.length) {
			return null
		}
		return pids.map(_ => ({
			url: _.url,
			pid: _.pid,
			id: _.pid.includes('_wax_') ? `${_.id}_wax` : _.id
		}))
	}, []);

	const payStatus = useCallback((invoice) => {
		return {
			invoiceSent: invoice?.sentStatus === 'sent',
			notPaid: invoice?.paidStatus !== 'Paid',
			paidInFull: invoice?.paidStatus === 'Paid',
			partiallyPaid: invoice?.paidStatus === 'Partial'
		}
	}, []);

	const detailsRowData = useCallback((invoice) => {
		if (!customers?.length || !invoice?._id) {
			return {}
		}
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

	const displayStatus = useCallback((invoice) => {
		const status = payStatus(invoice)
		const year = {
			current: new Date().getFullYear(),
			invoiceSentDate: new Date(invoice?.dateSent).getFullYear()
		};
		const condition = {
			currentYearInvoice: year.current === year.invoiceSentDate,
			notPaidInFull: status.notPaid || status.partiallyPaid,
			paymentMade: status.paidInFull || status.partiallyPaid
		}
		return {
			recordPayment: status.invoiceSent && condition.notPaidInFull,
			correctPayment: status.invoiceSent && condition.paymentMade && (condition.currentYearInvoice || status.partiallyPaid)
		}
	}, [payStatus]);

	const rowID = useCallback((unitLabel, label, idx) => {
		const labelID = typeof label === 'string' ? label.replace(' ', '') : idx;
		return 'sel' + unitLabel + labelID
	}, []);

	const handlePaymentMsg = useCallback((setMessage, invoiceID) => {
		setMessage({
			msg: `Payment in process for ${invoiceID}`,
			color: 'info'
		});
		setTimeout(() => {
			setTimeout(() => setMessage({ msg: '', color: '' }), 2000)
			setMessage({ msg: 'Payment complete!', color: 'success' });
		}, 2000);
	}, []);

	const fullName = useCallback((fCutomers, clientID) => {
		const customer = fCutomers.find(c => c._id === clientID);
		return customerBusName(customer);
	}, [customerBusName]);

	const filteredCustomers = useCallback((fCutomers) => {
		const clientIDs = invoices?.length ? [...new Set(invoices.map(_ => _.clientID))] : [];
		return clientIDs.map(id => ({
			id,
			label: fullName(fCutomers, id) }))
	}, [invoices, fullName]);

	const filteredBusinesses = useCallback((fBusinesses) => {
		const busIDs = invoices?.length ? [...new Set(invoices.map(_ => _.contrID))] : [];
		return busIDs.map(busID => ({
			id: busID,
			label: fBusinesses.find(c => c._id === busID)?.longName
		}))
	}, [invoices]);

	const filteredYear = useCallback(() => {
		const allYears = invoices.map(invoice => new Date(invoice.dateCreated).getFullYear());
		const years = Global.uniqueArray(allYears);
		return years.map(_ => ({ id: _, label: _ }))
	}, [invoices]);

	return (
		<InvoicesContext.Provider value={{
			getAmountDue,
			getFullName,
			customerName,
			customerBusName,
			customerOptions,
			businessOptions,
			servicesOptions,
			invoiceDates,
			getDueDateObj,
			dueDateString,
			setServices,
			setInvoices,
			sumFromPrices,
			lastPayment,
			invoiceTotals,
			uploadedImage,
			descriptionText,
			selectBusiness,
			totalPayments,
			svcDetail,
			displayStamp,
			getNetTotal,
			imagesLoaded,
			selInvoice: {
				imageIDs,
				detailsRowData,
				displayStatus,
				payStatus,
				rowID,
				handlePaymentMsg
			},
			filterLogic: {
				fullName,
				filteredCustomers,
				filteredBusinesses,
				filteredYear
			}
		}}>
			{props.children}
		</InvoicesContext.Provider>
	);
};

export default InvoicesContext;
