import clsx from 'clsx';
import { IconWrapper } from 'components/SVGs';

import styles from './PageTitle.module.css';

const TitleIcon = ({ icon }) => {

	if (!icon) return null;

	return (
		<div className="avatar-lg position-relative mt-2">
			<span className={clsx(
				styles['header--avatar-img'],
				'rounded position-absolute top-50 start-0 translate-middle-y'
			)}>
				<IconWrapper>{icon}</IconWrapper>
			</span>
		</div>
	)
}

export default TitleIcon
