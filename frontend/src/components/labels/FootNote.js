import clsx from "clsx";

const Asterisk = ({ ...props }) => (
	<span className={clsx('text-info text-xs', props.className)}>
		{props.symbol}
	</span>
);

const FootNote = ({ aft = false, children, ...props }) => {

	if (aft) return <>{children}<Asterisk {...props} /></>;

	return <><Asterisk {...props} />{children}</>;
};

export default FootNote;
