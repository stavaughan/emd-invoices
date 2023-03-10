import React from 'react';
import { setSelectContactID } from 'features/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Buttons';
import { useUserID, useMobile } from 'hooks';
import clsx from 'clsx';

const AccountContacts = ({ visibleFn, contacts }) => {

	const navigate = useNavigate();
    const dispatch = useDispatch();
	
	const { isXSmall } = useMobile();
    const { userID } = useUserID();

	return (
        <>
            {contacts?.length ? contacts.map((contact, i) => {

                const selectHandler = (e) => {
					e.preventDefault()
                    dispatch(setSelectContactID({ id: contact._id }))
                    visibleFn('hide-small')
					navigate(`/${userID}/contacts`)
                };

                return (
                    <React.Fragment key={contact._id}>
                        <Button
                            className={clsx(
								isXSmall ? 'btn-sm' : 'btn-md',
								'p-0 text-start link-hover',
							)}
							rest={{ onClick: selectHandler }}
                        >
                            {contact?.fullName}
                        </Button>
                        {i !== contacts.length - 1 ? <br /> : null}
                    </React.Fragment>
                );
            }) : null}
        </>
    );
};

export default AccountContacts;
