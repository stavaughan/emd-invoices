import clsx from "clsx";

const Table = ({ className, children }) => {

	return (
		<table className={clsx('table table-sm', className)}>
			{children}
		</table>
	);
};

export default Table;
