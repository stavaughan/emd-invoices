import React from 'react'
import { SentStatusForm, BulkSentStatus } from '../Forms';
import { AddBulkPaymentModal, AddPaymentModal, InvoicePrintModal } from '.';
import { SiteData } from 'data';

const UpdateModals = () => {

    const { modalIDs } = SiteData;

    return (
        <>
            <SentStatusForm modalID={modalIDs.invoiceSentStat} />
            <AddBulkPaymentModal modalID={modalIDs.bulkInvoicePayments} />
            <InvoicePrintModal modalID={modalIDs.invoicePrint} />
            <AddPaymentModal modalID={modalIDs.invoicePayment} />
            <BulkSentStatus modalID={modalIDs.bulkSentStatus} />
        </>
    )
}

export default UpdateModals
