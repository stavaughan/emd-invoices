import { InputFileUpload } from 'components/Forms/Inputs';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/Upload.module.css';

const DropzoneWrapper = ({
	handleClick,
	onDropHandler,
	imageSelected,
	onFileUpload,
	inputValue,
	noLabel,
	inputRef,
	multiple,
	mimeType,
	maxSize,
	children,
	type
}) => {

	return (
		<>
			{!imageSelected && (
				<div
					tabIndex="0"
					className={clsx(
						Classes.dropzone,
						'rounded-3',
						!noLabel && 'mb-4'
					)}
					{...handleClick && { onClick: handleClick }}
					{...onDropHandler && { onDrop: onDropHandler }}
				>
					<FAIcon
						icon="images"
						className={clsx(
							'fa-fw text-slate-400',
							noLabel ? 'fa-2x' : 'fa-3x mb-3'
						)}
					/>
					{!noLabel && (
						<div className="small text-secondary">
							<div>
								Drag or <span className="text-primary">browse</span> for {type} to upload.
							</div>
							<div className="text-sm font-normal">
								Allowable image size under {maxSize}
							</div>
						</div>
					)}
					<InputFileUpload
						inputRef={inputRef}
						onFileUpload={onFileUpload}
						value={inputValue || ''}
						mimeType={mimeType}
						multiple={multiple || false}
					/>
				</div>
			)}
			{children}
		</>
	)
}

export default DropzoneWrapper
