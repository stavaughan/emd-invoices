import clsx from 'clsx';
import { RoundIconBtn } from 'components/Icons';

const RowEditDelete = ({ onSetEditID, handleDelete, showEdit }) => {

	const onHandleEdit = (e) => {
		e.preventDefault();
		onSetEditID();
	};

	const onHandleDelete = (e) => {
		e.preventDefault();
		!!handleDelete && handleDelete();
	};

	return (
		<>
			<RoundIconBtn
				icon={showEdit ? 'times' : "pencil-alt"}
				color={clsx(
					"text-xs",
					showEdit ? 'text-danger' : "text-gray-300"
				)}
				onClick={onHandleEdit}
				hover="alt"
				xSmall
			/>
			{!!handleDelete && (
				<RoundIconBtn
					icon={['far', 'trash-alt']}
					color="text-xs text-gray-300"
					onClick={onHandleDelete}
					hover="danger"
					xSmall
				/>
			)}
		</>
	)
}

export default RowEditDelete
