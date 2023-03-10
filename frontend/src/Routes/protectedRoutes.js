const protectedRoutes = [
	{
		path: 'invoices',
		pid: 'invoices',
		roles: ['admin', 'read']
	},
	{
		path: 'businesses',
		pid: 'businesses',
		roles: ['admin', 'read']
	},
	{
		path: 'customers',
		pid: 'customers',
		roles: ['admin', 'read']
	},
	{
		path: 'products',
		pid: 'products',
		roles: ['admin', 'read']
	},
	{
		path: 'admin',
		pid: 'admin',
		roles: ['admin']
	},
	{
		path: 'user-profile',
		pid: 'userprofile',
		roles: ['admin', 'read']
	},
	{
		path: 'user-settings',
		pid: 'usersettings',
		roles: ['admin', 'read']
	}
];

export default protectedRoutes;
