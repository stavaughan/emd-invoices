import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Global } from 'globals/js';

const useActivityLogic = ({ owner, accountIDs, contactIDs }) => {

	const { accounts } = useSelector(state => state.accounts);
	const { vendors } = useSelector(state => state.vendors);
	const { contacts } = useSelector(state => state.contacts);
	const { userID, userName } = useSelector(state => state.auth).user;

	const ownerName = useMemo(() => {
		return owner === userID ? userName : 'na'
	}, [userID, userName, owner])

	const getAccountFromID = useCallback((aid) => {
        if (!accounts?.length || !vendors?.length) return '';
        const account = accounts.find(_ => _._id === aid);
        const venID = account?.venID || '';
        const vendor = venID && vendors.find(v => v._id === venID);
		const type = account?.accountType || '';
		const accountType = type ? ` ${Global.upperCaseFirst(type)}` : '';
		return vendor?.name ? vendor.name + accountType : 'no vendor exists...';
    }, [accounts, vendors]);

	const getContactFromID = useCallback((cid) => {
		const name = contacts?.length ? contacts.find(_ => _._id === cid).fullName : '';
		return name && name !== ownerName ? name : 'na'
	}, [contacts, ownerName]);

	const accountNames = useMemo(() => {
		const names = accountIDs.map(aid => getAccountFromID(aid))
		const uiqueNames = Global.uniqueArray(names);
		return uiqueNames.filter(_ => _ !== 'no vendor exists...')
	}, [accountIDs, getAccountFromID]);

	const contactNames = useMemo(() => {
		const names = contactIDs.map(cid => getContactFromID(cid))
		return names.filter(name => name !== 'na');
	}, [contactIDs, getContactFromID]);

	const formattedDate = useCallback((createdAt) => {
		return `- ${Global._Date.formatted(createdAt, 'full')}`;
	}, []);

	const elapsedTime = useCallback((createdAt) => {
		const date = new Date(createdAt);
		const ms = date.getTime();
		return Global.elapsedTimeMessage(ms)
	}, []);

	return {
		formattedDate,
		elapsedTime,
		ownerName,
		accountNames,
		contactNames
	}
}

export default useActivityLogic
