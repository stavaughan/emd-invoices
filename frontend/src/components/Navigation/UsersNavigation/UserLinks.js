import React, { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { setSelectContactID } from 'features/contacts/contactsSlice';
import { DataContext, SettingsContext } from 'contexts';
import { useDispatch, useSelector } from 'react-redux';
import { controlProps } from 'globals/js';
import { SiteData } from 'data';
import { UserLogout } from '.';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const UserLinks = () => {

	const dispatch = useDispatch();

	const { isXSmall, isLarge } = useContext(SettingsContext).screen;
	const { setIsNavCollapsed } = useContext(DataContext);
	const { contactID, userID, access } = useSelector(state => state.auth).user;

	const href = "#";

	const DDDivider = () => {
		if (isXSmall) return <></>;
		return (
			<li>
				<hr className={clsx(
					'dropdown-divider',
					isXSmall && 'ps-0 text-slate-300'
				)} />
			</li>
		)
	};

	const ddItemClass = `dropdown-item${isXSmall ? ' ps-0' : ''}`;

	const userDDdata = useMemo(() => {
		const data = access !== 'admin'
			? SiteData.userDDdata.filter(_ => _.access !== 'admin')
			: SiteData.userDDdata;
		return data;
	}, [access])

	const onClickUserLink = () => {
		dispatch(setSelectContactID({ id: contactID }));
		if (isXSmall) setIsNavCollapsed(true);
	}


	return (
		<ul
			className={clsx(
				'dropdown-menu text-sm font-normal',
				!isXSmall ? 'mx-0' : 'ps-4',
				isLarge && 'shadow'
			)}
			data-popper-placement="bottom-end"
		>
			{SiteData?.headerModalLinks.map(link => (
				<li key={link.modalID}>
					<button
						className={ddItemClass}
						href={href}
						{...link?.modalID ? controlProps.modalOpen(link.modalID) : {}}
					>
						<FAIcon icon={link.icon} className="me-3" />
						{link.label}
					</button>
				</li>
			))}
			<DDDivider />
			{userDDdata.map(item => (
				<li key={item.pid}>
					<NavLink
						className={ddItemClass}
						onClick={onClickUserLink}
						to={`/${userID}/${item.path}`}
					>
						<FAIcon icon={item.icon} className="me-3" />
						{item.label}
					</NavLink>
				</li>
			))}
			<DDDivider />
			<li>
				<UserLogout className={ddItemClass} />
			</li>
		</ul>
	)
}

export default UserLinks
