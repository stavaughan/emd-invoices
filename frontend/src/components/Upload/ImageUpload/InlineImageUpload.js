import { ImageUploadButtons } from 'components/Buttons/Type';
import { InputFileUpload } from 'components/Forms/Inputs';
import { DropZoneThumbnailIL, Progress } from 'components/Upload/components';
import { useInlineImageUpload } from 'components/Upload/ImageUpload';

const InlineImageUpload = ({
	width,
	itemID,
	apiPath,
	sliceID,
	updateSlice,
	setDataUpdate,
	images,
	resetSlice
}) => {

	const {
		upload,
		hiddenFileInput,
		onImageInput,
		handleSubmit,
		requestData,
		selector,
		clearStates
	} = useInlineImageUpload({
		itemID,
		apiPath,
		sliceID,
		updateSlice,
		setDataUpdate,
		images,
		resetSlice
	});

	return (
		<div
			className="d-flex flex-column align-items-center"
			onClick={() => {
				if(!requestData?.url) {
					hiddenFileInput.current.click()
				}
			}}
		>
			<InputFileUpload
				inputRef={hiddenFileInput}
				onFileUpload={onImageInput}
				value={upload.fileInputState}
				mimeType="image/*"
				multiple={false}
			/>
			{requestData?.url ? (
				<img
					src={requestData?.url}
					alt={requestData?.name}
					className="img-thumbnail"
					style={{
						maxWidth: '100%',
						height: 'auto'
					}}
				/>
			) : <DropZoneThumbnailIL width={width} />}
			{upload.changeDetect && (
				<div className="">
					<ImageUploadButtons
						onRemoveImage={clearStates}
						handleSubmit={handleSubmit}
						loading={!!selector?.isLoading}
					/>
				</div>
			)}
			{upload.percentage ? <Progress percentage={upload.percentage} /> : null}
		</div>
	)
}

export default InlineImageUpload
