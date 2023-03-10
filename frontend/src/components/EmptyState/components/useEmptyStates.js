import { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SiteData } from 'data';

const modalIDs = SiteData.modalIDs;

const useEmptyStates = () => {

	const { services } = useSelector(state => state.invoicedata)
	const { customers } = useSelector(state => state.customers)
	const { businesses } = useSelector(state => state.businesses)

	const defaultMessage = useCallback((label, label2) => {
		return `You will be able to add an ${label} item after you create your first ${label2}.`;
	}, []);

	const completeMessage = useCallback((label) => {
		return `You have successfully created your first ${label}`;
	}, []);

	const businessIncomeCollections = useCallback((id) => {

		const items = [
			{
				_id: `newbusinessip${id}`,
				dataID: 'business',
				complete: businesses?.length > 0,
				title: 'Add Your Business',
				description: 'Upload a single business or multiple businesses',
				background: 'bg-pink-500',
				...!businesses?.length ? {
					modalID: modalIDs.invoiceBusiness,
					active: true
				} : {
					successMessage: completeMessage('business')
				}
			},
			{
				_id: `newcustomerip${id}`,
				dataID: 'customer',
				complete: customers?.length > 0,
				title: 'Add First Customer',
				description: 'Next, Add your first customer',
				background: 'bg-yellow-500',
				...!!businesses?.length && !customers?.length ? {
					modalID: modalIDs.invoiceCustomer,
					active: true
				} : {
					...!!customers?.length ? {
						successMessage: completeMessage('customer')
					} : {
						disabledMessage: defaultMessage('invoice', 'customer')
					}
				}
			},
			{
				_id: `newserviceip${id}`,
				dataID: 'product or service',
				complete: services?.length > 0,
				title: 'Add a Service or Product',
				description: 'Add as many services or products as needed',
				background: 'bg-green-500',
				...(!!businesses?.length && !!customers?.length) ? {
					modalID: modalIDs.invoiceService,
					active: true
				} : {
					disabledMessage: defaultMessage('invoice', 'product or service')
				}
			},
			{
				_id: `newinvoiceip${id}`,
				dataID: 'invoice',
				title: 'Create Invoice',
				description: `Final step - create your first invoice`,
				background: 'bg-purple-500',
				disabledMessage: defaultMessage('invoice', id)
			},
		];
		const firstItem = items.find(item => item.dataID === id);
		const remainingItems = items.filter(item => item.dataID !== id);
		return id === 'invoice' ? items : [firstItem, ...remainingItems];
	}, [businesses, customers, services, defaultMessage, completeMessage]);

	const emptyStates = useMemo(() => ({
		invoices: {
			id: 'startinginvoices',
			title: 'Create Your First Invoice',
			description: `You haven’t created an invoice yet. Create a new invoice after you've added your business, a customer and either a product or service. Click the links below to get started.`,
			buttonLink: '#',
			buttonLabel: 'View a demo business with invoices',
			steps: businessIncomeCollections('invoice')
		},
		businesses: {
			id: 'startingbusinesses',
			title: 'Create Your First Business',
			description: `You haven’t created a business yet. Create a new invoice after you've added your business, a customer and either a product or service. Click the links below to get started.`,
			buttonLink: '#',
			buttonLabel: 'View a demo group of business collections.',
			steps: businessIncomeCollections('business')
		},
		customers: {
			id: 'startingcustomers',
			title: 'Create Your Customer',
			description: `You haven’t created a customer yet. Create a new invoice after you've added your business, a customer and either a product or service. Click the links below to get started.`,
			buttonLink: '#',
			buttonLabel: 'View a demo group of checklist collections.',
			steps: businessIncomeCollections('customer')
		},
		products: {
			id: 'startingproducts',
			title: 'Create Your First Product or Service',
			description: `You haven’t created a product or service yet. Create a new invoice after you've added your business, a customer and either a product or service. Click the links below to get started.`,
			buttonLink: '#',
			buttonLabel: 'View a demo collection of financial accounts',
			steps: businessIncomeCollections('product or service')
		}
	}), [businessIncomeCollections]);

	return { emptyStates };
}

export default useEmptyStates;
