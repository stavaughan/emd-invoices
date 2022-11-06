import { PriceRows } from '.';
import '../styles/invoice.css';

const InvoiceTableBody = ({ servicesInvoiced, color, hasImage }) => {

    return (
        <tbody>
            {servicesInvoiced?.length ? servicesInvoiced.map((service, idx) => (
                <PriceRows
                    key={`svcRow${service.sID}`}
                    hasImage={hasImage}
					service={service}
					color={color}
                    idx={idx}
                />
            )) : null}
        </tbody>
    );
};

export default InvoiceTableBody;
