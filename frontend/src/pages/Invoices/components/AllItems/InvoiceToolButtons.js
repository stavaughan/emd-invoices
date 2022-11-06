import { useMobile } from 'hooks';
import { ActionButtons } from 'components/Tables';
import { sortInvoicesDesc, sortInvoicesAsc } from 'features/invoices/invoiceDataSlice';

const InvoiceToolButtons = ({ test, printRef, sortBy }) => {

	const { isXSmall } = useMobile();

	return (
		<div {...isXSmall && { style: { overflow: 'auto' } }}>
			<div
				{...isXSmall && {
					className: 'scrollbar-hide d-flex justify-content-between align-items-center'
				}}
			>
				<ActionButtons
					type="cps"
					test={test}
					printRef={printRef}
					sortSliceAsc={sortInvoicesAsc}
					sortSliceDesc={sortInvoicesDesc}
					collection="invoices"
					initSort={sortBy}
				/>
			</div>
		</div>
	)
};

export default InvoiceToolButtons
