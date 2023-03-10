import React from 'react';
import { ModalCloseButton } from 'components/Buttons';

const ModalHeader = ({
	handleModalClose,
	entering,
	modalTitle,
	onClose,
	labelID
}) => {

    return (
        <div className="modal-header">
            <div className="text-normal font-medium text-muted" id={labelID}>
                {modalTitle}
            </div>
            <ModalCloseButton
                handleModalClose={handleModalClose}
                entering={entering}
                onClose={onClose}
            />
        </div>
    );
};

export default ModalHeader;
