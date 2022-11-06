const SiteData = {
	messages: {
		passwordStrength: "Please enter a valid password containing at least 8 alpha and numerical characters\nwith a combination of upper and lowercase letters.",
		invoice: {
			removeLastPayment: "the original payment will be archived for compliance purposes but will no longer affect your transactional accounting"
		}
	},
    disclosures: {

        statement: 'This information is provided for planning services only and is not intended to represent an official account of the holdings, balances, or transactions made in your account. Please refer to your monthly account statement for the official record of all of your account activities.',

		dataSecurityNotice: (siteName) => `Our servers are protected physically and electronically. Any connection between you and ${siteName} is protected by 256-bit SSL encryption.`,

		disclaimer: (businessName) => `The information contained in this website is for general information purposes only. The information is provided by ${businessName} and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of ${businessName}. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, ${businessName} takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.`,

		termsOfUse: (siteName) => `By using ${siteName}, creating, or accessing your ${siteName} account, including by signing in with a third-party service or partner (such as Google, Yahoo, ADP or RBC), or by otherwise using the Services we offer, you are agreeing to be bound by the Agreement without any modification or qualification. IF YOU ARE DISSATISFIED WITH THE AGREEMENT, OUR RULES, POLICIES, GUIDELINES OR PRACTICES, OR OUR OPERATION OF THE ${siteName.toUpperCase()} WEBSITE OR THE SERVICES, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE ${siteName.toUpperCase()} WEBSITE AND/OR OUR SERVICES, UNLESS ANOTHER REMEDY IS EXPRESSLY SET OUT IN THIS AGREEMENT. If for any reason you are unable to meet all the conditions set forth in this Agreement or if you breach this Agreement, your permission to access or use our Services, any materials downloaded or printed by you, and ${siteName.toUpperCase()} immediately lapses.\n\n
		We offer a number of additional services (collectively, the “Additional Services” each with their own additional terms of service (“Specific Additional Service Terms”) in addition to this Agreement. When you use an Additional Service, you will also be subject to the Specific Additional Service Terms. Note that if this Agreement is inconsistent with the Specific Additional Service Terms, those Specific Additional Service Terms will control.\n\n
		This Agreement, including any applicable Specific Additional Service Terms, is the entire agreement between you and us, and supersede all previous communications, representations, or agreements, either oral or written between you and us with respect to this subject matter.\n\n
		We reserve the right to modify or change the Agreement at any time by posting a new or revised Agreement to the Site. Your use of ${siteName} or the creation or access to your ${siteName} account is subject to the most current Agreement posted on the Site. The most current version of the Agreement can be reviewed by clicking the “Terms of Use” hyperlink at the bottom of our Site. You may not modify or amend this Agreement in whole or in part without the written consent of one of our authorized representatives`,

		privacy: (businessName) => ``,
    },
    modalIDs: {
        displayFile: "displayFile",
        displayImage: "displayImage",
        newContact: "newContact",
		openingBalance: "openingBalance",
        newUser: "newUser",
        bulkSentStatus: "bulkSentStatus",
        bulkInvoicePayments: "bulkInvoicePayments",
        imageUploadCrop: "imageUploadCrop",
        correctInvoicePayment: 'correctInvoicePayment',
        invoicesSubmitted: "invoicesSubmitted",
        invoicePayment: "invoicePayment",
        invoicePrint: "invoicePrint",
        invoiceCustomer: "invoiceCustomer",
        invoiceBusiness: "invoiceBusiness",
		invoiceService: "invoiceService",
        invoiceEdit: "invoiceEdit",
        bulkInvoices: "bulkInvoices",
        newInvoice: "newInvoice",
        invoiceSentStat: "invoiceSentStat",
		loginSecurity: "loginSecurity",
		loginTerms: "loginTerms",
		newUserRole: "newUserRole",
		newUserPermission: "newUserPermission",
    },
    headerModalLinks: [
        {
            modalID: 'bulkInvoices',
            icon: ['far', 'sticky-note'],
            label: 'New invoices...'
        }
    ],
    footerLinks: [
        {
            _id: 'newcustomerfooter',
            path: 'customers',
            label: 'customers'
        },
        {
            _id: 'newbusinessfooter',
            path: 'businesses',
            label: 'businesses'
        },
        {
            _id: 'newservicefooter',
            path: 'products',
            label: 'products'
        },
        {
            _id: 'newinvoicefooter',
            path: 'invoices',
            label: 'invoices'
        }
    ],
    permissionDescription: 'Only provide for designated person or family member, trusted accountant or attorney.',
    editMessages: {
        onEdit: 'Make your changes now',
        onChange: "Click 'Save update' to save changes",
        onDelete: "Are you sure you want to delete this item?",
        onSave:`Saving changes...`,
        onCancel: 'Canceling...'
    },
    pageGroupsContent: [
        {
            _id: 'Business Income',
            title: 'Business Income',
            icon: 'bank',
            description: 'Manage all of your businesses invoices, payments, products, offered services and customers.',
        }
    ],
    userAccess: [
        {
            _id: 'admin',
            label: 'Admin',
            crud: [
                'create',
                'read',
                'update',
                'delete'
            ]
        },
        {
            _id: 'read',
            label: 'Read Only',
            crud: [
                'Read'
            ]
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
    users: {
        roles: [
            'NONE',
            'ADMIN',
            'READ_ONLY',
            'LIMITED'
        ]
    },
    siteDDLabels: [
        {
            _id: 'invoices',
            label: 'Business Income'
        }
    ],
    pageLayout: [
        {
            _id: "invoices",
            type: "listing",
            section: {
                allItems: {
                    tableCollumns: [
                        {
                            id: 'Sent',
                            width: ''
                        },
                        {
                            id: 'Number'
                        },
                        {
                            id: 'Customer',
                            width: 'd-none d-sm-table-cell'
                        },
                        {
                            id: 'Total',
                            width: "text-end pe-3"
                        },
                        {
                            id: 'Due',
                            width: 'd-none d-md-table-cell text-end pe-3'
                        },
                        {
                            id: 'Status',
                            width: 'd-none d-xxl-table-cell'
                        },
                        {
                            id: 'Created',
                            width: 'd-none d-xxl-table-cell'
                        },
                        {
                            id: 'Due Date'
                        },
                        {
                            id: 'action',
                            width: 'text-center pe-4'
                        }
                    ]
                },
                selectedItem: {}
            }
        }
    ],
    dropDownLabels: {
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
        }
    },
    forms: {
        contact: {
            phoneTypes: [
                { id: 'primary', label: 'primary' },
				{ id: 'mobile', label: 'mobile' },
                { id: 'work', label: 'work' },
				{ id: 'assistant', label: 'assistant' },
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
    },
    icons: {
        transactions: {
            transfer: "exchange-alt",
            expense: "money-bill-wave",
            payment: "money-check",
            healthcare: "stethoscope",
            pharmacy: "prescription",
            doctor: "user-md",
            balance: "balance-scale",
            legal: "file-contract",
            fuel: "gas-pump",
            store: "cash-register",
            taxes: "hand-holding-usd",
            caretaker: "hands-helping",
            interest: "percent",
            income: "funnel-dollar",
            insuranceHome: "house-damage",
            insuranceAuto: "car-crash",
            automotive: "car",
            groceries: "shopping-cart",
            apartment: "building",
            userDiscount: "user-tag",
            movies: "film",
            houseHold: "home",
            advertisement: "comment-dollar",
            bank: "university",
            moving: 'truck-moving',
            storage: "boxes",
            energy: "burn",
            electricity: "bolt",
            phone: "phone-square-alt",
            users: "users"
        },
        social: [
            {
                id: 'facebook',
                name: 'Facebook',
                color: "#4267B2",
                lib: 'fab',
                icon: 'facebook',
                baseLink: "https://www.facebook.com/"
            },
            {
                id: 'linkedin',
                name: 'LinkedIn',
                color: "#0077b5",
                lib: 'fab',
                icon: 'linkedin',
                baseLink: "https://www.linkedin.com/in/"
            },
            {
                id: 'twitter',
                name: 'Twitter',
                color: "#1DA1F2",
                lib: 'fab',
                icon: 'twitter',
                baseLink: "https://twitter.com/"
            },
            {
                id: 'google',
                name: 'Google',
                color: "#DB4437",
                lib: 'fab',
                icon: 'google',
                baseLink: "https://google.com/"
            },
            {
                id: 'github',
                name: 'GitHub',
                color: "#333",
                lib: 'fab',
                icon: 'github',
                baseLink: "https://github.com/"
            },
            {
                id: 'instagram',
                name: 'Instagram',
                color: "#c9510c",
                lib: 'fab',
                icon: 'instagram-square',
                baseLink: "https://www.instagram.com/"
            },
            {
                id: 'pinterest',
                name: 'Pinterest',
                color: "#E60023",
                lib: 'fab',
                icon: 'pinterest-square',
                baseLink: "https://www.pinterest.com/"
            }
        ],
        alerts: [
            {
                type: 'error',
                lib: 'fas',
                icon: 'exclamation-triangle',
                className: 'danger'
            },
            {
                type: 'warning',
                lib: 'fas',
                icon: 'exclamation-triangle',
                className: 'warning'
            },
            {
                type: 'notice',
                lib: 'fas',
                icon: 'exclamation-circle',
                className: 'info'
            },
            {
                type: 'check',
                lib: 'fas',
                icon: 'check-circle',
                className: 'primary'
            },
            {
                type: 'success',
                lib: 'fas',
                icon: 'check-circle',
                className: 'success'
            },
            {
                type: 'alert',
                lib: 'far',
                icon: 'bell',
                className: 'primary'
            },
            {
                type: 'info',
                lib: 'fas',
                icon: 'info-circle',
                className: 'info'
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
        ]
    },
    socialMedia: [
        {
            id: 'facebook',
            name: 'Facebook',
            color: "#4267B2",
            lib: 'fab',
            icon: 'facebook',
            baseLink: "https://www.facebook.com/",
			prob: 0.7
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            color: "#0077b5",
            lib: 'fab',
            icon: 'linkedin',
            baseLink: "https://www.linkedin.com/in/",
			prob: 0.7
        },
        {
            id: 'twitter',
            name: 'Twitter',
            color: "#1DA1F2",
            lib: 'fab',
            icon: 'twitter',
            baseLink: "https://twitter.com/",
			prob: 0.5
        },
        {
            id: 'google',
            name: 'Google',
            color: "#DB4437",
            lib: 'fab',
            icon: 'google',
            baseLink: "https://google.com/",
			prob: 0.1
        },
        {
            id: 'github',
            name: 'GitHub',
            color: "#333",
            lib: 'fab',
            icon: 'github',
            baseLink: "https://github.com/",
			prob: 0.3
        },
        {
            id: 'instagram',
            name: 'Instagram',
            color: "#E1306C",
            lib: 'fab',
            icon: 'instagram-square',
            baseLink: "https://www.instagram.com/",
			prob: 0.4
        },
        {
            id: 'pinterest',
            name: 'Pinterest',
            color: "#E60023",
            lib: 'fab',
            icon: 'pinterest-square',
            baseLink: "https://www.pinterest.com/",
			prob: 0.2
        }
    ],
    userSettings:  {
		display: 'displayProfile',
		profileDisplay: {
			public: {
				defaultValue: true,
				dbKey: 'settings.notifications.allowPublicProfile',
			}
		},
        profileOptions: [
            {
                _id: 'Public',
                label: 'Public',
				checkedState: false,
				dbKey: 'settings.notifications.allowPublicProfile'
            },
            {
                _id: 'Private',
                label: 'Private',
				checkedState: true,
				dbKey: 'settings.notifications.allowPublicProfile'
            }
        ],
        notifications: {
            security: {
                _id: 'noteSecurity',
                title: 'Security',
                description: 'You will only receive security alerts for selected items.',
                settings: [
                    {
                        _id: "toggle1",
                        label: "Email me whenever we encounter unusual activity",
                        checkedState: false,
						dbKey: 'settings.notifications.unusualActivity',
						media: 'email'
                    },
                    {
                        _id: "toggle2",
                        label: "Email me if new browser is used to sign in",
                        checkedState: false,
						dbKey: 'settings.notifications.differentIPsignIn',
						media: 'email'
                    }
                ]
            },
            news: {
                _id: 'noteActivity',
                title: 'Activity',
                description: 'You will only receive activity notices for selected items.',
                settings: [
                    {
                        _id: "toggle4",
                        label: "Email me about new features and updates",
                        checkedState: false,
						dbPath: 'settings.notifications.newFeaturesUpdates',
						media: 'email'
                    },
                    {
                        _id: "toggle5",
                        label: "Notify me when I have a new email message",
                        checkedState: false,
						dbPath: 'settings.notifications.newEmailMessages',
						media: 'message'
                    }
                ]
            },
            privacy: {
				_id: 'notePrivacy',
                title: 'Privacy Settings',
                description: 'Customize your application settings and control what others can see',
                settings: [
                    {
                        _id: "toggle6",
                        checkedState: false,
						label: "Allow other users to see when I'm logged in",
						dbKey: 'privacy.notifications.allowOnlineStatus'
                    },
                    {
                        _id: "toggle7",
						label: "Allow updating of profile online.",
						checkedState: true,
						dbKey: 'privacy.notifications.allowProfileOnlineUpdate'
                    }
                ]
            },
        }
    },
    USStates: [
        {
            "label": "Alabama",
            "id": "AL"
        },
        {
            "label": "Alaska",
            "id": "AK"
        },
        {
            "label": "American Samoa",
            "id": "AS"
        },
        {
            "label": "Arizona",
            "id": "AZ"
        },
        {
            "label": "Arkansas",
            "id": "AR"
        },
        {
            "label": "California",
            "id": "CA"
        },
        {
            "label": "Colorado",
            "id": "CO"
        },
        {
            "label": "Connecticut",
            "id": "CT"
        },
        {
            "label": "Delaware",
            "id": "DE"
        },
        {
            "label": "District Of Columbia",
            "id": "DC"
        },
        {
            "label": "Federated States Of Micronesia",
            "id": "FM"
        },
        {
            "label": "Florida",
            "id": "FL"
        },
        {
            "label": "Georgia",
            "id": "GA"
        },
        {
            "label": "Guam",
            "id": "GU"
        },
        {
            "label": "Hawaii",
            "id": "HI"
        },
        {
            "label": "Idaho",
            "id": "ID"
        },
        {
            "label": "Illinois",
            "id": "IL"
        },
        {
            "label": "Indiana",
            "id": "IN"
        },
        {
            "label": "Iowa",
            "id": "IA"
        },
        {
            "label": "Kansas",
            "id": "KS"
        },
        {
            "label": "Kentucky",
            "id": "KY"
        },
        {
            "label": "Louisiana",
            "id": "LA"
        },
        {
            "label": "Maine",
            "id": "ME"
        },
        {
            "label": "Marshall Islands",
            "id": "MH"
        },
        {
            "label": "Maryland",
            "id": "MD"
        },
        {
            "label": "Massachusetts",
            "id": "MA"
        },
        {
            "label": "Michigan",
            "id": "MI"
        },
        {
            "label": "Minnesota",
            "id": "MN"
        },
        {
            "label": "Mississippi",
            "id": "MS"
        },
        {
            "label": "Missouri",
            "id": "MO"
        },
        {
            "label": "Montana",
            "id": "MT"
        },
        {
            "label": "Nebraska",
            "id": "NE"
        },
        {
            "label": "Nevada",
            "id": "NV"
        },
        {
            "label": "New Hampshire",
            "id": "NH"
        },
        {
            "label": "New Jersey",
            "id": "NJ"
        },
        {
            "label": "New Mexico",
            "id": "NM"
        },
        {
            "label": "New York",
            "id": "NY"
        },
        {
            "label": "North Carolina",
            "id": "NC"
        },
        {
            "label": "North Dakota",
            "id": "ND"
        },
        {
            "label": "Northern Mariana Islands",
            "id": "MP"
        },
        {
            "label": "Ohio",
            "id": "OH"
        },
        {
            "label": "Oklahoma",
            "id": "OK"
        },
        {
            "label": "Oregon",
            "id": "OR"
        },
        {
            "label": "Palau",
            "id": "PW"
        },
        {
            "label": "Pennsylvania",
            "id": "PA"
        },
        {
            "label": "Puerto Rico",
            "id": "PR"
        },
        {
            "label": "Rhode Island",
            "id": "RI"
        },
        {
            "label": "South Carolina",
            "id": "SC"
        },
        {
            "label": "South Dakota",
            "id": "SD"
        },
        {
            "label": "Tennessee",
            "id": "TN"
        },
        {
            "label": "Texas",
            "id": "TX"
        },
        {
            "label": "Utah",
            "id": "UT"
        },
        {
            "label": "Vermont",
            "id": "VT"
        },
        {
            "label": "Virgin Islands",
            "id": "VI"
        },
        {
            "label": "Virginia",
            "id": "VA"
        },
        {
            "label": "Washington",
            "id": "WA"
        },
        {
            "label": "West Virginia",
            "id": "WV"
        },
        {
            "label": "Wisconsin",
            "id": "WI"
        },
        {
            "label": "Wyoming",
            "id": "WY"
        }
    ],
	personalProperty: ['collectibles', 'firearms', 'furniture', 'china',
	'dinnerware', 'cookingware', 'crystal', 'electronics', 'footwear', 'jewelry', 'clothing',
	'art', 'rugs', 'books', 'tools', 'cds']
};

export default SiteData;
