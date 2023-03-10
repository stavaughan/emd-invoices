import Contact from '../models/app/contactModel.js'
import Customer from '../models/invoices/customerModel.js'
import Business from '../models/invoices/businessModel.js'
import Invoice from '../models/invoices/invoiceModel.js'
import Service from '../models/invoices/serviceModel.js'
import User from '../models/app/userModel.js'
import Settings from '../models/app/settingsModel.js'
import Admin from '../models/app/adminModel.js'
import UserRoles from '../models/app/userRolesModel.js'
import UserPermissions from '../models/app/userPermissionsModel.js'
import Esec from '../models/app/esecModel.js'

const api = [
    {
        endpoint: 'app-settings',
        test: 'siteName',
        Model: Settings
    },
    {
        endpoint: 'contacts',
        test: 'fullName',
        Model: Contact
    },
    {
        endpoint: 'users',
        test: 'email',
        Model: User
    },
    {
        endpoint: 'businesses',
        test: 'email',
        Model: Business
    },
    {
        endpoint: 'customers',
        test: 'email',
        Model: Customer
    },
    {
        endpoint: 'invoices',
        test: 'number',
        Model: Invoice
    },
    {
        endpoint: 'invoices/many',
        test: 'number',
        Model: Invoice
    },
    {
        endpoint: 'services',
        test: '_sID',
        Model: Service
    },
    {
        endpoint: 'admin-store',
        test: 'action',
        Model: Admin
    },
    {
        endpoint: 'user-roles',
        test: 'roleID',
        Model: UserRoles
    },
    {
        endpoint: 'user-permissions',
        test: 'pid',
        Model: UserPermissions
    },
    {
        endpoint: 'esec',
        test: 'dataString',
        Model: Esec
    }
]

export default api
