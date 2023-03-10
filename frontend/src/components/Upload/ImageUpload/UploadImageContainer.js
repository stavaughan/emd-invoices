import { ProfileImage } from 'components/Avatars/components';
import { ImageUploadButtons } from 'components/Buttons/Type';
import { PreviewableImage, UploadableImageWrapper, useUploadImage } from '.';
import { Progress } from 'components/Upload/components';

const UploadImageContainer = ({
	ids,
	selector,
	collection,
	updateImage,
	btnColor,
	width,
	displayWidth,
	uploadSlice,
	resetSlice,
	uploadImageID,
	height,
	apiPath,
	children,
	idType,
	camera,
	type
}) => {

	const {
		uploadImage,
		clearStates,
		requestData,
		upload,
		onSetUpload
	} = useUploadImage({
		ids,
		width,
		selector,
		updateImage,
		uploadSlice,
		resetSlice,
		collection,
		uploadImageID,
		idType,
		apiPath
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		uploadImage()
	};

	return (
		<>
			{upload.percentage ? <Progress percentage={upload.percentage} /> : null}
			<div className="d-lg-flex align-items-center justify-content-between">
				<div className="d-flex justify-content-start align-items-center mb-4 mb-lg-0">
					<UploadableImageWrapper
						setFile={onSetUpload('file')}
						setChangeDetect={onSetUpload('changeDetect')}
						setFileInputState={onSetUpload('fileInputState')}
						fileInputState={upload.fileInputState}
						size={apiPath === 'avatars' ? 'h5' : 'h4'}
						camera={camera}
					>
						{apiPath === 'avatars' ? (
							<ProfileImage
								selectedName={upload.file?.name ? requestData?.name : ''}
								selectedURL={upload.file?.name ? requestData?.url : ''}
								loading={selector?.isLoading}
								pid={ids.pid}
							/>
						) : (
							<PreviewableImage
								selectedName={upload.file?.name ? requestData?.name : ''}
								selectedURL={upload.file?.name ? requestData?.url : ''}
								loading={selector?.isLoading}
								width={displayWidth || 200}
								height={height}
								type={type}
								pid={ids?.pid}
							/>
						)}
					</UploadableImageWrapper>
					{(upload.changeDetect) && (
						<ImageUploadButtons
							onRemoveImage={clearStates}
							handleSubmit={handleSubmit}
							loading={!!selector?.isLoading}
							className="my-auto"
							btnColor={btnColor}
						/>
					)}
					{children}
				</div>
			</div>
		</>
	)
}

export default UploadImageContainer
