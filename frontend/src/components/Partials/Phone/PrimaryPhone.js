import React from 'react';
import { PhoneLink } from 'components/links';
import { Global } from 'globals/js';

const PrimaryPhone = (props) => {
    const phone = props.phones[0] ? props.phones[0].number : '';
    return (
        <PhoneLink
            phone={phone}
            formatted={phone ? Global.formatPhone(phone) : '---'}
            className="link-hover"
        />
    );
};

export default PrimaryPhone;
