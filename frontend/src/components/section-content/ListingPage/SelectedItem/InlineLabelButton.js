import { Button } from 'components/Buttons';
import { InfoAlert } from 'components/Alerts';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'

const InlineLabelButton = ({
	label,
	toolTip,
	modalID,
	onClick,
	icon
}) => {

	const { smallText } = useContext(SettingsContext).fontSize;

	return (
		<Button
			className={clsx(smallText, "link-hover p-0")}
			rest={{
				...modalID && {
					"data-bs-toggle": "modal",
					"data-bs-target": `#${modalID}`
				},
				...onClick && { onClick }
			}}
			modalID={modalID}
		>
			<FAIcon icon={icon} className="me-2" />
			<span className="me-2">{label}</span>
			<InfoAlert
				message={toolTip}
				marginLeft="-5.3em"
				minWidth="8rem"
			/>
		</Button>
	)
}

export default InlineLabelButton
