import { useMemo, useContext } from 'react';
import { SelectedItemRows, ProfileInformation } from 'components/section-content/ListingPage';
import { InlineLabelButton } from 'components/section-content/ListingPage/SelectedItem';
import { updateBusiness } from 'features/invoices/businessesSlice';
import { InvoiceItems, PaymentStatus } from '.';
import { TableSingleColRow } from 'components/Tables';
import { EditTextCell } from 'components/Tables/components';
import { LaunchInvoiceModal } from 'pages/Invoices/components/Modals';
import { InvoicesContext } from 'contexts';
import { SiteData } from 'data';

const SelectedItemDetails = (props) => {

	const { selInvoice } = useContext(InvoicesContext);

	const { detailsRowData, rowID } = selInvoice;

	const tableRows = useMemo(() => {

		const data = detailsRowData(props?.invoice);
		const NotSent = () => <em>Invoice not sent</em>;
		const viewInvoice = () => <LaunchInvoiceModal />

		const rowData = [
			{
				label: '',
				test: true,
				content: viewInvoice()
			},
			{
				label: 'Business',
				test: true,
				content: (
					<div className="text-dark">
						<EditTextCell
							editID={props?.editID}
							itemID={props?.invoice?._id}
							otherID={props?.business?._id}
							setEditID={props?.setEditID}
							itemLabel={props?.business?.longName}
							updateSlice={updateBusiness}
							setEditSubmit={props?.setEditSubmit}
							editSubmit={props?.editSubmit}
							selector={props?.selector(props?.business?._id)}
							field="longName"
						/>
					</div>
				)
			},
			props?.invoice?.sentStatus === 'sent' && {
				label: 'Due date',
				test: true,
				content: data?.dueDate
			},
			{
				label: 'Sent status',
				test: true,
				content: props?.invoice?.sentStatus === 'sent'
					? `Invoice Sent on ${data?.dateSent}`
					: <InlineLabelButton
						label="Invoice not sent"
						toolTip={`Mark as "sent"`}
						modalID={SiteData.modalIDs.invoiceSentStat}
						icon={["far", "paper-plane"]}
					/>
			},
			{
				label: 'Payment status',
				test: true,
				content: props?.invoice?.sentStatus === 'sent'
					? <PaymentStatus invoice={props?.invoice} removeLast={props?.removeLast} />
					: <NotSent />
			},
			props?.invoice?.paidStatus !== 'Paid' && {
				label: 'Terms',
				test: true,
				content: props?.invoice?.sentStatus === 'sent'
					? data?.dueDateObj?.label
					: <NotSent />
			},
			{
				label: 'Invoice amount',
				test: true,
				content: <div className="text-dark">{data?.totalAmount}</div>
			},
			{
				label: 'Amount due',
				test: true,
				content: props?.invoice?.sentStatus === 'sent'
					? <div className="text-dark">{data?.amountDue}</div>
					: <NotSent />
			},
			{
				label: 'Customer information',
				test: true,
				content: (
					<>
						<div className="text-dark">{data?.customerName}</div>
						{(data?.customer?.email || data?.customer?.phone || data?.customer?.address) && (
							<div className="mt-2">
								<ProfileInformation owner={data?.customer} />
							</div>
						)}
					</>
				)
			},
			{
				label: 'Items',
				test: true,
				content: <InvoiceItems invoice={props?.invoice} services={props?.services} />
			}
		];
		return rowData.filter(row => row.test && row);
	}, [props, detailsRowData])

	return (
		<SelectedItemRows>
			{tableRows?.length ? tableRows.map((row, idx) => {
				const label = row.label;
				return (
					<TableSingleColRow key={rowID("invoice", label, idx)} label={label}>
						{row?.content}
					</TableSingleColRow>
				)
			}) : null}
		</SelectedItemRows>
	)
}

export default SelectedItemDetails
