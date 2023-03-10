import React from 'react'
import { SiteData } from 'data';
import { FooterLink } from '.';

const FooterLinks = ({ userID }) => {

    const footerLinks = SiteData.footerLinks;

    return (
        <nav
            className="mx-n4 my-n2 d-flex flex-wrap justify-content-center"
            aria-label="footer"
        >
            {userID ? footerLinks.map(link => (
                <FooterLink
                    key={link._id}
                    link={link}
                    userID={userID}
                />
            )) : null}
        </nav>
    )
}

export default FooterLinks
