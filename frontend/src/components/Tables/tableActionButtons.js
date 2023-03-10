const tableActionButtons = {
    invoices: {
        cps: ({ sortBy, setSortBy, printRef, group }) => {
			const groupBtn = group ? {
				_id: 'invoicesGroup',
				type: 'modal',
				icon: 'layer-group',
				modalID: 'invoicesGroup',
				toolTip: 'Display invoice group'
			} : null;
            const btns = [
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
            ];
			return groupBtn !== null ? [groupBtn, ...btns] : btns;
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
    },
    products: ({ printRef, setPrinting }) => ([
        {
            _id: 'newItem',
            type: 'modal',
            icon: 'plus',
            modalID: "invoiceService",
            toolTip: 'Add a product or service item'
        },
		{
			_id: 'updateproduct',
			type: 'modal',
			icon: 'pen-to-square',
			modalID: 'updateService',
			toolTip: 'Update product or service item'
		},
        {
            _id: 'print',
            type: 'print',
            printRef,
			setPrinting,
            toolTip: 'print table'
        },
        {
            _id: 'uploadImage',
            type: 'modal',
            icon: 'crop-simple',
            modalID: 'imageUploadCrop',
            toolTip: 'Image upload, crop and resize'
        }
    ]),
    customers: ({ printRef, setPrinting }) => ([
        {
            _id: 'newItem',
            type: 'modal',
            icon: 'plus',
            modalID: "invoiceCustomer",
            toolTip: 'Add a new customer'
        },
		{
			_id: 'updatecustomer',
			type: 'modal',
			icon: 'pen-to-square',
			modalID: 'updateCustomer',
			toolTip: 'Update customer'
		},
        {
            _id: 'print',
            type: 'print',
            printRef,
			setPrinting,
            toolTip: 'print customer table'
        },
        {
            _id: 'uploadImage',
            type: 'modal',
            icon: 'crop-simple',
            modalID: 'imageUploadCrop',
            toolTip: 'Image upload, crop and resize'
        }
    ]),
    businesses: ({ printRef, setPrinting }) => ([
        {
            _id: 'newItem',
            type: 'modal',
            icon: 'plus',
            modalID: "invoiceBusiness",
            toolTip: 'Add a new customer'
        },
		{
			_id: 'updatebusiness',
			type: 'modal',
			icon: 'pen-to-square',
			modalID: 'updateBusiness',
			toolTip: 'Update business'
		},
        {
            _id: 'print',
            type: 'print',
            printRef,
			setPrinting,
            toolTip: 'print customer table'
        },
        {
            _id: 'uploadImage',
            type: 'modal',
            icon: 'crop-simple',
            modalID: 'imageUploadCrop',
            toolTip: 'Image upload, crop and resize'
        }
    ])
};

export default tableActionButtons;
