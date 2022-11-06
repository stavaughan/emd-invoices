import React from 'react'
import { SecurityModal, TermsModal } from '.';
import { SiteData } from 'data';

const LoginModals = () => {

    const { modalIDs } = SiteData;

    return (
        <>
            <SecurityModal modalID={modalIDs.loginSecurity} />
            <TermsModal modalID={modalIDs.loginTerms} />
        </>
    )
}

export default LoginModals