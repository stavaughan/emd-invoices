import { Emphasize } from 'components/Text';
import Classes from '../styles/Upload.module.css'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ImageDropContainer = ({
	getRootProps,
	getInputProps,
	isDragActive,
	maxSizeMessage,
	isDragReject
}) => {

	return (
		<div
			{...getRootProps({
				className: `${Classes.dropzone} rounded-3 my-3 py-4 text-slate-400`
			})}
		>
			<FAIcon icon="images" className="fa-fw fa-2x text-slate-400" />
			<input {...getInputProps()} />
			<div className="text-sm font-normal pt-3">
				<Emphasize.Italic>
					{(!isDragActive && !maxSizeMessage) && 'Click here or drop your images to upload!'}
					{isDragActive && !isDragReject && "Drop it like it's hot!"}
					{isDragReject && <span className="text-danger">File type not accepted, sorry!</span>}
					{maxSizeMessage && <span className="text-danger">{maxSizeMessage}</span>}
				</Emphasize.Italic>
			</div>
		</div>
	)
}

export default ImageDropContainer
