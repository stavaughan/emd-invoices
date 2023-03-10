const pageLayouts = [
	{
		_id: "accounts",
		type: "listing",
		section: {
			allItems: {
				tableCollumns: [
					{
						id: 'id',
					},
					{
						id: 'name'
					},
					{
						id: 'owner'
					},
					{
						id: 'category'
					},
					{
						id: 'action',
						width: "text-center pe-4"
					}
				]
			},
			selectedItem: {}
		}
	},
	{
		_id: "vendors",
		type: "listing",
		section: {
			allItems: {
				tableCollumns: [
					{
						id: 'id',
					},
					{
						id: 'itemid'
					},
					{
						id: 'name'
					},
					{
						id: 'action',
						width: "text-center pe-4"
					}
				]
			},
			selectedItem: {}
		}
	},
	{
		_id: "contacts",
		type: "listing",
		section: {
			allItems: {
				tableCollumns: [
					{
						id: 'id',
					},
					{
						id: 'name'
					},
					{
						id: 'company'
					},
					{
						id: 'phone'
					},
					{
						id: 'email'
					},
					{
						id: 'action',
						width: "text-center pe-4"
					}
				]
			},
			selectedItem: {}
		}
	},
	{
		_id: "bankAccounts",
		type: "listing",
		section: {
			allItems: {
				tableCollumns: [
					{
						id: 'id',
					},
					{
						id: 'name',
					},
					{
						id: 'number',
					},
					{
						id: 'owner'
					},
					{
						id: 'balance',
						width: 'text-end pe-2'
					},
					{
						id: 'date',
						width: 'ps-3'
					},
					{
						id: 'notes',
						width: 'ps-3'
					},
					{
						id: 'action',
						width: "text-center pe-4"
					}
				]
			},
			selectedItem: {}
		}
	},
	{
		_id: "invoices",
		type: "listing",
		section: {
			allItems: {
				tableCollumns: [
					{
						id: 'Sent',
						width: 'text-center'
					},
					{
						id: 'Number'
					},
					{
						id: 'Customer'
					},
					{
						id: 'Total',
						width: "text-end"
					},
					{
						id: 'Due',
						width: 'text-end'
					},
					{
						id: 'Status',
					},
					{
						id: 'Created',
					},
					{
						id: 'Due Date'
					},
					{
						id: 'action',
						width: 'text-center'
					}
				]
			},
			selectedItem: {}
		}
	}
];

export default pageLayouts;
