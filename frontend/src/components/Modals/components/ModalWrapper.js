import React from 'react';
import { ModalHeader } from '.';
import { Modal } from '..';
import clsx from 'clsx';
import '../styles/Modal.css';

const ModalWrapper = ({
	modalID,
	modalName,
	modalTitle,
	contentClass,
	dialogClass,
	children
}) => {

    return (
        <Modal
            modalID={modalID}
            modalName={modalName}
            classes={{
                contentClass,
                dialogClass: clsx(dialogClass, 'bg-transparent')
            }}
        >
            <ModalHeader
                modalTitle={modalTitle}
                labelID={`${modalID}Label`}
            />
            <div className="modal-body">
                {children}
            </div>
        </Modal>
    )
};

export default ModalWrapper;
