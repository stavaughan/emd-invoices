import { ResponsiveTable } from 'components/Tables';
import { useAdminData } from 'pages/Admin/components';
import { AlertModal } from 'components/Alerts';

const ManageUsers = () => {

	const { usersAlert, setUsersAlert, tableContent } = useAdminData()

	return (
		<section>
			{usersAlert?.message && (
				<AlertModal
					type={usersAlert?.type}
					modalID="manageUsersAlert"
					modalName="Manage Users Alert"
					modalShow={usersAlert?.message || ''}
					modalTitle={usersAlert?.message}
					onClose={() => setUsersAlert({})}
				/>
			)}
			<div className="mb-4">
				<ResponsiveTable
					tableContent={tableContent}
					type="nested"
				/>
			</div>
		</section>
	)
}

export default ManageUsers
