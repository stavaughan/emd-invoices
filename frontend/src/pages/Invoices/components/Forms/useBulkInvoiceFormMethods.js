import { useCallback, useContext, useState, useEffect } from 'react';
import { InvoicesContext, FormsContext, DatesContext } from 'contexts';
import { Global } from 'globals/js';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useClear } from 'hooks';

const useBulkInvoiceFormMethods = () => {

	const { services } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { newInvoiceNumber, sumNums, businessOptions } = useContext(InvoicesContext);
	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);
	const { formats } = useContext(DatesContext);

	const [contrID, setContrID] = useState('')
	const [textValue, setTextValue] = useState('');
	const [sumResult, setSumResult] = useState(0);
	const [imageIDs, setImageIDs] = useState([]);
	const [clearImages, setClearImages] = useState(false);
	const [display, setDisplay] = useState(false);

	const clearStates = useCallback(() => {
		setClearImages(true)
		setImageIDs([])
		setTextValue('');
		setContrID('')
		setSumResult(0);
		setDisplay(false);
	}, [setImageIDs, setTextValue, setDisplay]);

	useEffect(() => {
		if(clear) {
			clearStates();
		}
		return () => {
			clearStates();
		}
	}, [clear, clearStates, setNewItem]);

	// called by: this file at setServices
	const servicesData = useCallback((resData, pids) => {
		return resData.map(({ price, sID, description }) => {
			const pid = pids?.length ? pids.find(pid => pid.includes(sID)) : '';
			if (!pid) {
				toast.error(`Uploaded Image doesn't match Service data.`, {
					toastId: `imageUploadError${sID}`
				});
			}
			return {
				sID,
				_sID: sID + Global.randomHex(),
				title: "Jewelry CAD Design Services",
				description: `${sID} - ${description}`,
				priceType: "job",
				unit_price: price,
				pid: pid ? `invoice-images/${pid}` : ''
			}
		});
	}, []);

	// called by: this file at setInvoices
	const invoiceData = useCallback((resData, svcs, contrID) => {

		if(!resData?.length) return toast.error(`No data to process.`, {
			toastId: `noDataToProcess`
		});

		const today = new Date();
		const todayStr = today.getTime();
		const todayFormats = formats(today);
		const formatDate = todayFormats?.dateFull;
		const YY = todayFormats?.year2dig;
		const MM = Global.padWithZero(todayFormats?.monthNumeric);
		const DD = Global.padWithZero(today.getDate());
		const groupIDPfx = `${YY}${MM}${DD}`;

		return resData.map(({ price, sID, busPfx }, idx) => {
			const service = svcs.find(_ => _.sID === sID);
			const clientID = customers.find(_ => _.busPfx === busPfx)._id;
			return {
				number: newInvoiceNumber(busPfx, idx),
				date: formatDate,
				dateString: todayStr,
				dateSent: null,
				dateCreated: todayStr,
				paymentTerms: "onReceipt",
				dateDue: "Payable on Receipt",
				hasImage: 1,
				clientID,
				contrID,
				groupID: groupIDPfx + busPfx + 'G1',
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

	// called by: this file at setServices and setInvoices
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

	// called by: Forms at BulkInvoiceFormInputs
	const sumFromPrices = useCallback((text) => {
		if (!text) return 0;
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

	// called by: Forms at BulkInvoiceFormInputs
	const setServices = useCallback((str, pids) => {
		const resData = dataFromString(str);
		const newServices = servicesData(resData, pids);
		const data = newServices.filter(_ => !services.map(_ => _._sID).includes(_._sID));
		return data;
	}, [dataFromString, servicesData, services]);

	// called by: Forms at BulkInvoiceFormInputs
	const setInvoices = useCallback((str, svcs, contrID) => {
		const resData = dataFromString(str);
		return invoiceData(resData, svcs, contrID);
	}, [dataFromString, invoiceData]);

	// called by: Forms at BulkInvoiceFormInputs
	const imagesLoaded = useCallback((data, images) => {
		if (!images?.length || !data?.length) return false;
		const pids = data.map(service => service.pid.replace('invoice-images/', ''));
		const missingPids = pids.filter(_ => !images.includes(_));
		return {
			hasAll: Global.arrayCompare.unordered(pids, images),
			missing: missingPids?.length
				? missingPids.map(_ => _.split('_')[0]) : []
		};
	}, []);

	useEffect(() => {
		if(clearImages) {
			let timer = setTimeout(() => {
				setClearImages(false)
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [clearImages, setClearImages])

	useClear(clear, clearStates);

	const setData = useCallback((svsData) => {
		const check = imagesLoaded(svsData, imageIDs);
		if (check?.missing?.length) {
			toast.error(`Missing images for: ${check.missing.join(', ')}`);
			setTextValue('');
			setDisplay(false);
		}
	}, [imageIDs, imagesLoaded, setTextValue]);

	useEffect(() => {
		if (newItem?.services?.length) {
			setData(newItem.services)
		}
	}, [setData, newItem?.services])

	useEffect(() => {
		if (imageIDs?.length) {
			setEntering(true);
		}
	}, [imageIDs?.length, setEntering]);

	const setInvoiceData = useCallback(() => {
		if (!imageIDs.length) {
			toast.error('No images selected');
			setTextValue('');
			setDisplay(false);
		} else {
			const servicesData = setServices(textValue, imageIDs);
			const sumPrices = sumFromPrices(textValue);
			const invoicesData = setInvoices(textValue, servicesData, contrID);
			setSumResult(sumPrices);
			setNewItem({
				invoices: invoicesData,
				services: servicesData
			});
			setDisplay(true);
			setEntering(true);
		}
	}, [
		contrID,
		imageIDs,
		setEntering,
		setNewItem,
		setServices,
		setInvoices,
		sumFromPrices,
		textValue
	]);

	return {
		display,
		clearStates,
		textValue,
		setTextValue,
		setInvoiceData,
		sumResult,
		newItem,
		imageIDs,
		setImageIDs,
		clearImages,
		contrID,
		setContrID,
		businessOptions
	}
}

export default useBulkInvoiceFormMethods
