const defaultCategories = {
	accounts: [
		{
			_id: 'realEstate',
			label: 'Real Estate',
			subCategories: [
				{
					_id: 'propertyManagement',
					label: 'Property Management'
				}
			]
		},
		{
			_id: 'legal',
			label: 'Legal',
			subCategories: [
				{
					_id: 'attorneys',
					label: 'Attorneys'
				},
				{
					_id: 'documents',
					label: 'Documents'
				}
			]
		},
		{
			_id: 'healthcare',
			label: 'Health Care',
			subCategories: [
				{
					_id: 'prescriptions',
					label: 'Presciptions'
				},
				{
					_id: 'doctors',
					label: 'Doctors'
				},
				{
					_id: 'hospital',
					label: 'Hospital'
				},
				{
					_id: 'providerNetwork',
					label: 'Provider Network'
				}
			]
		},
		{
			_id: 'utilities',
			label: 'Utilities',
			subCategories: [
				{
					_id: 'cable',
					label: 'Cable'
				},
				{
					_id: 'phone',
					label: 'Phone'
				},
				{
					_id: 'internet',
					label: 'Internet'
				},
				{
					_id: 'electricity',
					label: 'Electricity'
				},
				{
					_id: 'gas',
					label: 'Gas'
				},
				{
					_id: 'water',
					label: 'Water'
				}
			]
		},
		{
			_id: 'financial',
			label: 'Financial',
			subCategories: [
				{
					_id: 'bank',
					label: 'Bank',
					types: [
						{
							_id: 'checking',
							label: 'Checking'
						},
						{
							_id: 'trustChecking',
							label: 'Trust Checking'
						},
						{
							_id: 'savings',
							label: 'Savings'
						}
					]
				},
				{
					_id: 'investments',
					label: 'Brokerage'
				},
				{
					_id: 'creditCards',
					label: 'Credit Cards'
				},
				{
					_id: 'lending',
					label: 'Lending'
				},
				{
					_id: 'mortgage',
					label: 'Mortgage'
				}
			]
		},
		{
			_id: 'email',
			label: 'Email Account'
		},
		{
			_id: 'taxes',
			label: 'Taxes',
			subCategories: [
				{
					_id: 'property',
					label: 'Property'
				},
				{
					_id: 'income',
					label: 'Income Tax'
				},
				{
					_id: 'state',
					label: 'State Sales Tax'
				}
			]
		},
		{
			_id: 'membership',
			label: 'Memberships',
			subCategories: [
				{
					_id: 'shopping',
					label: 'Shopping'
				},
				{
					_id: 'merchant',
					label: 'Merchant'
				},
				{
					_id: 'clubs',
					label: 'Clubs'
				},
				{
					_id: 'specialty',
					label: 'Specialty'
				},
				{
					_id: 'business',
					label: 'Business'
				}
			]
		},
		{
			_id: 'elderCare',
			label: 'Elder Care',
			subCategories: [
				{
					_id: 'caretaker',
					label: 'Care Taker'
				},
				{
					_id: 'elderLiving',
					label: 'Elder Living'
				}
			]
		},
		{
			_id: 'insurance',
			label: 'Insurance',
			subCategories: [
				{
					_id: 'health',
					label: 'Health'
				},
				{
					_id: 'auto',
					label: 'Auto'
				},
				{
					_id: 'property',
					label: 'Property'
				},
				{
					_id: 'umbrella',
					label: 'Umbrella'
				},
				{
					_id: 'business',
					label: 'Business'
				}
			]
		},
		{
			_id: 'retirement',
			label: 'Retirement',
			subCategories: [
				{
					_id: 'pension',
					label: 'Pension'
				},
				{
					_id: 'benefits',
					label: 'Benefits'
				}
			]
		},
		{
			_id: 'donations',
			label: 'Donations'
		}
	],
	resources: {}
};

export default defaultCategories;
