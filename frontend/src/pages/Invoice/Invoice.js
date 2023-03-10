import {
	UpdateBusinessLogo,
	InvoiceContact,
	ServicesPerformed,
	AddressBlock,
	useCompileInvoice
} from './components';
import { Row, Col } from 'components/HTML';

import './styles/invoice.css';

const Invoice = ({ invoice, printRef }) => {

	const res = useCompileInvoice(invoice);

	return (
		<div
			ref={printRef}
			className="invoice border border-light position-relative"
		>
			<header
				className="py-4"
				style={{ borderBottom: `1px solid ${res?.brandColor}` }}
			>
				{res?.paidStamp && (
					<span
						className="stamp position-absolute"
						style={{
							color: res?.brandColor,
							borderColor: res?.brandColor,
							opacity: '.7'
						}}
					>
						PAID
					</span>
				)}
				<Row>
					<Col className="d-flex align-items-center py-3">
						<UpdateBusinessLogo
							business={res?.business}
							displayWidth="100"
							height="auto"
						/>
					</Col>
					<Col className="company-details">
						<div className="d-flex flex-column align-items-end gap-1">
							<h1
								className="name mb-1"
								style={{ color: res?.brandColor }}
							>
								{res?.business?.longName}
							</h1>
							<div className="d-flex flex-column align-items-end text-sm">
								<AddressBlock
									address={res?.business?.address}
									className="text-end"
								/>
								{res?.business?.email && <div className="">{res?.business.email}</div>}
								{res?.businessPhone && <div>{res?.businessPhone}</div>}
							</div>
						</div>
					</Col>
				</Row>
			</header>
			<main>
				<InvoiceContact
					invoice={invoice}
					customer={res?.customer}
					color={res?.brandColor}
					customerName={res?.customerName}
					dates={res?.dates}
				/>
				<ServicesPerformed
					invoice={invoice}
					color={res?.brandColor}
					amounts={res?.amounts}
				/>
			</main>
			<div className="invoice-footer position-absolute"></div>
		</div>
	)
}

export default Invoice
