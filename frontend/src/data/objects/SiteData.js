import {
	SiteDisclosures,
	SiteDocumentation,
	defaultCategories,
	pageGroupsContent,
	dropDownLabels,
	socialMedia,
	userSettings,
	SiteModalIDs,
	siteMessages,
	pageLayouts,
	formsData,
	USStates
} from '.';

const SiteData = {
	messages: siteMessages,
	disclosures: SiteDisclosures,
	documentation: SiteDocumentation,
	modalIDs: SiteModalIDs,
	headerLinks: [
		{
			modalID: 'newUserActivityModal',
			icon: ['far', 'sticky-note'],
			label: 'New activity...'
		}
	],
	footerLinks: [
		{
			_id: 'customers',
			path: 'customers',
			label: 'Customers',
			user: true
		},
		{
			_id: 'invoices',
			path: 'invoices',
			label: 'Invoices',
			user: true
		},
		{
			_id: 'products',
			path: 'products',
			label: 'Products',
			user: true
		},
		{
			_id: 'terms',
			path: 'legal/terms-of-use',
			label: 'Terms of Use'
		},
		{
			_id: 'privacy',
			path: 'legal/privacy-policy',
			label: 'Privacy Policy'
		}
	],
	pageGroupsContent,
	defaultCategories,
	pageLayouts,
	dropDownLabels,
	forms: formsData,
	icons: {
		social: [
			{
				id: 'facebook',
				name: 'Facebook',
				color: "#4267B2",
				lib: 'fab',
				icon: 'facebook',
				basePath: "facebook.com/",
				baseLink: "https://www.facebook.com/"
			},
			{
				id: 'linkedin',
				name: 'LinkedIn',
				color: "#0077b5",
				lib: 'fab',
				icon: 'linkedin',
				basePath: "linkedin.com/in/",
				baseLink: "https://www.linkedin.com/in/"
			},
			{
				id: 'twitter',
				name: 'Twitter',
				color: "#1DA1F2",
				lib: 'fab',
				icon: 'twitter',
				basePath: "twitter.com/",
				baseLink: "https://twitter.com/"
			},
			{
				id: 'google',
				name: 'Google',
				color: "#DB4437",
				lib: 'fab',
				icon: 'google',
				basePath: "google.com/",
				baseLink: "https://google.com/"
			},
			{
				id: 'github',
				name: 'GitHub',
				color: "#333",
				lib: 'fab',
				icon: 'github',
				basePath: "github.com/",
				baseLink: "https://github.com/"
			},
			{
				id: 'instagram',
				name: 'Instagram',
				color: "#c9510c",
				lib: 'fab',
				icon: 'instagram-square',
				basePath: "instagram.com/",
				baseLink: "https://www.instagram.com/"
			},
			{
				id: 'pinterest',
				name: 'Pinterest',
				color: "#E60023",
				lib: 'fab',
				icon: 'pinterest-square',
				basePath: "pinterest.com/",
				baseLink: "https://www.pinterest.com/"
			}
		],
		activities: [
			{
				type: 'call',
				icon: 'phone-volume'
			},
			{
				type: 'email',
				icon: 'at'
			},
			{
				type: 'document',
				icon: ['far', 'file-alt']
			},
			{
				type: 'mailed',
				icon: 'envelope'
			},
			{
				type: 'payment',
				icon: 'credit-card'
			},
			{
				type: 'doctorVisit',
				icon: 'stethoscope'
			},
			{
				type: 'prescriptions',
				icon: 'prescription'
			},
			{
				type: 'transaction',
				icon: 'cash-register'
			},
			{
				type: 'project',
				icon: 'project-diagram'
			},
			{
				type: 'meeting',
				icon: 'users'
			},
			{
				type: 'alert',
				icon: 'exclamation-triangle'
			},
			{
				type: 'info',
				icon: 'info'
			},
			{
				type: 'idea',
				icon: 'lightbulb'
			}
		],
		// financialAccounts: [
		// 	{
		// 		icon: 'university',
		// 		types: ['brokerage', 'trust checking']
		// 	},
		// 	{
		// 		icon: 'piggy-bank',
		// 		types: ['checking', 'savings']
		// 	},
		// 	{
		// 		icon: 'credit-card',
		// 		types: ['credit card']
		// 	},
		// 	{
		// 		icon: 'wallet',
		// 		types: ['cash']
		// 	}
		// ]
	},
	maritalStatus: [
		{
			id: 'single',
			label: 'Single'
		},
		{
			id: 'married',
			label: 'Married'
		},
		{
			id: 'divorced',
			label: 'Divorced'
		},
		{
			id: 'widowed',
			label: 'Widowed'
		}
	],
	socialMedia,
	userSettings,
	USStates,
	personalProperty: [
		'collectibles',
		'firearms',
		'furniture',
		'china',
		'dinnerware',
		'cookingware',
		'glassware',
		'flatware',
		'holloware',
		'linens',
		'paintings',
		'photographs',
		'porcelain',
		'silverware',
		'watches',
		'crystal',
		'electronics',
		'footwear',
		'jewelry',
		'clothing',
		'furs',
		'handbags',
		'leathergoods',
		'luggage',
		'tools',
		'antiques',
		'art',
		'rugs',
		'books',
		'cds'
	]
};

export default SiteData;
