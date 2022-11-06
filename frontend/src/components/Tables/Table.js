import clsx from "clsx";

const Table = ({ className, sticky, children }) => {

	return (
		<table
			className={clsx('table table-sm', className)}
			{...sticky && { style: { position: "relative" } }}
		>
			{children}
		</table>
	);
};

export default Table;
