const encryptSchema = {
	cid: '',
	maskedStr: '',
	uid: null
};

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

export const creditCardSchema = {
    nameOnCard: '',
    creditCardNumber: encryptSchema,
    expDate: '',
    cvc: encryptSchema,
	zip: encryptSchema
};

const inputSchemas = {
    contactSchema: {
        name: nameSchema,
        fullName: '',
        address: addressesSchema,
        phones: [],
        email: '',
        avatarID: '',
        group: '',
        role: '',
        userRole: '',
        businessID: null, // for invoices
        businessRole: '',
        organization: '',
        website: '',
        venID: null,
        social: [],
		tags: [],
		notes: '',
    },

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
	}
}

export default inputSchemas
