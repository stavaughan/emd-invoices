const protectedRoutes = [
    {
        path: 'invoices',
        pid: 'invoices',
        roles: ['admin']
    },
    {
        path: 'businesses',
        pid: 'businesses',
        roles: ['admin']
    },
    {
        path: 'customers',
        pid: 'customers',
        roles: ['admin']
    },
    {
        path: 'products',
        pid: 'products',
        roles: ['admin']
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
