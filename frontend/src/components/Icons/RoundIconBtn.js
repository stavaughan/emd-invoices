import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const RoundIconBtn = ({
	icon,
	color,
	buttonClass,
	iconClass,
	loading,
	xSmall,
	style,
	alt,
	...props
}) => {
	return (
		<div
			role="button"
			className={clsx(
				xSmall ? "circle-sm" : "circle",
				buttonClass
			)}
			{...style && { style }}
			{...props}
		>
			<div className={clsx(
				alt ? 'hover-icon-alt' : 'hover-icon',
				color
			)}
			>
				<FAIcon
					icon={loading ? 'circle-notch' : icon}
					{...loading && { spin: true }}
					{...iconClass && { className: iconClass }}
				/>
			</div>
		</div>
	)
}

export default RoundIconBtn
