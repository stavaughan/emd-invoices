import { useUserUpdate } from 'pages/Profile/components';
import { SubmitButtonGroup } from 'services/DataUpdates';
import { EditProfileFormInputs } from '.';
import { useSelector } from 'react-redux';

const EditProfileForm = () => {

	const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

	const { userID, contactID, userContactData } = user;

	const {
		clear,
		setClear,
		entering,
		handleOnSubmit,
		setDataToUpdate,
		setContactData,
		setEntering,
		setDisplay,
		updatedContact
	} = useUserUpdate({
		userContactData,
		sliceData: {
			isError,
			isSuccess,
			message,
			selectedID: contactID
		},
		contactID,
		userID,
		updatePhones: true
	});

	return (
		<form onSubmit={handleOnSubmit} className="px-2">
			<EditProfileFormInputs
				updatedContact={updatedContact}
				clear={clear}
				setContactData={setContactData}
				setDataToUpdate={setDataToUpdate}
				setEntering={setEntering}
			/>
			<SubmitButtonGroup
				setClear={setClear}
				isLoading={isLoading}
				setDisplay={setDisplay}
				entering={entering}
			/>
		</form>
	)
}

export default EditProfileForm
