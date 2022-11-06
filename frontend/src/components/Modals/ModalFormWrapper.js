import React from 'react';
import { Modal } from '.';
import { ModalHeader } from './components';

const ModalFormWrapper = (props) => {

	const {
		modalID,
		modalTitle,
		entering,
		labelID,
		classes,
		modalClose,
		footerContent,
		handleModalClose
	} = props;

	return (
		<Modal
			modalID={modalID}
			modalName={modalTitle}
			classes={classes}
			staticBackdrop={true}
		>
			<ModalHeader
				labelID={labelID}
				modalTitle={modalTitle}
				handleModalClose={handleModalClose}
				modalClose={modalClose}
				entering={entering}
			/>
			<div className="modal-body">
				{props.children}
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
