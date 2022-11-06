import React from 'react';
import { PortalWrapper } from 'components/Portals';
import clsx from 'clsx';

const Modal = ({
	modalID,
	modalName,
	classes,
	modalShow,
	children,
	staticBackdrop
}) => {

	return (
		<PortalWrapper rootName="overlay-root">
			<div
				id={modalID}
				className={clsx(
					'modal fade',
					modalShow ? 'show' : 'hide'
				)}
				tabIndex="-1"
				role="dialog"
				aria-labelledby={modalName}
				aria-modal={modalShow ? 'true' : 'false'}
				aria-hidden={!modalShow ? 'true' : 'false'}
				style={{ display: modalShow ? 'block' : 'none' }}
				{...staticBackdrop && {
					'data-bs-backdrop': "static",
					'data-bs-keyboard': 'false'
				}}
			>
				<div
					className={clsx(
						'modal-dialog',
						classes?.dialogClass
					)}>
					<div
						className={clsx(
							'modal-content',
							classes?.contentClass
						)}>
						{children}
					</div>
				</div>
			</div>
		</PortalWrapper>
	);
};

export default Modal;
