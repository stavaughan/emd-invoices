import { useLogout } from 'hooks';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const UserLogout = ({ className }) => {

	const { onLogout } = useLogout()

    return (
        <button className={className} onClick={onLogout}>
            <span>
                <FAIcon icon="sign-out-alt" className="me-3" />
                Sign out
            </span>
        </button>
    )
}

export default UserLogout
