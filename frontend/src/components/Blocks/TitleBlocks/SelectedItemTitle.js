import { ContactAvatar } from 'components/Avatars';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

const SelectedItemTitle = ({ title, icon }) => {

	const { isXSmall, isLarge } = useContext(SettingsContext).screen;

	return (
		<div className="mx-auto border-bottom border-light pb-3">
			<div className="d-flex align-items-center">
				<div className="me-2 flex-shrink-0 self-center">
					<ContactAvatar
						size={isLarge ? '5 fs-md-3' : '6 fs-md-3'}
						icon={icon ? 'user': 'store'}
					/>
				</div>
				<div>
					<div className={clsx(
						isXSmall ? 'text-base' : 'text-lg',
						'font-medium text-primary leading-5'
					)}>
						{title}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedItemTitle;
