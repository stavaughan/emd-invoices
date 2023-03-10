import { useMultiImageItemUpload } from '.';
import { ImageUploadButtons } from 'components/Buttons/Type';
import { Progress } from 'components/Upload/components';
import { Col } from 'components/HTML'

const MultiUploadImage = ({
	id,
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
		id,
		image,
		api,
		setImages,
		setImageIDs,
		setValue
	})

	return (
		<Col id={id} cols="6 md-4 lg-3">
			<div className="d-flex flex-column align-items-center">
				<img
					src={image?.preview}
					alt={image?.name}
					className="img-thumbnail"
				/>
				<ImageUploadButtons
					onRemoveImage={onRemoveImageHandler}
					handleSubmit={handleSubmit}
					loading={isLoading && ready}
				/>
			</div>
			{percentage ? (
				<div className="text-center">
					<Progress percentage={percentage} />
				</div>
			) : null}
		</Col>
	)
}

export default MultiUploadImage
