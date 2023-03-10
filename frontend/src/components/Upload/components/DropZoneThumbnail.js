import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/Upload.module.css';

const DropZoneThumbnail = ({ style }) => {

	return (
		<div
			tabIndex="0"
			className={clsx(
				Classes.dropzone,
				'rounded-2 position-relative'
			)}
			style={style}
		>
			<div
				className="position-absolute text-slate-400"
				style={{
					opacity: 0.7,
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					...style
				}}
			>
				<FAIcon
					icon="images"
					className="upload-icon fa-fw  fa-2x"
				/>
				<div>upload image</div>
			</div>
		</div>
	)
}

export default DropZoneThumbnail
