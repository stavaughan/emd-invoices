import { InputGroup } from 'components/Forms/Groups';
import { Input } from 'components/Forms/Inputs';
import { MultiUploadImages } from 'components/Upload/ImageUpload';
import { HorTwoSteps } from 'components/Wizards';
import { useMobile } from 'hooks';
import { useMemo } from 'react';
import { BulkDescriptionlink, DataToJSONInput } from '.';

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

	const { isXSmall } = useMobile();

	const description = useMemo(() => <BulkDescriptionlink isXSmall={isXSmall} />, [isXSmall]);

	return (
		<InputGroup
			groupTitle={title}
			cardClass="shadow-none"
			description={description}
			style={{ overflowX: 'scroll' }}
		>
			<div className="d-flex justify-content-start align-items-center pb-3 pt-2 ps-3">
				<div className="me-3 text-sm text-slate-600 font-medium">
					Select Business:
				</div>
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
					{!isXSmall && (
						<HorTwoSteps
							completeOne={hasImages}
							completeTwo={!!JSON.parse(resultValue)?.invoices?.length}
							labelOne="Load images"
							labelTwo="Insert text"
						/>
					)}
					<MultiUploadImages
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
					isXSmall={isXSmall}
				/>
			) : null}
		</InputGroup>
	);
};

export default ResultFromTextInput;
