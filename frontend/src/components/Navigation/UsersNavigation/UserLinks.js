import React, { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { setSelectContactID } from 'features/contacts/contactsSlice';
import { DataContext, SettingsContext } from 'contexts';
import { useDispatch, useSelector } from 'react-redux';
import { controlProps } from 'globals/js';
import { useLogout } from 'hooks';
import { SiteData } from 'data';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const DDDivider = () => <li><hr className="dropdown-divider" /></li>;

const NavIconLabel = ({ icon, label, small }) => (
	<div className="d-flex justify-content-start align-items-center">
		<FAIcon
			icon={icon}
			className="me-2"
			size={small ? 'xs' : 'sm'}
		/>
		{label}
	</div>
);

const UserLinks = () => {

	const dispatch = useDispatch();

	const { onLogout } = useLogout()

	const { isXSmall, isLarge } = useContext(SettingsContext).screen;
	const { setIsNavCollapsed } = useContext(DataContext);
	const { contactID, userID, access } = useSelector(state => state.auth).user;

	const userDDdata = useMemo(() => {
		const data = access !== 'admin'
			? SiteData.dropDownLabels.userDDdata.filter(_ => _.access !== 'admin')
			: SiteData.dropDownLabels.userDDdata;
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
			{SiteData?.headerLinks.map(link => (
				<li key={link.modalID}>
					<button
						className="dropdown-item"
						{...link?.modalID && controlProps.modalOpen(link.modalID)}
					>
						<NavIconLabel
							icon={link.icon}
							label={link.label}
							small={isXSmall}
						/>
					</button>
				</li>
			))}
			{!isXSmall && <DDDivider />}
			{userDDdata.map(item => (
				<li key={item.pid}>
					<NavLink
						className="dropdown-item"
						onClick={onClickUserLink}
						to={`/${userID}/${item.path}`}
					>
						<NavIconLabel
							icon={item.icon}
							label={item.label}
							small={isXSmall}
						/>
					</NavLink>
				</li>
			))}
			{!isXSmall && <DDDivider />}
			<li>
				<button
					className="dropdown-item"
					onClick={onLogout}
				>
					<NavIconLabel
						icon="sign-out-alt"
						label="Logout"
						small={isXSmall}
					/>
				</button>
			</li>
		</ul>
	)
}

export default UserLinks

