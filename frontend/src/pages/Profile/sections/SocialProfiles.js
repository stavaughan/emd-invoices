import React, { useState, useMemo, useCallback } from 'react';
import { SocialProfile } from 'pages/Profile/components';
import { useSelector } from 'react-redux';
import { SiteData } from 'data';
import { useItemUpdate } from 'hooks';
import { UserLoading } from '../components';

const SocialProfiles = () => {

	const socialMedia = SiteData.socialMedia;

	const { setID, setReqBody, loading, setReady } = useItemUpdate('contacts')

	const { contacts } = useSelector(state => state.contacts)
	const { contactID } = useSelector(state => state.auth).user

	const social = useMemo(() => {
		const contact = contacts.find(_ => _._id === contactID)
		return contact?.social || {}
	}, [contacts, contactID]);

	const profileName = useCallback((id) => {
		return (social?.length && social.find(_ => _.media === id)?.profileName) || ''
	}, [social]);

	const initState = useMemo(() => {
		return socialMedia.map(media => ({
			media: media?.id,
			profileName: profileName(media.id),
			name: media.name,
            color: media.color,
            lib: media.lib,
            icon: media.icon,
            baseLink: media.baseLink
		}))
	}, [socialMedia, profileName])

	const [profiles, setProfiles] = useState(initState);
	const [action, setAction] = useState({ type: '', id: '' })

	const onDelete = (id) => {
		const updatedProfiles = [...profiles].filter(_ => _.media !== id)
		setProfiles(prev => updatedProfiles);
		setReqBody({ social: updatedProfiles })
		setID(contactID)
		setReady(true)
	};

	const onUpdate = () => {
		setReqBody({ social: profiles.filter(_ => _.profileName) })
		setID(contactID)
		setReady(true)
	};

	return (
		<UserLoading>
			<form>
				{profiles.map((profile, idx) => (
					<SocialProfile
						key={profile.media}
						idx={idx}
						last={profiles.length - 1}
						profile={profile}
						userSocial={social}
						setProfiles={setProfiles}
						profiles={profiles}
						action={action}
						setAction={setAction}
						loading={loading}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				))}
			</form>
		</UserLoading>
	)
}

export default SocialProfiles
