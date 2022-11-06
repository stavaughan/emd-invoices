import React from 'react';
import { FetchedImage } from '.';
import { AvatarIconSm } from 'components/Avatars';
import Classes from './styles/images.module.css';

const UserAvatarSm = ({ avatarID }) => {

	const pid = avatarID ? `profile-images/${avatarID}` : '';

	if (!pid) return <AvatarIconSm />

	return (
		<span className={Classes['image-avatar-sm']}>
			<FetchedImage
				pid={pid}
				width="36"
				height="36"
			/>
		</span>
	)
}

export default UserAvatarSm;
