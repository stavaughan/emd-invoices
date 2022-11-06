import { useCallback } from 'react';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { resetImages, uploadCloudinaryImage } from 'features/images/imagesSlice';
import { useSelector } from 'react-redux';

const NewContactAvatar = ({ collection, setAvatarID, children }) => {

	const selector = useSelector((state) => state.images);

	const updateAvatar = useCallback(() => {
		setAvatarID(selector?.uploadImageID)
	}, [setAvatarID, selector?.uploadImageID]);

	return (
		<UploadImageContainer
			ids={{
				contact: 'new',
				avatar: selector?.uploadImageID || '',
				toast: 'newavatar'
			}}
			selector={selector}
			collection={collection}
			updateImage={updateAvatar}
			uploadSlice={uploadCloudinaryImage}
			resetSlice={resetImages}
			width={200}
			height={200}
			apiPath="avatars"
			camera
		>
			{children}
		</UploadImageContainer>
	)
}

export default NewContactAvatar
