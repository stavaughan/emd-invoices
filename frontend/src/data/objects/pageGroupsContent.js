const pageGroupsContent = [
	{
		_id: 'Records',
		title: 'Accounts, Contacts, Vendors and Documents',
		icon: 'database',
		description0: 'There is no duplication of data along with unnecessary complexity with your records sharing relational integration between one another. You can easily find and update your records with the click of a button.'
	},
	{
		_id: 'Financials',
		title: 'Financial Planning and Analysis',
		icon: 'chart-line',
		description: 'Monitor spending, income and asset performance over time'
	},
	{
		_id: 'Accounting',
		title: 'Account Statements and Records',
		icon: 'balance-scale',
		description: 'Prepare account statements for planning, governance and tax preparation.'
	},
	{
		_id: 'Resources',
		title: 'Resource Libraries',
		icon: 'book-reader',
		description: 'Organized access to saved online resources, calculators and tools',
		resourceTypes: [
			{ _id: 'article', label: 'Article' },
			{ _id: 'webpage', label: 'Webpage' },
			{ _id: 'app', label: 'Application' },
			{ _id: 'book', label: 'Book' }
		]
	},
	{
		_id: 'Business Income',
		title: 'Business Income',
		icon: 'bank',
		description: 'Manage all of your businesses invoices, payments, products, offered services and customers.',
	}
];

export default pageGroupsContent;
