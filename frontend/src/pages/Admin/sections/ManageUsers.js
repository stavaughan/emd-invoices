import { ResponsiveTable } from 'components/Tables';
import { useAdminData } from 'pages/Admin/components';

const ManageUsers = () => {

	const { tableContent } = useAdminData()

	return (
		<section>
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
