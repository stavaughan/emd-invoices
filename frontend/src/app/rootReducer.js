// Users and authentication
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';
import userRolesReducer from '../features/users/userRolesSlice';
import userPermissionsReducer from '../features/users/userPermissionsSlice';
import contactsReducer from '../features/contacts/contactsSlice';

import settingsReducer from '../features/settings/settingsSlice';

// Invoices
import imagesReducer from '../features/images/imagesSlice';
import businessesReducer from '../features/invoices/businessesSlice';
import customersReducer from '../features/invoices/customersSlice';
import invoiceDataReducer from '../features/invoices/invoiceDataSlice';

const rootReducer = {
    auth: authReducer,
    users: usersReducer,
	userRoles: userRolesReducer,
	contacts: contactsReducer,
	userPermissions: userPermissionsReducer,
    settings: settingsReducer,
    invoicedata: invoiceDataReducer,
    customers: customersReducer,
    businesses: businessesReducer,
    images: imagesReducer
}

export default rootReducer
