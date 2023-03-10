import { useCallback, useContext, useMemo } from 'react';
import { DatesContext } from 'contexts';
import { useSelector } from 'react-redux';
import { Global } from 'globals/js';

const useActivityData = () => {

	const { formats } = useContext(DatesContext);
	const { accounts } = useSelector(state => state.accounts);
	const { vendors } = useSelector(state => state.vendors);
	const { contacts } = useSelector(state => state.contacts);
	const { userName } = useSelector(state => state.auth).user;

	const formattedDate = useCallback((date) => `- ${formats(date).dateFull}`, [formats]);

    const elapsedTime = useCallback((cDate) => {
        const date = new Date(cDate);
        const ms = date.getTime();
        return Global.elapsedTimeMessage(ms)
    }, []);

	const ownerName = userName || 'na';

	const getAccountFromID = useCallback((aid) => {
        if (!accounts?.length || !vendors?.length) {
            return '';
        }
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

	const accountNames = useCallback((aids) => {
		const names = aids.map(aid => getAccountFromID(aid))
		const uiqueNames = Global.uniqueArray(names);
		return uiqueNames.filter(_ => _ !== 'no vendor exists...')
	}, [getAccountFromID]);

	const contactNames = useMemo((cids) => {
		const names = cids.map(cid => getContactFromID(cid))
		return names.filter(name => name !== 'na');
	}, [getContactFromID]);

	return {
		accountNames,
		contactNames,
		timeMessage: elapsedTime,
		formDate: formattedDate,
		ownerName
	}
}

export default useActivityData
