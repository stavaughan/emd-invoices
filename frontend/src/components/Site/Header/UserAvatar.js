import { useSelector } from 'react-redux';
import { UserAvatarSm } from 'components/Gallery';

const UserAvatar = () => {

	const { avatarID, userName } = useSelector(state => state.auth).user;

    return (
        <span style={{
			letterSpacing: '.09rem',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			color: 'inherit'
		}}>
            <UserAvatarSm avatarID={avatarID} />
            {userName}
        </span>
    )
}

export default UserAvatar
