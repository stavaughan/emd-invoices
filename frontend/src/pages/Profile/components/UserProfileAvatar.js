import { FormInstructions } from 'components/Avatars';
import { uploadUserAvatar } from 'features/auth/authSlice';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { featuresLogic } from 'features';
import { useSelector } from 'react-redux';

const UserProfileAvatar = () => {

	const {
		user,
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
					toast: user?.avatarID || 'updateuseravatar',
					pid: user?.avatarID ? `profile-images/${user?.avatarID}` : '',
					userID,
					savePW
				}}
				selector={{
					message,
					isSuccess,
					isError,
					isLoading,
					uploadImageID: user?.avatarID
				}}
				collection="contacts"
				uploadSlice={uploadUserAvatar}
				width={200}
				height={200}
				apiPath="avatars"
				camera
			>
				<FormInstructions />
			</UploadImageContainer>
		</form>
	)
}

export default UserProfileAvatar
