import { HeaderIcons } from 'components/SVGs';

const {
	GroupFolders,
	AddressBook,
	UserFolder,
	MenuIcon,
	SelectedFile
} = HeaderIcons;

const PageObjects = {

	PATHS: [
		{
			_id: "home",
			label: "Home",
			path: '',
			icon: <MenuIcon />,
			page: 'HomePage',
			pageHeader: true,
			pageGroup: 'Home',
			baseTitle: 'Navigation',
			allowedUsers: ['admin', 'read']
		},
		{
			_id: "admin",
			label: "Admin",
			path: 'admin',
			pageHeader: true,
			icon: <UserFolder />,
			page: 'Admin',
			pageGroup: 'Users',
			baseTitle: 'Admin',
			allowedUsers: ['admin']
		},
		{
			_id: "userprofile",
			label: "User Profile",
			path: 'user-profile',
			pageHeader: true,
			icon: <UserFolder />,
			page: 'UserProfile',
			pageGroup: 'Users',
			baseTitle: 'User Profile',
			allowedUsers: ['admin', 'read']
		},
		{
			_id: "usersettings",
			label: "User Settings",
			path: 'user-settings',
			pageHeader: true,
			icon: <UserFolder />,
			page: 'UserSettings',
			pageGroup: 'Users',
			baseTitle: 'User Settings',
			allowedUsers: ['admin', 'read']
		},
		{
			_id: "businesses",
			label: "Businesses",
			unitLabel: "business",
			path: 'businesses',
			pageHeader: true,
			icon: <GroupFolders />,
			iconPath: 'receipt',
			page: 'Businesses',
			pageGroup: 'Business Income',
			baseTitle: 'Businesses you manage',
			allowedUsers: ['admin']
		},
		{
			_id: "customers",
			label: "Customers",
			unitLabel: "customer",
			path: 'customers',
			pageHeader: true,
			icon: <AddressBook />,
			iconPath: 'receipt',
			page: 'Customers',
			pageGroup: 'Business Income',
			baseTitle: 'Your customers',
			allowedUsers: ['admin']
		},
		{
			_id: "products",
			label: "Products",
			unitLabel: "product",
			path: 'products',
			pageHeader: true,
			icon: <SelectedFile />,
			iconPath: 'receipt',
			page: 'Products',
			pageGroup: 'Business Income',
			baseTitle: 'Products and Services',
			allowedUsers: ['admin']
		},
		{
			_id: "invoices",
			label: "Invoices",
			unitLabel: "invoice",
			path: 'invoices',
			pageHeader: true,
			icon: <SelectedFile />,
			iconPath: 'receipt',
			page: 'Invoices',
			pageGroup: 'Business Income',
			baseTitle: 'Invoices',
			allowedUsers: ['admin']
		}
	],

	FILE: (pid) => PageObjects.PATHS.find(_ => _._id === pid),

	groupPages: (group) => PageObjects.PATHS.filter(page => page.pageGroup === group),

	HEADER_NAV: (pid) => PageObjects
		.groupPages(PageObjects.FILE(pid).pageGroup)
		.map(page => ({
			_id: page._id,
			allowedUsers: page?.allowedUsers,
			path: page.path,
			label: page.label,
			active: page._id === pid
		})),

	pageIDs: (group) => Array.from(PageObjects.groupPages(group), ({ _id }) => _id) || [],

	allowedUsers: (pid) => PageObjects.PATHS.find(_ => _._id === pid)?.allowedUsers,

	groupPageIDs: () => PageObjects.PATHS.filter(page => page.pageHeader).map(_ => _._id)
};

export default PageObjects;
