import { ModalCloseButton } from 'components/Buttons';
import { alertIcons } from './components';
import { Modal } from 'components/Modals';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AlertModal = (props) => {

    const {
        modalID,
        modalName,
        modalTitle,
        modalShow,
        iconClass,
        message,
        onClose,
        type
    } = props;

	const AlertIcon = () => {
		const icon = alertIcons.find(_ => _._id === type).iClass;
		if(!icon) return <></>;
		return <FAIcon icon={icon} className={clsx('me-3', iconClass)} />;
	}

    return (
            <Modal
                modalID={modalID}
                modalName={modalName}
                modalShow={modalShow}
                classes={{
                    dialogClass: "modal-dialog-centered",
                    contentClass: `border-none alert-${type} bg-${type}-soft shadow-lg`
                }}
            >
                <div className="modal-header border-0">
                    {modalTitle && (
                        <div className="modal-title">
							<AlertIcon />
                            {modalTitle}
                        </div>
                    )}
                    {onClose && <ModalCloseButton onClose={onClose} />}
                </div>
                {message && (
                    <div className="modal-body">
						<AlertIcon />
                        {message}
                    </div>
                )}
            </Modal>
    );
};

export default AlertModal;
