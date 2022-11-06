import clsx from "clsx";

const Badge = ({ color, label, className }) => {
	return (
		<span className={clsx(`badge badge-${color}`, className)}>
			{label}
		</span>
	)
};

export default Badge;
