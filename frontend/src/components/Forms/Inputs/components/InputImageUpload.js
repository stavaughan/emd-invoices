import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { resetImages, uploadCloudinaryImage } from 'features/images/imagesSlice';
import { InputComponentWrap } from '.';

const InputImageUpload = ({
	id,
	dataID,
	apiPath,
	dataPath,
	imageID,
	toastID,
	selector,
	collection,
	updateImage,
	required,
	width = 150,
	optional,
	label,
	lsmall,
	children
}) => {


	return (
		<InputComponentWrap
			id={id}
			labelClass={lsmall ? 'text-muted text-xs' : 'text-secondary'}
			label={label}
			required={required}
			optional={optional}
		>
			<UploadImageContainer
				ids={{
					contact: dataID,
					toast: `${toastID}imageUploadToast`,
					pid: imageID ? `${dataPath}/${imageID}` : ''
				}}
				selector={selector}
				collection={collection}
				updateImage={updateImage}
				uploadSlice={uploadCloudinaryImage}
				resetSlice={resetImages}
				apiPath={apiPath}
				width={width}
			>
				{children}
			</UploadImageContainer>
		</InputComponentWrap>
	)
}

export default InputImageUpload
