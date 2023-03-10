export const nameSchema = {
    prefix: '',
    given_name: '',
    mName: '',
    surname: '',
    suffix: '',
    fullName: '',
    title: '',
    department: ''
};

export const addressSchema = {
    type: '',
    addressee: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip_code: '',
    cc: 'USA',
    department: ''
};

export const websiteSchema = {
	type: '',
	url: ''
};

export const addressesSchema = {
    physical: addressSchema,
    sameAsPhysical: true,
    mailing: addressSchema
}

export const phoneSchema = {
    type: '',
    country_code: '001',
    number: '',
    ext: '',
	id: ''
};

const inputSchemas = {
    invoicePayment: {
        date: '',
        dateStr: '',
        amount_paid: null,
        amount_due: null,
        method: '',
        methodNo: ''
    },

    invoiceService: {
        sID: '',
        units: 1,
        amount: null
    },

	invoicesObject: {
		invoices: [],
		services: []
	},

    invoiceSchema: {
        number: '',
        date: '',
        dateCreated: '', // set to 'Date.now()'
        dateSent: null,
        dateDue: '', // need default based on default payment terms and input date
        paymentTerms: '', // need default and enum
        hasImage: false,
        clientID: null, // customer ID
        contrID: null, // businesses ID
        priceType: '', // 'job', 'product'
        taxRate: 0,
        invoicePrice: '',
        sentStatus: 'noSent',
        paidStatus: 'Not Paid',
        payments: [],
        rendered_services: []
    },

    invoicesCustomerSchema: {
        name: nameSchema,
        fullName: nameSchema.fullName,
        address: addressesSchema,
        phone: '',
        email: '',
        avatarID: ''
    },

    invoicesBusinessSchema: {
		longName: '',
		shortName: '',
        address: addressSchema,
        email: '',
        phone: '',
        website: '',
        tax_id: '',
        logoID: '',
		busPfx: ''
    },

    invoicesServiceSchema: {
        _sID: '',
        title: '',
        description: '',
        priceType: '',
        unit_price: '',
        vendor: ''
    },

	userRole: {
		roleID: '',
        role: '',
        note: '',
        permissions: []
	},

	userPermission: {
		pid: '',
        category: '',
        label: '',
        statement: []
	},

	adminSchema: (userID) => ({
		userID,
        action: '', // 'newSignup', 'pageComment'
        priority: 'low', // 'low', 'medium', 'high'
        payload: {}
	})
}

export default inputSchemas
