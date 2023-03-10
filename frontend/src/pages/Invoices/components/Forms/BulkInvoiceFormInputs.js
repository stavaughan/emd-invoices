import { ResultFromTextInput, useBulkInvoiceFormMethods } from '.';
import { Row, Col } from 'components/HTML';

const BulkInvoiceFormInputs = () => {

	const {
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
	} = useBulkInvoiceFormMethods();

	return (
		<div className="pb-4">
			<ResultFromTextInput
				title="Text to Invoices"
				display={display}
				onDeleteHandler={clearStates}
				textValue={textValue}
				codeBlock={true}
				setTextValue={setTextValue}
				handleBlurEvent={setInvoiceData}
				placeholder="enter text"
				resultTotal={`$${sumResult || '0'}`}
				resultValue={JSON.stringify(newItem, null, 2)}
				sumResult={sumResult}
				invoicesObject={newItem}
				setImageIDs={setImageIDs}
				clearImages={clearImages}
				hasImages={imageIDs.length}
				contrID={contrID}
				onSelectBusiness={setContrID}
				businessOptions={businessOptions()}
			/>
		</div>
	);
};

export default BulkInvoiceFormInputs;
