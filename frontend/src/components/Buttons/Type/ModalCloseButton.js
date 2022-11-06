import React from 'react';
import { Button } from '..';

const ModalCloseButton = ({ handleModalClose, entering, onClose }) => {

    const onClickHandler = () => {
        if(handleModalClose && entering) {
            handleModalClose();
        }
        if(onClose) {
            onClose();
        }
    };

    return (
        <Button
            type="button"
            className="btn-close"
            rest={{
                ...!entering && {
					"data-bs-dismiss": "modal",
					"aria-label": "Close"
				},
                onClick: onClickHandler
            }}
        ></Button>
    )
}

export default ModalCloseButton
