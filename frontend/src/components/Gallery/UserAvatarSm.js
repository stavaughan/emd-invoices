import React, { useContext } from 'react';
import { SettingsContext } from 'contexts';
import { FetchedImage } from '.';
import { AvatarIconSm } from 'components/Avatars';
import Classes from './styles/images.module.css';

const UserAvatarSm = ({ avatarID, site }) => {

	const { isXXLarge } = useContext(SettingsContext).screen;

	const pid = avatarID ? `profile-images/${avatarID}` : '';

	const spanClass = (site && !isXXLarge)
		? Classes['image-avatar-sm-rt']
		: Classes['image-avatar-sm'];

	if (!pid) return <AvatarIconSm />

	return (
		<span className={spanClass}>
			<FetchedImage
				pid={pid}
				width="36"
				height="36"
			/>
		</span>
	)
}

export default UserAvatarSm;
