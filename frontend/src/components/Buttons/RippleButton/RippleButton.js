import { useState, useLayoutEffect } from 'react';
import { Button } from '..';
import clsx from 'clsx';

import './RippleButton.css';

const RippleButton = ({
	handleClick,
	className,
	modalProps,
	disabled,
	children,
	type
}) => {

	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useLayoutEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			let timer = setTimeout(() => {
				setIsRippling(false)
			}, 300);
			return () => clearTimeout(timer);
		} else {
			setIsRippling(false);
		}
	}, [coords, setIsRippling]);

	useLayoutEffect(() => {
		if (!isRippling) {
			setCoords({ x: -1, y: -1 });
		}
	}, [isRippling, setCoords]);

	const onHoverHandler = (e) => {
		const rect = e.target.getBoundingClientRect();
		setCoords({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	};

	const onClickHandler = (e) => {
		e.preventDefault();
		handleClick && handleClick(e);
	};

	return (
		<Button
			className={clsx(className, 'btn-ripple')}
			type={type || 'button'}
			rest={{
				onClick: onClickHandler,
				onMouseEnter: onHoverHandler,
				...modalProps,
				disabled
			}}
		>
			{isRippling && (
				<span
					className="ripple"
					style={{ left: coords.x, top: coords.y }}
				/>
			)}
			<span className="content">
				{children}
			</span>
		</Button>
	);
};

export default RippleButton;
