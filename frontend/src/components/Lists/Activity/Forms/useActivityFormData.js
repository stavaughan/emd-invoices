import { useContext, useMemo } from 'react';
import { FormInputsContext, FormsContext } from 'contexts';
import { useSelector } from 'react-redux';
import { useUserID } from 'hooks';	
import { SiteData } from 'data';

const useActivityFormData = ({ contactID = '', accountID = '' }) => {

	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setNewItem);
	const setValues = ctx.setValues(setNewItem);

	const { userID } = useUserID();
	const { accounts } = useSelector(state => state.accounts);
	const { contacts } = useSelector(state => state.contacts);

	const venID = useMemo(() => {
		switch(true) {
			case !!accountID:
				return accounts?.find(account => account._id === accountID)?.venID || '';
			case !!contactID:
				return contacts?.find(contact => contact._id === contactID)?.venID || '';
			default:
				return '';
		}

	}, [accounts, contacts, accountID, contactID]);

	const activityTypes = useMemo(() => SiteData?.icons?.activities.map(_ => ({ _id: _.type, label: _.type })), []);
	const accountsOptions = useMemo(() => accounts.map(_ => ({ _id: _._id, label: _?.accountName })), [accounts])

	const handleTitleChange = (value) => {
		setEntering(true);
		setValues({
			userID,
			title: value,
			...contactID && { contactIDs: [contactID] },
			...accountID && { accountIDs: [accountID] }
		})
	};

	return {
		newItem,
		setValue,
		activityTypes,
		accountsOptions,
		handleTitleChange,
		setEntering,
		clear,
		venID
	}
}

export default useActivityFormData
