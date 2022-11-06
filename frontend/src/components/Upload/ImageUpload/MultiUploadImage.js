import { ImagePreviewColWrapper, useMultiImageItemUpload } from '.';
import { ImageUploadButtons } from 'components/Buttons/Type';

const MultiUploadImage = ({
	image,
	api,
	setImages,
	setImageIDs,
	setValue
}) => {

	const {
		handleSubmit,
		onRemoveImageHandler,
		isLoading,
		percentage,
		ready
	} = useMultiImageItemUpload({
		image,
		api,
		setImages,
		setImageIDs,
		setValue
	})

	return (
		<ImagePreviewColWrapper file={image} percentage={percentage}>
			<ImageUploadButtons
				onRemoveImage={onRemoveImageHandler}
				handleSubmit={handleSubmit}
				loading={isLoading && ready}
			/>
		</ImagePreviewColWrapper>
	)
}

export default MultiUploadImage
