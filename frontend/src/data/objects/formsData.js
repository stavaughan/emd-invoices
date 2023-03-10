const formsData = {
	contact: {
		phoneTypes: [
			{ id: 'primary', label: 'primary' },
			{ id: 'mobile', label: 'mobile' },
			{ id: 'work', label: 'work' },
			{ id: 'nurse', label: 'nurse' },
			{ id: 'assistant', label: 'assistant' },
			{ id: 'fax', label: 'fax' },
			{ id: 'tollfree', label: 'toll free' },
			{ id: 'secondary', label: 'secondary' },
			{ id: 'other', label: 'other' }
		]
	},
	invoices: {
		priceTypes: [
			{ _id: 'job', label: 'Job' },
			{ _id: 'product', label: 'Product' },
			{ _id: 'recurring', label: 'Recurring' },
			{ _id: 'service', label: 'Service' },
			{ _id: 'time', label: 'Time' }
		],
		paymentTerms: [
			{
				_id: 'net90',
				label: 'Net 90',
				days: 90
			},
			{
				_id: 'net60',
				label: 'Net 60',
				days: 60
			},
			{
				_id: 'net30',
				label: 'Net 30',
				days: 30
			},
			{
				_id: 'net7',
				label: 'Net 7',
				days: 7
			},
			{
				_id: 'onReceipt',
				label: 'Payable on Receipt',
				days: 1
			}
		]
	}
};

export default formsData;
