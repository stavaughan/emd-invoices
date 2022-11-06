import {
    EditProfile,
    Security,
    SocialProfiles,
    DeleteProfile
} from '.';

const ProfileSections = () => {

    const settingsSections = [
        {
            id: 'editProfile',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Edit Profile',
            description: 'Manage your account profile settings.',
            icon: {
                prefix: 'fas',
                icon: 'user-cog'
            },
            section: EditProfile
        },
        {
            id: 'updateLogin',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Login Settings',
            description: 'Update your email username and account password.',
            icon: {
                prefix: 'fas',
                icon: 'user-shield'
            },
            section: Security
        },
        {
            id: 'socialProfiles',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Social Profiles',
            description: 'Manage your social profile links.',
            icon: {
                prefix: 'far',
                icon: 'share-square'
            },
            section: SocialProfiles
        },
        {
            id: 'deleteProfile',
            display: true,
            access: ['admin', 'read'],
            category: 'User Settings',
            label: 'Delete Profile',
            description: 'Delete or Close your account permanently.',
            icon: {
                prefix: 'fas',
                icon: 'user-minus'
            },
            section: DeleteProfile
        }
    ];

    const sections = [...settingsSections];

    return { sections }
}

export default ProfileSections;
