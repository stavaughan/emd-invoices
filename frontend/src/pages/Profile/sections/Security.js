import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserLoading } from '../components';
import { UserEmailForm, PasswordForm } from '../components/Forms';

const Security = () => {

	const { user } = useSelector(state => state.auth);

	const [userEmail, setUserEmail] = useState(user.userEmail);

	return (
		<UserLoading>
			<UserEmailForm
				userEmail={userEmail}
				setUserEmail={setUserEmail}
				userID={user.userID}
			/>
			<hr className="my-4" />
			<PasswordForm />
		</UserLoading>
	)
}

export default Security
