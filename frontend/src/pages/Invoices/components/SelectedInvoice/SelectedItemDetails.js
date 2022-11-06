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

const SelectedItemDetails = ({
	invoice,
	services,
	removeLast,
	business,
	unitLabel,
	printModalID,
	setEditSubmit,
	editSubmit,
	selector,
	setEditID,
	editID
}) => {

	const { detailsRowData, rowID } = useContext(InvoicesContext).selInvoice;

	const tableRows = useMemo(() => {

		const data = detailsRowData(invoice);
		const NotSent = () => <em>Invoice not sent</em>;
		const viewInvoice = () => <LaunchInvoiceModal printModalID={printModalID} />

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
							editID={editID}
							itemID={invoice?._id}
							otherID={business?._id}
							setEditID={setEditID}
							itemLabel={business?.longName}
							updateSlice={updateBusiness}
							setEditSubmit={setEditSubmit}
							editSubmit={editSubmit}
							selector={selector(business?._id)}
							field="longName"
						/>
					</div>
				)
			},
			invoice?.sentStatus === 'sent' && {
				label: 'Due date',
				test: true,
				content: data?.dueDate
			},
			{
				label: 'Sent status',
				test: true,
				content: invoice?.sentStatus === 'sent'
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
				content: invoice?.sentStatus === 'sent'
					? <PaymentStatus invoice={invoice} removeLast={removeLast} />
					: <NotSent />
			},
			invoice?.paidStatus !== 'Paid' && {
				label: 'Terms',
				test: true,
				content: invoice?.sentStatus === 'sent'
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
				content: invoice?.sentStatus === 'sent'
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
				content: <InvoiceItems invoice={invoice} services={services} />
			}
		];

		return rowData.filter(row => row.test && row);
	}, [
		business?.longName,
		invoice,
		printModalID,
		services,
		business?._id,
		removeLast,
		editID,
		editSubmit,
		selector,
		setEditID,
		setEditSubmit,
		detailsRowData
	])

	return (
		<SelectedItemRows>
			{tableRows?.length ? tableRows.map((row, idx) => {
				const label = row.label;
				return (
					<TableSingleColRow key={rowID(unitLabel, label, idx)} label={label}>
						{row?.content}
					</TableSingleColRow>
				)
			}) : null}
		</SelectedItemRows>
	)
}

export default SelectedItemDetails
