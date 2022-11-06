import { useState, useEffect, useContext, useCallback } from 'react';
import { InvoicesContext, FormsContext } from 'contexts';
import { ResultFromTextInput } from '.';
import { Row, Col } from 'components/HTML';
import { toast } from 'react-toastify';
import { useClear } from 'hooks';

const TempPriceInput = () => {

	const { clear, newItem, setNewItem, setEntering } = useContext(FormsContext);
	const { setServices, sumFromPrices, setInvoices, imagesLoaded, businessOptions } = useContext(InvoicesContext)

	const [contrID, setContrID] = useState('')
	const [textValue, setTextValue] = useState('');
	const [sumResult, setSumResult] = useState(0);
	const [imageIDs, setImageIDs] = useState([]);
	const [clearImages, setClearImages] = useState(false);
	const [display, setDisplay] = useState(false);
	const [imagesCheck, setImagesCheck] = useState(false);

	const clearStates = useCallback(() => {
		setClearImages(true)
		setImageIDs([])
		setTextValue('');
		setContrID('')
		setSumResult(0);
		setDisplay(false);
		setImagesCheck(false);
	}, [setImageIDs, setTextValue, setDisplay, setImagesCheck]);

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
		if (check?.hasAll) {
			setImagesCheck(check.hasAll);
		}
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
		if (imagesCheck) {
			setEntering(true);
		}
	}, [imagesCheck, setEntering]);

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

	const onSelectBusiness = (value) => {
		setContrID(value)
	};

	return (
		<Row className="g-3 pb-4">
			<Col col="12">
				<ResultFromTextInput
					title="Invoices From Data String"
					display={display}
					onDeleteHandler={clearStates}
					textValue={textValue}
					codeBlock={true}
					setTextValue={setTextValue}
					handleBlurEvent={setInvoiceData}
					placeholder="enter data string"
					resultTotal={`$${sumResult || '0'}`}
					resultValue={JSON.stringify(newItem, null, 2)}
					sumResult={sumResult}
					invoicesObject={newItem}
					setImageIDs={setImageIDs}
					clearImages={clearImages}
					hasImages={imageIDs.length}
					contrID={contrID}
					onSelectBusiness={onSelectBusiness}
					businessOptions={businessOptions()}
				/>
			</Col>
		</Row>

	);
};

export default TempPriceInput;
