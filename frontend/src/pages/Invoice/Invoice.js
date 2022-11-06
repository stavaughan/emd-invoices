import { useMemo, useContext } from 'react';
import { UpdateBusinessLogo, InvoiceContact, ServicesPerformed, AddressBlock } from './components';
import { InvoicesContext } from 'contexts';
import { useSelector } from 'react-redux';
import { Row, Col } from 'components/HTML';
import { Global } from 'globals/js';

import './styles/invoice.css';

const Invoice = ({ invoice }) => {

	const { displayStamp } = useContext(InvoicesContext);

	const { businesses } = useSelector(state => state.businesses);

	const business = useMemo(() => {
		return businesses?.length ? businesses.find(_ => _._id === invoice?.contrID) : {};
	}, [businesses, invoice?.contrID])

	const paidStamp = useMemo(() => displayStamp(invoice), [invoice, displayStamp])

	const brandColor = business?.brandColor;

	const businessPhone = useMemo(() => {
		return business?.phone && Global.formatPhone(business?.phone)
	}, [business?.phone])

	return (
		<div className="invoice border border-light position-relative">
			<header
				className="py-4"
				style={{ borderBottom: `1px solid ${brandColor}` }}
			>
				{paidStamp && (
					<span
						className="stamp position-absolute"
						style={{
							color: brandColor,
							borderColor: brandColor,
							opacity: '.7'
						}}
					>PAID</span>
				)}
				<Row>
					<Col className="d-flex align-items-center py-3">
						<UpdateBusinessLogo
							business={business}
							displayWidth="100"
							height="auto"
						/>
					</Col>
					<Col className="company-details text-end">
						<h1 className="name mb-1" style={{ color: brandColor }}>{business?.longName}</h1>
						<div className="text-sm leading-4m">
							<AddressBlock address={business?.address} />
							{business?.email && <div className="mb-2">{business.email}</div>}
							{businessPhone && <div>{businessPhone}</div>}
						</div>
					</Col>
				</Row>
			</header>
			<main>
				<InvoiceContact
					invoice={invoice}
					color={brandColor}
				/>
				<ServicesPerformed
					invoice={invoice}
					color={brandColor}
				/>
			</main>
			<div className="invoice-footer position-absolute"></div>
		</div>
	)
}

export default Invoice
