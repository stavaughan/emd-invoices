import { useCallback, useState, useEffect } from 'react';
import { useMobile } from 'hooks';
import clsx from 'clsx';
import { RowDelete, RowEditDelete } from '.';

const RowActionCol = ({
	item,
	image,
	setResults,
	setEditData,
	editDone = false,
	itemID,
	setID,
	onDelete,
	loading,
	deleteId
}) => {

	const [showEdit, setShowEdit] = useState(false);

	useEffect(() => {
		if(editDone) {
			setShowEdit(false)
		}
	}, [editDone])

	const { isXSmall } = useMobile();

	const onRemoveImage = useCallback(() => {
		if (setResults) {
			setResults(prev => prev.map(file => file._id === itemID
				? { ...file, image: {} }
				: file
			));
		}
	}, [itemID, setResults]);

	const deleteHandlerTest = !setEditData || (!!setID && !!setResults);

	const onDeleteHandler = useCallback((e) => {
		if(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		!!setID && setID(itemID)
		!!onDelete && onDelete(itemID)
		if (setResults) {
			setResults(prev => prev.filter(_ => _._id !== itemID));
		}
	}, [itemID, setID, onDelete, setResults]);

	const onEditHandler = useCallback(() => {
		if(!showEdit) {
			setShowEdit(true);
			setEditData(item);
		} else {
			setShowEdit(false);
			setEditData(null);
		}
	}, [showEdit, setEditData, item]);

	return (
		<td style={{ width: 'auto' }}>
			<div className={clsx(
				'd-flex align-items-center d-print-none',
				isXSmall ? 'flex-column' : 'justify-content-end pe-3'
			)}>
				{image?.isImage && (
					<span
						role="button"
						className={clsx(
							"link-hover ",
							!isXSmall ? 'me-3 text-xs' : 'mb-3 text-xxs text-center'
						)}
						onClick={onRemoveImage}
					>
						remove image
					</span>
				)}
				{deleteHandlerTest && (
					<RowDelete
						loading={loading}
						itemID={itemID}
						deleteId={deleteId}
						onDeleteHandler={onDeleteHandler}
					/>
				)}
				{!!setEditData && (
					<RowEditDelete
						onSetEditID={onEditHandler}
						handleDelete={onDeleteHandler}
						showEdit={showEdit}
					/>
				)}
			</div>
		</td>
	)
}

export default RowActionCol
