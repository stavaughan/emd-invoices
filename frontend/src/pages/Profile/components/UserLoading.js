import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';

const UserLoading = (props) => {

	const { user, isLoading } = useSelector(state => state.auth);

	const { contactID } = user;

	if (!contactID && isLoading) {
		return <Loader />
	}

	return (
		<div className="ease-in-out">
			{(!contactID && isLoading) ? (
				<Loader />
			) : (
				<>
					{props.children}
				</>
			)}
		</div>
	)
}

export default UserLoading
