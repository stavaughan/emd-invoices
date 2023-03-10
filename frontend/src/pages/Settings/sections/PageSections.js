import { Notifications, Privacy } from '.';

const PageSections = () => {

    const settingsSections = [
        {
            id: 'notifications',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Notifications',
            description: 'Select the types of notifications you prefer to receive',
            icon: {
                prefix: 'far',
                icon: 'bell'
            },
            section: Notifications
        },
        {
            id: 'profilePrivacy',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Profile Settings',
            description: 'Manage your profile and privacy settings here',
            icon: {
                prefix: 'fas',
                icon: 'user-secret'
            },
            section: Privacy
        },
        // {
        //     id: 'userSiteSettings',
        //     display: true,
        //     access: ['admin', 'read'],
        //     category: 'User Settings',
        //     label: 'Site Settings',
        //     description: 'Manage theme and other site settings here',
        //     icon: {
        //         prefix: 'fas',
        //         icon: 'cog'
        //     },
        //     section: Privacy
        // }
    ];

    const sections = [...settingsSections];

    return { sections }
}

export default PageSections;
