import { useCallback } from 'react';
import { FetchedImage } from 'components/Gallery';
import { Button, ModalButton } from 'components/Buttons';
import { RowImage } from '.';

import Classes from 'components/Gallery/styles/images.module.css';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ResultItemRow = ({
	item,
	setResults,
	setID,
	upload,
	onDelete,
	loading,
	deleteId,
	colClass
}) => {

	const {
		image = {},
		content = [],
		apiImage = {}
	} = item;

	const onDeleteHandler = useCallback((e) => {
		e.preventDefault();
		!!setID && setID(item._id)
		!!onDelete && onDelete(item._id)
		if (setResults) {
			setResults(prev => prev.filter(_ => _._id !== item._id));
		}
	}, [item, setID, onDelete, setResults]);

	const onRemoveImage = useCallback(() => {
		if (setResults) {
			setResults(prev => prev.map(file => file._id === item._id
				? { ...file, image: {} }
				: file
			));
		}
	}, [item, setResults]);

	return (
		<tr>
			<td style={{ width: '7rem' }}>
				{apiImage?.pid ? (
					<span className={Classes["image-thumbnail"]}>
						<FetchedImage pid={apiImage.pid} />
					</span>
				) : (
					<RowImage
						item={item}
						upload={upload}
						setResults={setResults}
					/>
				)}
			</td>
			{content?.length ? content.map((col, idx) => (
				<td key={idx} {...colClass(idx, 1)}>
					{col}
				</td>
			)) : null}
			<td className="text-end align-middle d-print-none">
				{image?.isImage && (
					<Button
						type="button"
						className="link-hover me-3 text-xs my-auto py-0"
						rest={{ onClick: onRemoveImage }}
					>
						remove image
					</Button>
				)}
				{loading && (item._id === deleteId) ? (
					<FAIcon icon="circle-notch" spin className="text-blue-500 my-auto" />
				) : (
					<ModalButton
						className='btn-close btn-text-primary shadow-sm rounded-circle d-print-none my-auto'
						modalID="deleteConfirmation"
						rest={{ onClick: onDeleteHandler }}
					/>
				)}
			</td>
		</tr>
	)
}

export default ResultItemRow
