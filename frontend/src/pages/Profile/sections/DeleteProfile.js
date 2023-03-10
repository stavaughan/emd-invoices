import { useItemDelete, useMobile } from 'hooks';
import { useSelector } from 'react-redux';
import { useExportUserData } from '../components';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Buttons';

const DeleteProfile = () => {

	const { _id: userID } = useSelector(state => state.auth).user;

	const { exportUserData } = useExportUserData();

	const { setDeleteId } = useItemDelete('users')
	const { isXSmall } = useMobile()

	return (
		<section>
			<div className="ease-in-out rounded-2 p-3 bg-danger-soft">
				<div className="font-medium text-danger">
					<FAIcon icon="exclamation-triangle" className="me-2" />
					Warning
				</div>
				<div className={clsx(
					'pt-2 pb-4',
					isXSmall ? 'text-sm' : 'text-sm',
				)}>
					<div>If you close your account, you will have to create another account if you wish to regain access.</div>
					<div className="mt-3">
						If this is a court approved guardian account, your data will be archived in accordance with records retention guidelines per your local State. Please contact your local State for more information.
					</div>
					<div className="mt-3">
						Before closing your account, we advise you to download your data. Click the button below to download your data.
					</div>

				</div>
				<div className={clsx(
					'd-flex',
					isXSmall ? 'justify-content-between' : 'justify-content-end',
					'align-items-center mb-2'
				)}>
					<Button
						className="btn-outline-secondary btn-sm me-3"
						rest={{
							onClick: exportUserData
						}}
					>
						<FAIcon icon="upload" className="me-2" />
						Export My Data
					</Button>
					<Button
						className="btn-danger btn-sm"
						rest={{
							onClick: () => setDeleteId(userID)
						}}
					>
						Delete My Account
					</Button>
				</div>
			</div>
		</section>
	)
}

export default DeleteProfile
