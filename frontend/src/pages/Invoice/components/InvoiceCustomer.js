import { useContext, useMemo } from 'react';
import { InvoicesContext } from 'contexts';
import { Global } from 'globals/js';
import { AddressBlock } from '.';

import '../styles/invoice.css';

const InvoiceCustomer = ({ customer }) => {

	const { customerBusName } = useContext(InvoicesContext);

	const customerName = useMemo(() => customerBusName(customer), [customer, customerBusName]);

	const customerPhone = useMemo(() => {
		if(!customer?.phone) return '';
		return customer?.phone && Global.formatPhone(customer?.phone)
	}, [customer?.phone])

    return (
        <>
            <div className="text-xs fw-light text-muted pb-1">INVOICE TO</div>
            <h3 className="my-0 pb-2 text-dark ">
                {customerName}
            </h3>
            <div className="text-sm leading-4m">
                {(customer?.address && !!customer?.address?.physical?.street1) && (
                    <AddressBlock address={customer?.address?.physical} />
                )}
                <div className="mb-2">
                    {customer?.email || null}
                </div>
                <div>
                    {customerPhone}
                </div>
            </div>
        </>
    );
};

export default InvoiceCustomer;
