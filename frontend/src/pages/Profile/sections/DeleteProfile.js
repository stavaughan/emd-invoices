import { useItemDelete } from 'hooks';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const DeleteProfile = () => {

	const { _id: userID } = useSelector(state => state.auth).user;

	const { setDeleteId } = useItemDelete('users')

    return (
        <div className="ease-in-out">
            <div className="font-medium text-danger">
                <FAIcon icon="exclamation-triangle" className="me-2" />
                Warning
            </div>
            <p>If you close your account, you will have to create another account if you wish to regain access.</p>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => setDeleteId(userID)}
            >
                Close My Account
            </button>
        </div>
    )
}

export default DeleteProfile
