import { ImagesUpload } from 'components/Upload/ImageUpload';

import Classes from '../ResultsTable.module.css'

const PlaceholderImage = ({
	width,
	height,
	onUploadImage,
}) => {

	return (
		<div className={`${Classes['image-placeholder']} bg-transparent`}>
			<ImagesUpload
				type="file"
				mimeType="image/*"
				maxSize="5MB"
				onUpload={onUploadImage}
				base64
				style={{ width, height }}
			/>
		</div>
	)
}

export default PlaceholderImage
