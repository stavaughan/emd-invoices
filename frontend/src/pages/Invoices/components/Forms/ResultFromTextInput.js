import { InputGroup } from 'components/Forms/Groups';
import { Input } from 'components/Forms/Inputs';
import { MultiUploadImages } from 'components/Upload/ImageUpload';
import { HorTwoSteps } from 'components/Wizards';
import { DataToJSONInput } from '.';

const ResultFromTextInput = ({
	title,
	display,
	onDeleteHandler,
	textValue,
	codeBlock = false,
	setTextValue,
	handleBlurEvent,
	invoicesObject,
	placeholder,
	resultTotal = '',
	setImageIDs,
	resultValue,
	clearImages,
	hasImages,
	contrID,
	onSelectBusiness,
	businessOptions
}) => {

	return (
		<InputGroup
			groupTitle={title}
			className="text-dark"
			cardClass="shadow-none"
		>
			<div className="d-flex justify-content-start align-items-center pb-3 pt-2 ps-3">
				<div className="me-3 text-sm text-slate-600 font-medium">Select Business:</div>
				<Input.Dropdown
					id="bulkinvoicesselbusiness"
					selected={contrID}
					onChange={onSelectBusiness}
					optionData={businessOptions}
					small
				/>
			</div>
			{contrID ? (
				<>
					<HorTwoSteps
						completeOne={hasImages}
						completeTwo={!!JSON.parse(resultValue)?.invoices?.length}
						labelOne="Load images"
						labelTwo="Insert text"
					/>
					<MultiUploadImages
						id="uploadmultipleinvoiceimages"
						api="invoices"
						clearImages={clearImages}
						setImageIDs={setImageIDs}
					/>
				</>

			) : null}
			{hasImages ? (
				<DataToJSONInput
					codeBlock={codeBlock}
					invoicesObject={invoicesObject}
					resultTotal={resultTotal}
					display={display}
					onDeleteHandler={onDeleteHandler}
					resultValue={resultValue}
					placeholder={placeholder}
					setTextValue={setTextValue}
					handleBlurEvent={handleBlurEvent}
					textValue={textValue}
				/>
			) : null}
		</InputGroup>
	);
};

export default ResultFromTextInput;
