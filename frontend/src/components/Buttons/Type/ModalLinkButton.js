import { ToolTip } from 'components/ToolTip';
import { ModalButton } from 'components/Buttons';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ModalLinkButton = ({ handleClick, tooltip, label, modalID, icon }) => {

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

    return (
        <ToolTip tip={tooltip} span>
            <ModalButton
                className={clsx(smallText, "link-hover py-0")}
                modalID={modalID}
                rest={{ onClick: handleClick }}
            >
                {!isXSmall ? label : <FAIcon icon={icon} />}
            </ModalButton>
        </ToolTip>
    )
}

export default ModalLinkButton
