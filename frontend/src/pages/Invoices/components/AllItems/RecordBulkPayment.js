import { useMemo } from 'react';
import { IconButton } from 'components/Buttons/Type';
import { SiteData } from 'data';

const RecordBulkPayment = ({ itemsData, margin }) => {

    const invoices = useMemo(() => {
        return itemsData.filter(invoice => invoice?.paidStatus !== 'Paid');
    }, [itemsData])

    return (
        <>
            {invoices?.length ? (
                <IconButton
                    icon="tags"
                    mode="light"
                    modalID={SiteData.modalIDs.bulkInvoicePayments}
					margin={margin}
                />
            ) : null}
        </>
    )
}

export default RecordBulkPayment
