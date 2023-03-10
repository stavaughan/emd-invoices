import React from 'react';
import { RippleButton } from '..';
import { controlProps } from 'globals/js';

const PrimaryPillButton = ({ handleAction, modalID, children }) => {

    return (
        <RippleButton
            className="btn-primary-ripple rounded-pill"
            handleClick={handleAction}
            {...modalID && { modalProps: controlProps.modalOpen(modalID) }}
			children={children}
		/>
    );
};

export default PrimaryPillButton
