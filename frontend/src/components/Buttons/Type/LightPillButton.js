import React from 'react';
import { RippleButton } from '..';
import { controlProps } from 'globals/js';

const LightPillButton = ({ handleAction, modalID, children }) => {

    return (
        <RippleButton
            className="btn-primary-light-ripple rounded-pill"
            handleClick={handleAction}
            {...modalID && {
				modalProps: controlProps.modalOpen(modalID)
			}}
			children={children}
        />
    );
};

export default LightPillButton;
