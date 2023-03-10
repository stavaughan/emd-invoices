import { InvoiceTableBody, InvoiceAmounts, InvoiceTableHead } from '.';

import '../styles/invoice.css';

const ServicesPerformed = (props) => {

    return (
        <>
            <table
                border="0"
                cellSpacing="0"
                cellPadding="0"
                className="ps-0 ms-0 mb-4"
            >
                <InvoiceTableHead priceType={props?.invoice?.priceType} />
                <InvoiceTableBody
                    servicesInvoiced={props?.invoice?.rendered_services}
                    hasImage={props?.invoice?.hasImage}
					color={props?.color}
                />
                <InvoiceAmounts
                    taxRate={props?.invoice?.taxRate}
                    payments={props?.invoice?.payments}
					amounts={props?.amounts}
					color={props?.color}
                />
            </table>
            {props?.invoice?.payments?.length ? (
                <div className="thanks highlighted">Thank you!</div>
            ) : null}
        </>
    );
};

export default ServicesPerformed;
