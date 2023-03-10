import {
	CurrencyDollarIcon,
	GlobeAltIcon,
	OfficeBuildingIcon,
	ReceiptRefundIcon,
	ShoppingCartIcon,
	UserCircleIcon
} from '@heroicons/react/outline';

const emptyState = {
	title: 'Create Your First Invoice',
	description: `You haven’t created an invoice yet. Create a new invoice after you've added your business, a customer and either a product or service. Click the links below to get started.`,
	buttonLink: '#',
	buttonLabel: 'View a demo business with invoices',
	steps: [
		{
			title: 'Add Your Business',
			description: 'Upload a single business or multiple businesses.',
			icon: OfficeBuildingIcon,
			background: 'bg-pink-500',
			modalID: 'invoiceBusiness'
		},
		{
			title: 'Add a Customer',
			description: 'Add your customers here.',
			icon: UserCircleIcon,
			background: 'bg-yellow-500',
			modalID: 'invoiceCustomer'
		},
		{
			title: 'Add a Service',
			description: 'Add as many services as you wish.',
			icon: GlobeAltIcon,
			background: 'bg-green-500',
			modalID: 'invoiceService'
		},
		{
			title: 'Create a Product',
			description: 'Add your products and their images here',
			icon: ShoppingCartIcon,
			background: 'bg-blue-500',
			modalID: 'invoiceService'
		},
		{
			title: 'Add Payment Provider',
			description: 'Setup a payment service so that you can get paid faster.',
			icon: CurrencyDollarIcon,
			background: 'bg-indigo-500',
			modalID: 'bulkInvoices'
		},
		{
			title: 'Create Invoice',
			description: `Create a new invoice once you've set up your business.`,
			icon: ReceiptRefundIcon,
			background: 'bg-purple-500',
			modalID: 'newInvoice'
		},
	]
}

export default emptyState;