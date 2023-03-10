import { Modal } from 'components/Modals';
import { ModalHeader } from 'components/Modals/components';

const ModalFormWrapper = ({
	modalID,
	modalTitle,
	entering,
	labelID,
	classes,
	onClose,
	footerContent,
	handleModalClose,
	modalRef,
	children
}) => {

	return (
		<Modal
			modalID={modalID}
			modalName={modalTitle}
			classes={classes}
			staticBackdrop={true}
			modalRef={modalRef}
		>
			<ModalHeader
				labelID={labelID}
				modalTitle={modalTitle}
				handleModalClose={handleModalClose}
				onClose={onClose}
				entering={entering}
			/>
			<div className="modal-body">
				{children}
			</div>
			{footerContent && (
				<div className="modal-footer">
					{footerContent}
				</div>
			)}
		</Modal>
	);
};

export default ModalFormWrapper;
