import { SiteData } from 'data';
import {
	getInvoiceData,
	updateService,
	createInvoice,
	createService,
	createInvoicesData,
	updateInvoice,
	deleteInvoice,
	deleteService,
	resetInvoiceData
} from 'features/invoices/invoiceDataSlice'
import {
	getBusinesses,
	createBusiness,
	updateBusiness,
	deleteBusiness,
	resetBusinesses
} from 'features/invoices/businessesSlice'
import {
	getCustomers,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	resetCustomers
} from 'features/invoices/customersSlice'
import {
	getContacts,
	createContact,
	updateContact,
	deleteContact,
	resetContacts
} from 'features/contacts/contactsSlice'
import {
	getInvoiceImages,
	resetImages
} from 'features/images/imagesSlice';
import {
	getUsers,
	updateUser,
	deleteUser,
	reset
} from 'features/users/usersSlice';
import {
	getUserRoles,
	createUserRole,
	updateUserRole,
	deleteUserRole,
	resetUserRoles
} from 'features/users/userRolesSlice';
import {
	getUserPermissions,
	createUserPermission,
	updateUserPermission,
	deleteUserPermission,
	resetUserPermissions
} from 'features/users/userPermissionsSlice';
import {
	getSettings,
	resetSettings
} from 'features/settings/settingsSlice';

const { modalIDs } = SiteData;

const sliceData = [
	{
		id: 'invoicedata',
		label: 'invoice',
		dataID: 'invoicedata',
		modalID: modalIDs.bulkInvoices,
		get: getInvoiceData,
		reset: resetInvoiceData,
		schema: 'invoicesObject',
		schemaInvoice: 'invoiceSchema',
		schemaService: 'invoicesServiceSchema',
		create: createInvoicesData,
		createService,
		createInvoice
	},
	{
		id: 'invoices',
		label: 'invoices',
		dataID: 'invoicedata',
		modalID: modalIDs.newInvoice,
		updateModalID: modalIDs.updateInvoice,
		schema: 'invoiceSchema',
		create: createInvoice,
		update: updateInvoice,
		delete: deleteInvoice,
		reset: resetInvoiceData
	},
	{
		id: 'services',
		label: 'service',
		dataID: 'invoicedata',
		modalID: modalIDs.invoiceService,
		updateModalID: modalIDs.updateService,
		schema: 'invoicesServiceSchema',
		create: createService,
		update: updateService,
		delete: deleteService,
		reset: resetInvoiceData
	},
	{
		id: 'businesses',
		label: 'business',
		dataID: 'businesses',
		modalID: modalIDs.invoiceBusiness,
		updateModalID: modalIDs.updateBusiness,
		schema: 'invoicesBusinessSchema',
		get: getBusinesses,
		create: createBusiness,
		update: updateBusiness,
		delete: deleteBusiness,
		reset: resetBusinesses
	},
	{
		id: 'customers',
		label: 'customer',
		dataID: 'customers',
		modalID: modalIDs.invoiceCustomer,
		updateModalID: modalIDs.updateCustomer,
		schema: 'invoicesCustomerSchema',
		get: getCustomers,
		create: createCustomer,
		update: updateCustomer,
		delete: deleteCustomer,
		reset: resetCustomers
	},
	{
		id: 'images',
		schema: '',
		get: getInvoiceImages,
		reset: resetImages
	},
	{
		id: 'contacts',
		label: 'contact',
		dataID: 'contacts',
		modalID: modalIDs.newContact,
		updateModalID: modalIDs.updateContact,
		schema: 'contactSchema',
		get: getContacts,
		create: createContact,
		update: updateContact,
		delete: deleteContact,
		reset: resetContacts
	},
	{
		id: 'users',
		schema: 'user',
		dataID: 'users',
		get: getUsers,
		update: updateUser,
		delete: deleteUser,
		reset: reset
	},
	{
		id: 'userRoles',
		label: 'user role',
		dataID: 'userRoles',
		modalID: modalIDs.newUserRole,
		schema: 'userRole',
		get: getUserRoles,
		create: createUserRole,
		update: updateUserRole,
		delete: deleteUserRole,
		reset: resetUserRoles
	},
	{
		id: 'userPermissions',
		label: 'user permission',
		dataID: 'userPermissions',
		modalID: modalIDs.newUserPermission,
		schema: 'userPermission',
		get: getUserPermissions,
		create: createUserPermission,
		update: updateUserPermission,
		delete: deleteUserPermission,
		reset: resetUserPermissions
	},
	{
		id: 'settings',
		schema: '',
		dataID: 'settings',
		get: getSettings,
		reset: resetSettings
	}
]

export default sliceData
