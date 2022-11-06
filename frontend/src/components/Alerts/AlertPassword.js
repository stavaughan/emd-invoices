import React from 'react';
import { AlertBanner } from 'components/Alerts';
import { SiteData } from 'data';

const AlertPassword = ({ className }) => {

    return (
		<AlertBanner className={className}>
			{SiteData.messages.passwordStrength}
		</AlertBanner>
	);
};

export default AlertPassword;
