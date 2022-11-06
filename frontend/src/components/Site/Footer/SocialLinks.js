import React, { useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { controlProps } from 'globals/js'
import { SiteData } from 'data'

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {

	const { settings } = useSelector(state => state.settings)

	const socialProfiles = useMemo(() => {
		const socialObj = (media) => {
			const mediaBase = SiteData.socialMedia.find(_ => _.id === media.media);
			return {
				_id: media.media,
				name: mediaBase.name,
				link: mediaBase?.baseLink + media.profileName
			}
		};
		const siteSocialMedia = settings?.social?.filter(_ => _.profileName);
		return siteSocialMedia?.length ? siteSocialMedia.map(media => socialObj(media)) : [];
	}, [settings]);

	const sIcon = useCallback((id) => {
		return SiteData.icons?.social.find(icon => icon.id === id);
	}, []);

    return (
        <div className="d-flex justify-content-center gap-3 py-3">
            {socialProfiles?.length ? socialProfiles.map((media) => (
                <a
                    key={media._id}
                    className="text-gray-300-hover"
					{...controlProps.newTab(media.link)}
					role="button"
                >
                    <span className="sr-only">{media.name}</span>
					<FaIcon icon={['fab', sIcon(media._id)?.icon]} />
                </a>
            )) : null}
        </div>
    )
}

export default SocialLinks
