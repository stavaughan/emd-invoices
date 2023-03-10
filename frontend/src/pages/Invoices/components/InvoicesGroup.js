import React from 'react'
import { PriceRows, InvoiceTableHead } from 'pages/Invoice/components';
import { useCompileGroup } from '.';

const InvoicesGroup = ({ invoices, invoice, printRef }) => {

	const { business, header } = useCompileGroup(invoices, invoice);

	return (
		<div
			ref={printRef}
			className="invoice border border-light position-relative"
		>
			<main>
				<div className="pb-3">
					<h4 className="my-3 text-secondary">{header.title}</h4>
					<p className="text-muted leading-4">
						{header.subtitle}
					</p>
				</div>
				<table>
					<InvoiceTableHead priceType={invoice?.priceType} />
					<tbody>
						{invoices?.map((invoice) => {
							const servicesInvoiced = invoice.rendered_services
							return (
								<React.Fragment key={invoice._id}>
									{servicesInvoiced?.length ? servicesInvoiced.map((service, idx) => (
										<PriceRows
											key={`svcRow${service.sID}`}
											hasImage={invoice?.hasImage}
											service={service}
											color={business?.brandColor}
											idx={idx}
										/>
									)) : null}
								</React.Fragment>
							)
						})}
					</tbody>
				</table>
			</main>
		</div>
	)
}

export default InvoicesGroup
