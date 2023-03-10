import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const RoundIconBtn = ({
	icon,
	color,
	buttonClass,
	hover = 'reg',
	iconClass,
	loading,
	xSmall,
	danger = false,
	style,
	alt,
	...props
}) => {

	return (
		<div
			role="button"
			className={clsx(
				'd-print-none',
				xSmall ? "circle-sm" : "circle",
				buttonClass
			)}
			{...style && { style }}
			{...props}
		>
			<div className={clsx(
				({ alt: 'hover-icon-alt', danger: 'hover-icon-danger', reg: 'hover-icon' })[hover],
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
