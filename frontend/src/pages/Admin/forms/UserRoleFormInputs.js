import { useCallback, useContext } from 'react';
import { FormInputsContext, FormsContext } from 'contexts';
import { GroupInputRow, InputCol } from 'components/Forms/components';
import { useCreatePermission } from '.';

const UserRoleFormInputs = () => {

	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setNewItem);

	const setRoleID = useCallback((role) => {
		const roleID = role.replace(/\s/g, '').toLowerCase();
		setValue('roleID')(roleID);
	}, [setValue]);

	const setRole = useCallback((value) => {
		const role = value.trim();
		setValue('role')(role);
		setRoleID(role);
		setEntering(true);
	}, [setValue, setRoleID, setEntering]);

	const {
		dropdownOptions,
		setPermission,
		setReady,
		isLoading
	} = useCreatePermission({
		clear,
		rolePermissions: newItem?.permissions,
		setValue
	})

	return (
		<div className="p-3 mb-4">
			<GroupInputRow label="New Role Information">
				<InputCol.Text
					id="newuserroletitle"
					value={newItem.role}
					onChange={setRole}
					maxLength="50"
					label="Role Title"
					required
					cols="12 md-6"
				/>
				<InputCol.CreatableMultiSelectDD
					cols="12 md-6"
					id="newuserrolepermissions"
					options={dropdownOptions}
					setInputItem={setPermission}
					setSelected={setValue('permissions')}
					label="Select or create a role permission"
					isDisabled={isLoading}
					setReady={setReady}
					isLoading={isLoading}
					name="userPermissions"
				/>
				<InputCol.TextArea
					id="newuserrolenotes"
					value={newItem.notes}
					label="Notes"
					setTextValue={setValue('notes')}
					maxLength='500'
					placeholder='Enter notes or comments...'
					optional="true"
				/>
			</GroupInputRow>
		</div>
	)
}

export default UserRoleFormInputs
