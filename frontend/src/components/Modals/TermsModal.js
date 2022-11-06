import React from 'react'
import { ModalWrapper } from 'components/Modals/components';
import { SiteData } from 'data';

const TermsModal = () => {
	return (
		<ModalWrapper
			modalID={SiteData.modalIDs.loginTerms}
			modalName="Login Terms"
			modalTitle="terms"
			dialogClass="modal-fullscreen"
		>
			Terms Content...
		</ModalWrapper>
	)
}

export default TermsModal
