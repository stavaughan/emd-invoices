import { Table } from '.';
import clsx from 'clsx';

const TableLayout = ({
	forwardRef,
	HeadContent,
	FooterContent,
	tableClass,
	sticky,
	children
}) => {

    return (
        <div
			className="table-responsive"
			{...forwardRef && { ref: forwardRef }}
		>
            <Table className={clsx(tableClass, 'mb-3')} sticky={sticky}>
                {HeadContent && <thead><HeadContent /></thead>}
                <tbody>
					{children}
				</tbody>
                {FooterContent && <tfoot><FooterContent /></tfoot>}
            </Table>
        </div>
    );
};

export default TableLayout;
