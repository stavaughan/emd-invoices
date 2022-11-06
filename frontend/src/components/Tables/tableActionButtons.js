const tableActionButtons = {
    invoices: {
        cps: ({ sortBy, setSortBy, printRef }) => {
            return [
                {
                    _id: 'newItem',
                    type: 'modal',
                    icon: 'file-invoice',
                    modalID: 'newInvoice',
                    toolTip: 'Create an Invoice'
                },
                {
                    _id: 'newItems',
                    type: 'modal',
                    icon: 'cash-register',
                    modalID: 'bulkInvoices',
                    toolTip: 'Create invoices in bulk'
                },
                {
                    _id: 'newCustomer',
                    type: 'modal',
                    icon: 'user-plus',
                    modalID: 'invoiceCustomer',
                    toolTip: 'Add new customer'
                },
                {
                    _id: 'newBusiness',
                    type: 'modal',
                    icon: 'store',
                    modalID: 'invoiceBusiness',
                    toolTip: 'Add new business'
                },
                {
                    _id: 'newService',
                    type: 'modal',
                    icon: 'bag-shopping',
                    modalID: 'invoiceService',
                    toolTip: 'Add product or service'
                },
                {
                    _id: 'bulkPayments',
                    type: 'modal',
                    icon: 'money-bill-1-wave',
                    modalID: 'bulkInvoicePayments',
                    toolTip: 'Record Bulk Payments'
                },
                {
                    _id: 'bulkSentStatus',
                    type: 'modal',
                    icon: 'envelope-circle-check',
                    modalID: 'bulkSentStatus',
                    toolTip: 'Mark Invoices as Sent'
                },
                {
                    _id: 'print',
                    type: 'print',
                    printRef,
                    toolTip: 'Invoices'
                },
                {
                    _id: 'rsort',
                    type: 'rsort',
                    sortBy,
                    setSortBy,
                    toolTip: 'Invoices'
                }
            ]
        },
        pe: ({ onEdit, printRef, editOn }) => {
            return [
                {
                    _id: 'print',
                    type: 'print',
                    printRef,
                    toolTip: 'invoice information'
                },
                {
                    _id: 'invoice',
                    type: 'click',
                    icon: editOn ? 'times' : 'edit',
                    onClick: onEdit,
                    toolTip: editOn ? 'Cancel edit' : 'Edit invoice'
                }
            ]
        }
    }
};

export default tableActionButtons;
