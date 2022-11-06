import { useMemo } from 'react'
import { InvoiceCustomer, InvoiceDateNumber } from '.';
import { useSelector } from 'react-redux';
import { Row, Col } from 'components/HTML';

import '../styles/invoice.css';

const InvoiceContact = ({ invoice, color }) => {

    const { customers } = useSelector(state => state.customers)
    const customer = useMemo(() => {
        return customers?.length ? customers.find(_ => _._id === invoice?.clientID) : {};
    }, [customers, invoice?.clientID])

    return (
        <Row className="pb-4 gap-3">
            <Col className="text-start">
                <InvoiceCustomer customer={customer} />
            </Col>
            <Col className="text-end">
                <InvoiceDateNumber
                    invoice={invoice}
					color={color}
                />
            </Col>
        </Row>
    );
};

export default InvoiceContact;
