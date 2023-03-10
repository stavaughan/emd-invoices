import clsx from 'clsx';
import { useMobile } from 'hooks';
import { useEffect, useState } from 'react';
import { alertProps } from './components';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const removeStyle = {
	opacity: 0,
	transition: 'opacity 1s ease-out'
};

const AlertCardDismissable = ({
	message,
	type = 'info',
	style,
	onClick,
	textColor,
	setCloseTop,
	noIcon
}) => {

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
		!!onClick && onClick();
		setRemove(true);
	};

	return (
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
			<div className={clsx(
				"d-flex justify-content-between",
				setCloseTop ? 'align-items-start' : 'align-items-center'
			)}>
				<div className={clsx(
					"d-flex justify-content-start align-items-center",
					isXSmall && "text-sm"
				)}>
					{!noIcon && (
						<FAIcon
							icon={icon}
							className="fa-lg me-1 my-auto"
							style={{ color }}
						/>
					)}
					<div className={clsx(textColor, "px-2")}>
						{message}
					</div>
				</div>
				<button
					className="btn btn-close bg-transparent"
					onClick={onClickHandler}
				/>
			</div>
		</div>
	)
}

export default AlertCardDismissable;
