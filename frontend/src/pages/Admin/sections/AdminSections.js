import {
	InviteNewUser,
	RolesPermissions,
	ManageUsers
} from '.';

const AdminSections = () => {

    const userManagement = [
        {
            id: 'manageUsers',
            display: true,
            access: ['admin'],
            category: 'User Management',
            label: 'Manage Users',
            description: 'Approve, update and remove site users.',
            icon: {
                prefix: 'fas',
                icon: 'users-cog'
            },
            section: ManageUsers
        },
        {
            id: 'inviteuser',
            display: true,
            access: ['admin'],
            category: 'User Management',
            label: 'Invite New User',
            description: 'You can invite a new user to access your account. Only give access to people you trust, since users can see your transactions and other business information.',
            icon: {
                prefix: 'fas',
                icon: 'user-plus'
            },
            section: InviteNewUser
        },
        {
            id: 'rolespermissions',
            display: true,
            access: ['admin'],
            category: 'User Management',
            label: 'User Roles',
            description: 'Site user role descriptions and permissions available for each role.',
            icon: {
                prefix: 'fas',
                icon: 'key'
            },
            section: RolesPermissions
        }
    ];

    const sections = [
        ...userManagement
    ];

    return { sections }
};

export default AdminSections;
