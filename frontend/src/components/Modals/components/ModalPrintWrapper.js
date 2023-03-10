import { ModalHeader } from '.';
import { Modal } from '..';

const ModalPrintWrapper = ({
	modalID,
	modalName,
	modalTitle,
	handleModalClose,
	children
}) => {

	return (
        <Modal
            modalID={modalID}
            modalName={modalName}
            classes={{
                dialogClass: "modal-fullscreen-sm-down modal-lg"
            }}
        >
            <ModalHeader
                handleModalClose={handleModalClose}
                labelID={`${modalID}Label`}
                modalTitle={modalTitle}
            />
            <div className="modal-body">
                {children}
            </div>
        </Modal>
    )
}

export default ModalPrintWrapper
