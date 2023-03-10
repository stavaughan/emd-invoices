const dropDownLabels = {
	siteDDLabels: [
		{
			_id: 'financials',
			label: 'Financials'
		},
		{
			_id: 'accounting',
			label: 'Accounting'
		},
		{
			_id: 'invoices',
			label: 'Business Income'
		},
		{
			_id: 'records',
			label: 'Records'
		},
		{
			_id: 'resources',
			label: 'Resources'
		}
	],
	userDDdata: [
		{
			pid: 'admin',
			path: 'admin',
			icon: 'user-cog',
			label: 'Admin',
			access: 'admin'
		},
		{
			pid: 'usersettings',
			path: 'user-settings',
			icon: 'cog',
			label: 'Settings',
			access: 'read'
		},
		{
			pid: 'userprofile',
			path: 'user-profile',
			icon: 'user',
			label: 'User Profile',
			access: 'read'
		}
	],
	invoicesPage: {
		listSection: [
			{
				id: 'addNewInvoice',
				link: '#',
				label: 'add new invoice'
			},
			{
				id: 'filterInvoices',
				link: '#',
				label: 'filter invoices'
			}
		],
		selectSection: [
			{
				id: 'editInvoice',
				link: '#',
				label: 'Edit invoice'
			},
			{
				id: 'deleteInvoice',
				link: '#',
				label: 'Delete invoice'
			}
		]
	},
	contactsPage: {
		listSection: [
			{
				id: 'addNewContact',
				link: '#',
				label: 'add new contact'
			},
			{
				id: 'filterContacts',
				link: '#',
				label: 'filter contacts'
			}
		],
		selectSection: [
			{
				id: 'editContact',
				link: '#',
				label: 'Edit contact'
			},
			{
				id: 'deleteContact',
				link: '#',
				label: 'Delete contact'
			}
		]
	},
	accountsPage: {
		listSection: [
			{
				id: 'addNewAccount',
				link: '#',
				label: 'add new account'
			},
			{
				id: 'filterAccounts',
				link: '#',
				label: 'filter accounts'
			}
		],
		selectSection: [
			{
				id: 'editAccount',
				link: '#',
				label: 'edit account'
			},
			{
				id: 'deleteAccount',
				link: '#',
				label: 'delete account'
			}
		]
	},
	documentsPage: {
		item: [
			{
				id: 'downloadPdf',
				link: '#',
				color: 'text-pdf',
				icon: 'file-pdf',
				label: "Download"
			},
			{
				id: 'deleteDocument',
				link: '#',
				color: 'text-gray-400',
				icon: ['far', 'trash-alt'],
				label: "Remove"
			}
		]
	},
	vendorsPage: {
		listSection: [
			{
				id: 'addNewVendor',
				link: '#',
				label: 'add new vendor'
			},
			{
				id: 'filterVendors',
				link: '#',
				label: 'filter vendors'
			}
		],
		selectSection: [
			{
				id: 'editVendor',
				link: '#',
				label: 'edit vendor'
			},
			{
				id: 'deleteVendor',
				link: '#',
				label: 'delete vendor'
			}
		]
	},
	transactions: [
		{
			_id: 'expense',
			label: 'Expense',
			icon: 'money-bill-wave',
			roots: ['6000'],
			catID: '6000',
			subCatIDs: []
		},
		{
			_id: 'transfer',
			label: 'Funds Transfer',
			useLabel: true,
			icon: "exchange-alt",
			roots: ['1000'],
			catID: '1000',
			subCatIDs: ['1100', '1200']
		},
		{
			_id: 'income',
			label: 'Income',
			icon: 'funnel-dollar',
			roots: ['4000'],
			catID: '4000',
			subCatIDs: []
		},
		{
			_id: 'payment',
			label: 'Credit Card Payment',
			useLabel: true,
			icon: "payment",
			roots: ['2000'],
			catID: '2000',
			subCatIDs: ['2100']
		},
		{
			_id: 'deposit',
			label: 'Cash Deposit',
			icon: 'income',
			roots: ['1000'],
			subCatIDs: ['1100', '1200']
		},
		{
			_id: 'withdrawal',
			label: 'Cash Withdrawal',
			icon: 'expense',
			roots: ['1000'],
			subCatIDs: ['1100', '1200']
		},
		{
			_id: 'opening',
			label: 'Opening Balance',
			icon: 'balance'
		}
	]
};

export default dropDownLabels;
