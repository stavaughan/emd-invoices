import { useState, useEffect } from 'react';
import { useMobile } from 'hooks';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const alertProps = {
	success: {
		colors: {
			bgColor: '#d1e7dd',
			color: '#198754'
		},
		icon: 'check-circle'
	},
	danger: {
		colors: {
			bgColor: '#f7c0ca',
			color: '#e63757'
		},
		icon: 'exclamation-circle'
	},
	warning: {
		colors: {
			bgColor: '#fcebc1',
			color: '#f6c343'
		},
		icon: 'exclamation-triangle'
	},
	info: {
		colors: {
			bgColor: '#c2e7f1',
			color: '#39afd1'
		},
		icon: 'info-circle'
	}
};

const removeStyle = {
	opacity: 0,
	transition: 'opacity 1s ease-out'
};

const AlertCardDismissable = ({ message, type = 'info', style }) => {

	const { isXSmall } = useMobile();

	const [show, setShow] = useState(true);
	const [remove, setRemove] = useState(false);

	const { colors, icon } = alertProps[type];
	const { color, bgColor } = colors;

	useEffect(() => {
		if (remove) {
			let timeout = setTimeout(() => {
				setShow(false);
				setRemove(false);
			}, 500);
			return () => {
				clearTimeout(timeout)
			};
		}
	}, [remove]);

	const onClickHandler = (e) => {
		e.preventDefault();
		setRemove(true);
	};

	return (
		<>
			<div
				className={clsx(
					'rounded p-3 align-items-center shadow',
					!show && 'hide'
				)}
				style={{
					backgroundColor: bgColor,
					borderLeft: `8px solid ${color}`,
					...(style && !remove) ? style : removeStyle
				}}
			>
				<div className="d-flex justify-content-between align-items-center">
					<div className={clsx(
						"d-flex justify-content-start align-items-center",
						isXSmall && "text-sm"
					)}>
						<FAIcon
							icon={icon}
							className="fa-lg me-1 my-auto"
							style={{ color }}
						/>
						<div className="px-2">{message}</div>
					</div>
					<div className="d-flex justify-content-end align-items-center">
						<button
							className="btn btn-close bg-transparent"
							onClick={onClickHandler}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default AlertCardDismissable;
