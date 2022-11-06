import React from 'react'
import { ModalWrapper } from 'components/Modals/components';
import { SiteData } from 'data';

const SecurityModal = () => {
	return (
		<ModalWrapper
			modalID={SiteData.modalIDs.loginSecurity}
			modalName="Login Security"
			modalTitle="security"
			dialogClass="modal-fullscreen"
		>
			Security Safeguards Content...
		</ModalWrapper>
	)
}

export default SecurityModal
