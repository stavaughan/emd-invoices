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
	height,
	apiPath,
	children,
	camera,
	type
}) => {

	const {
		uploadImage,
		changeDetect,
		setChangeDetect,
		fileInputState,
		setFileInputState,
		percentage,
		fileName,
		setFile,
		clearStates,
		requestData
	} = useUploadImage({
		ids,
		width,
		selector,
		updateImage,
		uploadSlice,
		resetSlice,
		collection,
		apiPath
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		uploadImage()
	};

	return (
		<>
			{percentage ? <Progress percentage={percentage} /> : null}
			<div className="d-lg-flex align-items-center justify-content-between">
				<div className="d-flex justify-content-start align-items-center mb-4 mb-lg-0">
					<UploadableImageWrapper
						setFile={setFile}
						setChangeDetect={setChangeDetect}
						setFileInputState={setFileInputState}
						fileInputState={fileInputState}
						size={apiPath === 'avatars' ? 'h5' : 'h4'}
						camera={camera}
					>
						{apiPath === 'avatars' ? (
							<ProfileImage
								selectedName={fileName ? requestData?.name : ''}
								selectedURL={fileName ? requestData?.url : ''}
								loading={selector?.isLoading}
								pid={ids.pid}
							/>
						) : (
							<PreviewableImage
								selectedName={fileName ? requestData?.name : ''}
								selectedURL={fileName ? requestData?.url : ''}
								loading={selector?.isLoading}
								width={displayWidth || 200}
								height={height}
								type={type}
								pid={ids?.pid}
							/>
						)}
					</UploadableImageWrapper>
					{(changeDetect) && (
						<div className="">
							<ImageUploadButtons
								onRemoveImage={clearStates}
								handleSubmit={handleSubmit}
								loading={!!selector?.isLoading}
								className="my-auto"
								margSubmit="me-"
								margCancel=""
								{...btnColor && { btnColor }}
							/>
						</div>
					)}
					{children}
				</div>
			</div>
		</>
	)
}

export default UploadImageContainer
