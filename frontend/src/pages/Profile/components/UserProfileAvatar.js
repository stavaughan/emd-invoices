import { FormInstructions } from 'components/Avatars';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { featuresLogic } from 'features';
import { uploadUserAvatar } from 'features/auth/authSlice';
import { getContacts } from 'features/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserProfileAvatar = () => {

	const dispatch = useDispatch()

	const {
		user,
		avatarID,
		message,
		isSuccess,
		isError,
		isLoading
	} = useSelector(state => state.auth);
	const { userID, contactID } = user;

	const { savePW } = featuresLogic.userFromStorage();

	return (
		<form>
			<UploadImageContainer
				ids={{
					contact: contactID,
					toast: avatarID || 'updateuseravatar',
					pid: avatarID ? `profile-images/${avatarID}` : '',
					oldPID: avatarID,
					userID,
					savePW,
					idType: "user"
				}}
				selector={{
					message,
					isSuccess,
					isError,
					isLoading,
					uploadImageID: avatarID
				}}
				collection="contacts"
				uploadSlice={uploadUserAvatar}
				updateImage={() => dispatch(getContacts())}
				width={400}
				height={400}
				apiPath="avatars"
				camera
			>
				<FormInstructions />
			</UploadImageContainer>
		</form>
	)
}

export default UserProfileAvatar
