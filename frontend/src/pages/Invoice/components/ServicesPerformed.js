import { useMemo } from 'react';
import { InvoiceTableBody, InvoiceAmounts, InvoiceTableHead } from '.';

import '../styles/invoice.css';

const ServicesPerformed = ({ invoice, color }) => {

    const servicesInvoiced = useMemo(() => invoice.rendered_services, [invoice])

    return (
        <>
            <table
                border="0"
                cellSpacing="0"
                cellPadding="0"
                className="ps-0 ms-0 mb-4"
            >
                <InvoiceTableHead priceType={invoice?.priceType} />
                <InvoiceTableBody
                    servicesInvoiced={servicesInvoiced}
                    hasImage={invoice?.hasImage}
					color={color}
                />
                <InvoiceAmounts
                    servicesInvoiced={servicesInvoiced}
                    taxRate={invoice?.taxRate}
                    payments={invoice?.payments}
					sentStatus={invoice.sentStatus}
					color={color}
                />
            </table>
            {invoice?.payments?.length ? (
                <div className="thanks highlighted">Thank you!</div>
            ) : null}
        </>
    );
};

export default ServicesPerformed;
