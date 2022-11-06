import { useMemo } from "react";

const pathStr = (dir) => {
	switch(dir) {
		case 'left':
			return 'M15.75 19.5L8.25 12l7.5-7.5';
		case 'right':
			return 'M8.25 4.5l7.5 7.5-7.5 7.5';
		case 'double-right':
			return 'M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5';
		case 'double-left':
			return 'M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5';
		case 'up':
			return 'M4.5 15.75l7.5-7.5 7.5 7.5';
		case 'down':
			return 'M19.5 8.25l-7.5 7.5-7.5-7.5';
		case 'double-up':
			return 'M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5';
		case 'double-down':
			return 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5';
		default:
			return '';
	}
};

const Path = ({ dir }) => {
	const path = useMemo(() => pathStr(dir), [dir]);
	return <path fill="none" stroke="currentColor" strokeWidth="3" d={path} />;
};

const Chevron = ({ dir, ...props }) => {

	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			fill="none"
			{...props}
		>
			<Path dir={dir} />
		</svg>
	)
};

export default Chevron
