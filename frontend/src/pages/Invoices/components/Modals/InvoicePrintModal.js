import { useMemo } from 'react';
import { ModalPrintWrapper } from 'components/Modals/components';
import { AlertBanner } from 'components/Alerts';
import { PrintableInvoice } from 'pages/Invoice';
import { useSelector } from 'react-redux';

const InvoicePrintModal = ({ modalID }) => {

    const { filteredInvoices, selectedID } = useSelector(state => state.invoicedata)

    const invoice = useMemo(() => {
        if(!filteredInvoices?.length) {
            return {}
        }
        return selectedID ? filteredInvoices.find(_ => _._id === selectedID) : filteredInvoices[0]
    }, [filteredInvoices, selectedID])

    return (
        <ModalPrintWrapper
            modalID={modalID}
            modalName={modalID}
            modalTitle={`Invoice# ${invoice?.number || ''}`}
        >
            {invoice?._id ? (
                <PrintableInvoice invoice={invoice} />
            ) : (
                <AlertBanner>
					No invoice found with the provided invoice number...
				</AlertBanner>
            )}
        </ModalPrintWrapper>
    )
}

export default InvoicePrintModal
