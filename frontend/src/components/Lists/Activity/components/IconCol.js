import { useMemo } from 'react';
import { SiteData } from 'data';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const IconCol = ({ type }) => {

    const icon = useMemo(() => {
		return SiteData.icons.activities.find(item => item.type === type)?.icon;
	}, [type])

    return (
        <div className="col-auto">
            <div className="avatar-sm">
                <div className="avatar-title rounded-circle bg-primary-soft text-primary text-xs">
                    <FAIcon icon={icon} />
                </div>
            </div>
        </div>
    )
}

export default IconCol
