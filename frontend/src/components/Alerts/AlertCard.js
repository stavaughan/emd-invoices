import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { alertProps } from './components';

const AlertCard = ({
	message,
	className,
	alertStyle,
	alertClass,
	type = 'info'
}) => {

	const { colors, icon } = alertProps[type];
	const { color, bgColor } = colors;

    return (
        <div
            className={clsx(
				"rounded p-3 align-items-center shadow",
				className
			)}
            style={{
				...alertStyle || {},
                backgroundColor: bgColor,
                borderLeft: `8px solid ${color}`
            }}
        >
            <div className={clsx(
				"d-flex",
				alertClass
			)}>
                <FAIcon
					icon={icon}
					className="fa-lg me-2 my-auto"
					style={{ color }}
				/>
                <div className="px-2">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default AlertCard
