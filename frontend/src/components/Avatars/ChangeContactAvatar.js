import { useCallback } from 'react';
import { getContacts } from 'features/contacts/contactsSlice';
import { resetImages, uploadCloudinaryImage } from 'features/images/imagesSlice';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { useDispatch, useSelector } from 'react-redux'

const ChangeContactAvatar = ({
	collection,
	contactID,
	avatarID,
	btnColor,
	children
}) => {

	const dispatch = useDispatch()

	const selector = useSelector((state) => state.images)

	const updateAvatar = useCallback(() => {
		if (collection) {
			dispatch(getContacts())
		}
	}, [collection, dispatch])

	return (
		<UploadImageContainer
			ids={{
				contact: contactID,
				toast: avatarID || 'updateavatar',
				pid: avatarID ? `profile-images/${avatarID}` : ''
			}}
			selector={selector}
			collection={collection}
			updateImage={updateAvatar}
			uploadSlice={uploadCloudinaryImage}
			resetSlice={resetImages}
			btnColor={btnColor}
			width={200}
			height={200}
			apiPath="avatars"
			camera
		>
			{children}
		</UploadImageContainer>
	)
}

export default ChangeContactAvatar
