import { Button } from 'components/Buttons';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const RowDelete = ({
	loading,
	itemID,
	deleteId,
	onDeleteHandler
}) => {

	return (
		<>
			{loading && (itemID === deleteId) ? (
				<FAIcon icon="circle-notch" spin className="text-blue-500 text-xs" />
			) : (
				<Button
					className='text-xs btn-close btn-text-primary shadow-sm rounded-circle d-print-none'
					rest={{ onClick: onDeleteHandler }}
				/>
			)}
		</>
	)
}

export default RowDelete
