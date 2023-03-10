import { TitleDescription } from 'components/Blocks';
import { CancelSubmitGroup } from 'components/Buttons/Type';
import { ContactEmailInput } from 'components/Forms/Inputs';
import { Row } from 'components/HTML';
import { useSelector } from 'react-redux';
import { useResetEmail } from '..';

const UserEmailForm = () => {

	const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

	const { userEmail, contactID, userID } = user;

	const {
		clear,
		setClear,
		entering,
		onUpdateSumbit,
		setNewUserEmail,
		setEntering,
		setDisplay,
		updatedEmail
	} = useResetEmail({
		userEmail,
		sliceData: {
			isError,
			isSuccess,
			message
		},
		contactID,
		userID
	});

	return (
		<form onSubmit={onUpdateSumbit}>
			<TitleDescription
				title="Update Email"
				description="Use this section to update your email"
				className="mb-1"
			/>
			<Row className="g-4 py-3">
				<ContactEmailInput
					cols="12 lg-7"
					id="usernameupdate"
					label="New email address"
					autoComplete="username"
					placeholder="enter your email"
					setEmail={setNewUserEmail}
					setEntering={setEntering}
					contactEmail={updatedEmail}
					clear={clear}
				/>
			</Row>
			<CancelSubmitGroup
				float="start"
				className="mb-3 pe-2"
				displayCancel={!!entering}
				submitLabel="Update Email"
				disabled={!entering || isLoading}
				handleCancel={() => {
					entering ? setDisplay(true) : setClear(true)
				}}
				isLoading={isLoading}
			/>
		</form>
	);
};

export default UserEmailForm;
