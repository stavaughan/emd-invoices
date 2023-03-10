import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/Upload.module.css';

const DropZoneThumbnailIL = ({ width }) => {

	return (
		<div
			className={clsx(
				Classes.dropzone,
				"text-slate-400 img-thumbnail position-relative"
			)}
			style={{
				//width: '100%',
				//height: width || 'auto'
				width: '10rem',
				height: '10rem'
			}}
		>
			<div
				className="position-absolute"
				style={{
					opacity: 0.7,
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<FAIcon
					icon="images"
					className="upload-icon fa-fw fa-2x"
				/>
				<div>Upload image</div>
			</div>
		</div>
	)
}

export default DropZoneThumbnailIL
