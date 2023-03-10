const inputSelectorValues = [
	{
		id: 'accounts',
		initCheckedState: {
			accountName: false,
			accountHolder: false,
			accountNumber2: false,
			routingNumber: false,
			creditCard: false,
			primaryOwner: false,
			secondaryOwner: false,
			notes: false
		},
		selectorfields: [
			['accountName', 'Account Name'],
			['accountHolder', 'Account Holder'],
			['accountNumber2', 'Account Number'],
			['routingNumber', 'Routing Number'],
			['creditCard', 'Credit Card'],
			['primaryOwner', 'Primary Owner'],
			['secondaryOwner', 'Secondary Owner'],
			['notes', 'Notes'],
		],
	},
	{
		id: 'contacts',
		initCheckedState: {
			name: false,
			email: false,
			website: false,
			phones: false,
			venID: false,
			address: false,
			organization: false,
			role: false,
			group: false,
			notes: false
		},
		selectorfields: [
			['name', 'Contact Name'],
			['email', 'Contact Email'],
			['website', 'Contact Website'],
			['phones', 'Contact Phones'],
			['venID', 'Contact Vendor'],
			['address', 'Contact Addresses'],
			['organization', 'Contact Business'],
			['role', 'Contact Role'],
			['group', 'Contact Group'],
			['notes', 'Notes'],
		],
	},
	{
		id: 'vendors',
		initCheckedState: {
			name: false,
			expenses: false,
			addresses: false,
			websites: false,
			notes: false
		},
		selectorfields: [
			['name', 'Vendor Name'],
			['expenses', 'Vendor Expense or Income Categories'],
			['addresses', 'Vendor Addresses'],
			['websites', 'Vendor Websites'],
			['notes', 'Notes'],
		],
	}
];

export default inputSelectorValues;
