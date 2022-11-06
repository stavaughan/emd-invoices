import React from 'react';
import { ListGroup, LabeledItem } from 'components/Lists';
import { PhoneLink } from 'components/links';
import { Global } from 'globals/js';
import { ClipboardCopyBtn } from 'components/Buttons/Type';

const PhoneFields = (props) => {

    return (
        <ListGroup>
            {props.phones.map(phone => {

                const formPhone = Global.formatPhone(phone.number);

                return (
                    <LabeledItem
                        key={`phone${phone.number}`}
                        label={phone.type}
						length={props.phones.length}
						inline={true}
                    >
                        <PhoneLink
                            phone={phone.number}
                            formatted={formPhone}
                            extension={phone.ext ? ` ext. ${phone.ext}` : ''}
                            className="link-hover"
                        />
                        <span className="ms-2">
                            <ClipboardCopyBtn
                                string={formPhone}
                                item="phone"
                                bottom={true}
                            />
                        </span>
                    </LabeledItem>
                );
            })}
        </ListGroup>
    );
};

export default PhoneFields;
