import { UserProfileAvatar } from 'pages/Profile/components';
import { EditProfileForm } from '../components/Forms';
import { UserLoading } from '../components';

const EditProfile = () => {

	return (
		<UserLoading>
			<div className="d-flex justify-content-between align-items-center">
				<UserProfileAvatar />
			</div>
			<hr className="my-4" />
			<EditProfileForm />
		</UserLoading>
	);
};

export default EditProfile;
