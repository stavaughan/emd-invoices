import { RoundIconBtn } from 'components/Icons';
import { Button, LoaderButton } from 'components/Buttons';
import { toast } from 'react-toastify';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const EditSaveButtons = ({
	showEdit,
	setShowEdit,
	onSaveEdit,
	onCancelEdit,
	disableDeleteMsg,
	handleDelete,
	loading
}) => {

	const onClickHandler = (e) => {
		e.preventDefault();
		setShowEdit(true);
	};

	const onHandleSave = (e) => {
		e.preventDefault();
		!!onSaveEdit && onSaveEdit();
		if (!loading) setShowEdit(false);
	};

	const onHandleCancel = (e) => {
		e.preventDefault();
		!!onCancelEdit && onCancelEdit();
	};

	const onHandleDelete = (e) => {
		e.preventDefault();
		if(disableDeleteMsg) {
			toast.error(disableDeleteMsg);
			return;
		}
		!!handleDelete && handleDelete();
	};

	return (
		<div className="d-flex justify-content-end align-items-center">
			{showEdit ? (
				<>
					<LoaderButton
						className="text-xs link-hover ps-0 pe-2"
						setOnclick={onHandleSave}
						loading={loading}
						label="Save"
					/>
					<div className="vr text-primary my-2"></div>
					<Button
						className="text-xs ps-2 pe-0 text-danger"
						rest={{ onClick: onHandleCancel }}
					>
						<FAIcon icon="times" />
					</Button>
				</>
			) : (
				<>
					<RoundIconBtn
						icon="pencil-alt"
						color="text-xs"
						onClick={onClickHandler}
						xSmall
						alt
					/>
					{!!handleDelete && (
						<RoundIconBtn
							icon={['far', 'trash-alt']}
							color="text-xs"
							onClick={onHandleDelete}
							xSmall
						/>
					)}
				</>
			)}
		</div>
	)
}

export default EditSaveButtons
