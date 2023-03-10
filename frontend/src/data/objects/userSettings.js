const userSettings = {
	display: 'displayProfile',
	profileDisplay: {
		public: {
			defaultValue: true,
			dbKey: 'settings.notifications.allowPublicProfile',
		}
	},
	profileOptions: [
		{
			_id: 'Public',
			label: 'Public',
			checkedState: false,
			dbKey: 'settings.notifications.allowPublicProfile'
		},
		{
			_id: 'Private',
			label: 'Private',
			checkedState: true,
			dbKey: 'settings.notifications.allowPublicProfile'
		}
	],
	notifications: {
		security: {
			_id: 'noteSecurity',
			title: 'Security',
			description: 'You will only receive security alerts for selected items.',
			settings: [
				{
					_id: "toggle1",
					label: "Email me whenever we encounter unusual activity",
					checkedState: false,
					dbKey: 'settings.notifications.unusualActivity',
					media: 'email'
				},
				{
					_id: "toggle2",
					label: "Email me if new browser is used to sign in",
					checkedState: false,
					dbKey: 'settings.notifications.differentIPsignIn',
					media: 'email'
				}
			]
		},
		news: {
			_id: 'noteActivity',
			title: 'Activity',
			description: 'You will only receive activity notices for selected items.',
			settings: [
				{
					_id: "toggle4",
					label: "Email me about new features and updates",
					checkedState: false,
					dbPath: 'settings.notifications.newFeaturesUpdates',
					media: 'email'
				},
				{
					_id: "toggle5",
					label: "Notify me when I have a new email message",
					checkedState: false,
					dbPath: 'settings.notifications.newEmailMessages',
					media: 'message'
				}
			]
		},
		privacy: {
			_id: 'notePrivacy',
			title: 'Privacy Settings',
			description: 'Customize your application settings and control what others can see',
			settings: [
				{
					_id: "toggle6",
					checkedState: false,
					label: "Allow other users to see when I'm logged in",
					dbKey: 'privacy.notifications.allowOnlineStatus'
				},
				{
					_id: "toggle7",
					label: "Allow updating of profile online.",
					checkedState: true,
					dbKey: 'privacy.notifications.allowProfileOnlineUpdate'
				}
			]
		},
	}
};

export default userSettings;
