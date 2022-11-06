import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AlertBanner = ({
	className,
	children,
	color = 'danger',
	icon = 'exclamation-triangle',
	iconClass,
	dismissable = false,
	onClose = () => {}
}) => {

	const { smallText, mediumText } = useContext(SettingsContext).fontSize;

	return (
		<div
			className={clsx(
				'alert',
				`alert-${color}`,
				'd-flex align-items-center',
				smallText,
				className,
				dismissable && 'justify-content-between'
			)}
			role="alert"
		>
			<div className="d-flex flex-row align-items-center">
				<FAIcon
					icon={icon}
					className={clsx(mediumText, iconClass, 'me-2')}
				/>
				{children}
			</div>
			{dismissable && (
				<span
					className="text-end"
					role="button"
					onClick={onClose}
				>
					<FAIcon icon="times" className="text-xs" />
				</span>
			)}
		</div>
	);
};

export default AlertBanner;
