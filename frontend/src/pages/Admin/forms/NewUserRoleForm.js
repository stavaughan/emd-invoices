import { FormsProvider } from 'contexts/forms-context';
import { UserRoleFormInputs } from '.'
import { SiteData } from 'data';

const NewUserRoleForm = () => {

	const { modalIDs } = SiteData;

	return (
		<FormsProvider
			modalID={modalIDs.newUserRole}
			collection='userRoles'
			itemTitle="User Role"
		>
			<UserRoleFormInputs />
		</FormsProvider>
	)
}

export default NewUserRoleForm;
