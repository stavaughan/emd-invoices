import { useMemo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, grantAccess } from 'features/users/usersSlice';
import { DropDownRowEnd } from 'components/DropDowns';
import { UserAvatarSm } from 'components/Gallery';
import { NestedContent } from '../sections';
import { LabelAlert } from 'components/Alerts';
import { BulletItem } from 'components/Text';
import { ListGroupFlush } from 'components/Lists';
import { toast } from 'react-toastify';
import { Global } from 'globals/js';
import { useItemDelete } from 'hooks';

const useAdminData = () => {

	const [inviteData, setInviteData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		userRole: 'approvedvisitor'
	})
	const [entering, setEntering] = useState(false);
	const [inviteReady, setInviteReady] = useState(false);
	const [clearInvite, setClearInvite] = useState(false);
	const initRolesState = useMemo(() => ({
		id: '',
		role: '',
		display: false,
		ready: false,
	}), []);

	const [displayRole, setDisplayRole] = useState(initRolesState);

	const dispatch = useDispatch();

	const { userRoles } = useSelector(state => state.userRoles);
	const { userPermissions } = useSelector(state => state.userPermissions);
	const { contacts } = useSelector(state => state.contacts)

	const { setDeleteId, isLoading: loadingDelete } = useItemDelete('users')

	const { users, isLoading, isError, isSuccess, message } = useSelector(state => state.users)

	// BEGIN: Invite New user
	useEffect(() => {
		if (inviteReady && isError) {
			toast.error(message)
		}
		if (inviteReady && isSuccess) {
			toast.success(message || 'Email sent to new user.')
		}
	}, [inviteReady, isError, isSuccess, message])

	useEffect(() => {
		if (clearInvite) {
			const timer = setTimeout(() => {
				setClearInvite(false)
			}, 800);
			return () => clearTimeout(timer);
		}
	}, [clearInvite])

	useEffect(() => {
		if (inviteReady) {
			const inviteResData = grantAccess(inviteData);
			if (inviteResData !== null) {
				dispatch(inviteResData)
				setInviteReady(false)
				setClearInvite(true)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inviteReady, dispatch])
	// END: Invite New user

	const siteUsers = useMemo(() => {
		if (!users?.length) {
			return []
		}
		return users.map(user => {
			const contactUser = contacts.find(_ => _._id === user.contactID);
			const userCreated = user?.createdAt || user?.updatedAt;
			return {
				avatarID: contactUser?.avatarID || '',
				contactID: contactUser?._id,
				name: contactUser?.fullName || contactUser?.name?.given_name || '',
				verified: user?.verified ? 'yes' : 'no',
				userAccess: user?.access,
				createdAt: userCreated ? Global._Date.formatted(userCreated) : null,
				userID: user?._id,
				userRole: userRoles?.find(_ => _.roleID === user?.userRole)?.role || '',
				email: user.email,
				phone: contactUser?.phones?.length ? contactUser?.phones[0]?.number : ''
			}
		})
	}, [contacts, users, userRoles]);

	const userVerified = useCallback((id) => {
		const verified = siteUsers.find(_ => _.userID === id)?.verified;
		return verified === 'yes'
	}, [siteUsers]);

	const userVerification = useCallback((userID, isVerified) => {
		const contraVerify = !isVerified;
		dispatch(updateUser({
			id: userID,
			reqBody: {
				verified: contraVerify
			}
		}))
	}, [dispatch]);

	const setUserRoleManageUsers = useCallback((value) => {
		setDisplayRole(prev => ({
			...prev,
			...value !== 'cancel' && {
				role: value
			},
			ready: true
		}))
	}, [setDisplayRole]);

	const onCancelRoleSelect = useCallback((e) => {
		e.preventDefault();
		setDisplayRole(initRolesState)
	}, [initRolesState, setDisplayRole]);

	useEffect(() => {
		if (displayRole?.ready) {
			dispatch(updateUser({
				id: displayRole.id,
				reqBody: {
					userRole: displayRole.role
				}
			}))
			if (!isLoading) {
				const timer = setTimeout(() => {
					setDisplayRole(initRolesState);
				}, 500);
				return () => clearTimeout(timer);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, displayRole?.ready]);

	const menuItems = useCallback((id) => {
		const isVerified = userVerified(id);
		const role = siteUsers.find(_ => _.userID === id)?.userRole;
		return [
			{
				onClickHandler: (id) => userVerification(id, isVerified),
				label: !isVerified ? 'Mark as Verified' : 'Mark as Unverified',
				icon: ['fas', isVerified ? 'user-check' : 'user-times']
			},
			{
				onClickHandler: (id) => setDisplayRole(prev => ({
					id: displayRole?.id !== id ? id : '',
					role: displayRole?.id !== id ? role : '',
					display: displayRole?.id !== id ? true : false,
					ready: false
				})),
				label: 'Edit Role',
				icon: ['far', 'edit']
			},
			{
				onClickHandler: setDeleteId,
				loading: loadingDelete,
				label: 'Remove',
				icon: ['far', 'trash-alt']
			}
		];
	}, [
		userVerified,
		userVerification,
		displayRole,
		setDeleteId,
		loadingDelete,
		siteUsers,
		setDisplayRole
	]);

	const VerifiedBadge = useCallback(({ verified }) => {
		const color = verified === 'yes' ? 'success' : 'warning';
		const text = verified === 'yes' ? 'VERIFIED' : 'UNVERIFIED';
		return <span className={`badge bg-${color}-soft`}>{text}</span>
	}, []);

	// User Roles and Permissions
	const permissionsLabels = useCallback((rowPermissions) => {
		const permissionLabel = (item) => {
			const permissionItem = userPermissions.find(_ => _.pid === item);
			const label = permissionItem?.label || '';
			const description = permissionItem?.statement || '';
			return { label, description }
		};
		return rowPermissions.map(pid => (
			<BulletItem
				key={pid}
				label={permissionLabel(pid)?.label}
				description={permissionLabel(pid)?.description}
			/>
		))
	}, [userPermissions]);

	const rolesPermissionsTable = useCallback((small) => ({
		headerRow: !small ? [
			{
				colID: 'pt01',
				title: 'Role',
				style: { maxWidth: '10em' }
			},
			{
				colID: 'pt02',
				title: 'permissions',
				style: { width: 'auto' }
			},
		] : [],
		tableRows: userRoles.map((row) => {
			return !small ? {
				rowID: row.roleID,
				rowCols: [
					{
						colID: `${row.roleID}col1`,
						style: { maxWidth: '16em' },
						colClass: 'text-wrap',
						content: (
							<div>
								<div className="font-medium text-secondary">
									{row.role}
								</div>
								<div className="text-sm text-gray-400 text-wrap">
									{row.note}
								</div>
							</div>
						)
					},
					{
						colID: `${row.roleID}col2`,
						style: { width: 'auto' },
						content: <ListGroupFlush
							listContent={permissionsLabels(row?.permissions)}
							ItemComponent={({ item }) => <>{item}</>}
							noBorder={true}
							noPad={true}
						/>
					}
				]
			} : {
				rowID: row.roleID,
				nestedClass: 'bg-success-soft',
				rowCols: [
					{
						colID: `${row.roleID}col1`,
						colClass: 'text-wrap',
						content: (
							<div className="text-sm mt-3">
								<div className="font-medium text-secondary">
									{row.role}
								</div>
								<div className="text-gray-400 text-wrap">
									{row.note}
								</div>
							</div>
						),
						colSpan: 2
					}
				],
				colCols: [
					{
						colID: `${row.roleID}col0`,
						colClass: 'hide'
					},
					{
						colID: `${row.roleID}col2`,
						content: <ListGroupFlush
							listContent={permissionsLabels(row?.permissions)}
							ItemComponent={({ item }) => <>{item}</>}
							noBorder={true}
							noPad={true}
						/>,
						colSpan: 2
					}
				]
			}
		})
	}), [permissionsLabels, userRoles]);

	// Manage Users
	const usersRolesManageUsers = useMemo(() => {
		return userRoles.map(item => ({
			_id: item.roleID,
			label: item.role
		}))
	}, [userRoles]);

	const approvedUsers = useMemo(() => {
		if (!siteUsers?.length) return [];
		return siteUsers.filter(user => !['none', ''].includes(user.userRole));
	}, [siteUsers]);

	const tableContent = useMemo(() => ({
		headerRow: [
			{
				colID: 'hcol1',
				title: 'user name',
				colSpan: '2'
			},
			{
				colID: 'hcol2',
				title: 'role'
			},
			{
				colID: 'hcol4',
				title: 'verified'
			},
			{
				colID: 'hcol5',
				title: 'Created'
			},
			{
				colID: 'hcol6',
				title: 'actions'
			}
		],
		tableRows: approvedUsers?.length ? approvedUsers.map(user => ({
			rowID: `row${user.userID}`,
			nestedClass: 'bg-lighter',
			rowCols: [
				{
					colID: 'rowcol1',
					content: <UserAvatarSm avatarID={user?.avatarID} />,
					colSpan: "1"
				},
				{
					colID: 'rowcol2',
					content: user.name,
					colSpan: "1"
				},
				{
					colID: 'rowcol3',
					content: user.userRole,
					colSpan: "1"
				},
				{
					colID: 'rowcol5',
					content: user.verified,
					colSpan: "1"
				},
				{
					colID: 'rowcol6',
					content: user?.createdAt,
					colSpan: '1'
				},
				{
					colID: 'rowcol7',
					content: (
						<DropDownRowEnd
							menuID={user.contactID}
							menuItems={menuItems(user.userID)}
							itemID={user.userID}
						/>
					),
					colSpan: '1'
				}
			],
			colCols: [
				{
					colID: 'colcol1',
					content: <VerifiedBadge verified={user.verified} />,
					colSpan: "1"
				},
				{
					colID: 'colcol2',
					content: <NestedContent
						id={user.userID}
						email={user.email}
						phone={user.phone}
						setUserRoles={setUserRoleManageUsers}
						onCancelRoleSelect={onCancelRoleSelect}
						displayRole={displayRole}
						roles={usersRolesManageUsers}
					/>,
					colSpan: "5"
				}
			]
		})) : null
	}), [
		approvedUsers,
		displayRole,
		menuItems,
		onCancelRoleSelect,
		setUserRoleManageUsers,
		usersRolesManageUsers
	]);

	const rolesData = useMemo(() => {
		return userRoles.map(item => ({
			itemID: item.roleID,
			label: item?.note
				? <LabelAlert label={item.role} message={item.note} />
				: item.role,
			role: item.role,
			permissions: item.permissions
		}))
	}, [userRoles]);

	const currentRole = useCallback((role) => {
		return rolesData.find(_ => _.itemID === role).role;
	}, [rolesData])

	const selPermissionIDs = useCallback((selRole) => {
		const allIDs = userPermissions.map(_ => _.pid);
		const rolesIDs = userRoles.find(role => role.roleID === selRole).permissions;
		if (rolesIDs[0] === 'all') {
			return allIDs;
		}
		if (rolesIDs[0] === 'except') {
			const noneIds = rolesIDs.shift();
			return allIDs.filter(id => !noneIds.includes(id))
		}
		return rolesIDs;
	}, [userRoles, userPermissions]);

	const permissionsData = useCallback((selRole) => {
		const selIDs = selPermissionIDs(selRole);
		const selPermissions = userPermissions.filter(_ => selIDs.includes(_.pid))
		return {
			tableRows: selPermissions.map((item, idx) => ({
				rowID: `pdr${idx}`,
				rowCols: [{
					colID: `rcol2${idx}`,
					content: <BulletItem label={item.label} />
				}]
			}))
		}
	}, [selPermissionIDs, userPermissions]);

	return {
		rolesPermissionsTable,
		tableContent,
		permissionsData,
		entering,
		setEntering,
		currentRole,
		rolesData,
		inviteData,
		setInviteData,
		setInviteReady,
		clearInvite,
		isLoading
	}
}

export default useAdminData
