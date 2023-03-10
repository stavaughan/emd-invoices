import { useMemo } from 'react';
import { useMobile } from 'hooks';
import { SiteData } from 'data';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ inline, icon }) => {

	const { isXSmall } = useMobile();

    const iconObj = useMemo(() => SiteData.socialMedia.find(i => i.id === icon), [icon]);

    return (
        <FAIcon
            icon={['fab', iconObj.icon]}
            color={iconObj.color}
			className={clsx(
				!isXSmall && 'fs-3',
				inline && 'me-3'
			)}
        />
    );
}

export default SocialIcon
