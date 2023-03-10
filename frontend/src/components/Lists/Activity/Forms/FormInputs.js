import { InputCol, GroupInputRow } from 'components/Forms/components';
import { NotesTagsGroup } from 'components/Forms/Groups';
import { AssociatedContacts } from 'pages/Accounts/components/Forms';
import { AssociatedAccounts } from 'pages/Contacts/components/Forms';
import { useActivityFormData } from '.';

const FormInputs = ({ contactID, accountID, uid }) => {

	const {
		newItem,
		setValue,
		activityTypes,
		accountsOptions,
		handleTitleChange,
		setEntering,
		clear,
		venID
	} = useActivityFormData({ contactID, accountID });

	return (
		<div className="p-3">
			<GroupInputRow label="Activity Detail">
				<InputCol.Dropdown
					cols="12 md-6"
					id={`activitytype${uid || ''}`}
					label="Activity Type"
					selected={newItem.type}
					onChange={setValue('type')}
					optionData={activityTypes}
				/>
				<InputCol.Text
					id={`activitytitle${uid || ''}`}
					value={newItem.title}
					onChange={handleTitleChange}
					label="Activity Title"
					required
				/>
				<InputCol.Text
					id={`activitydescription${uid || ''}`}
					value={newItem.description}
					onChange={setValue('description')}
					label="Activity Description"
				/>
			</GroupInputRow>
			<AssociatedContacts
				id={`activitycontacts${uid || ''}`}
				field="contactIDs"
				newItem={newItem}
				setValue={setValue}
				venID={venID}
				assocVenID={true}
				setEntering={setEntering}
				//setSelectedContacts={setValue('contactIDs')}
				clear={clear}
			/>
			{(accountsOptions?.length && !accountID) ? (
				<AssociatedAccounts
					id={`activityaccounts${uid || ''}`}
					newItem={newItem}
					setValue={setValue}
					venID={venID}
					assocVenID={false}
					setSelectedAccounts={setValue('accountIDs')}
					clear={clear}
				/>
			) : null}
			<NotesTagsGroup
				id={`newactivity${uid || ''}`}
				name="Activity"
				setValue={setValue}
				notes={newItem.notes}
			/>
		</div>
	)
}

export default FormInputs
