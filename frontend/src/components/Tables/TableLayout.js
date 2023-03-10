import { Table } from '.';
import clsx from 'clsx';

const TableLayout = ({
	forwardRef,
	HeadContent,
	FooterContent,
	tableClass,
	children
}) => {

	return (
		<div
			className="table-responsive"
			{...forwardRef && { ref: forwardRef }}
		>
			<Table className={clsx(tableClass, 'mb-3')}>
				{HeadContent && (
					<thead>
						<HeadContent />
					</thead>
				)}
				<tbody>
					{children}
				</tbody>
				{FooterContent && <tfoot><FooterContent /></tfoot>}
			</Table>
		</div>
	);
};

export default TableLayout;
