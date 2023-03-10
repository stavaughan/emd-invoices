import clsx from 'clsx';
import { InputFileUpload } from 'components/Forms/Inputs';
import { DropLabel } from '.';

import Classes from '../styles/Upload.module.css';

const ImageDropContainer = ({
	handleClick,
	onDropHandler,
	onFileUpload,
	inputValue,
	noLabel,
	inputRef,
	multiple,
	mimeType,
	maxSize,
	style,
	type
}) => {
	return (
		<div
			tabIndex="0"
			className={clsx(
				Classes.dropzone,
				'rounded-2 position-relative',
				!noLabel && 'mb-4'
			)}
			{...style && { style }}
			{...handleClick && { onClick: handleClick }}
			{...onDropHandler && { onDrop: onDropHandler }}
		>
			<DropLabel
				noLabel={noLabel}
				type={type}
				maxSize={maxSize}
			/>
			<InputFileUpload
				inputRef={inputRef}
				onFileUpload={onFileUpload}
				value={inputValue || ''}
				mimeType={mimeType}
				multiple={multiple || false}
			/>
		</div>
	)
}

export default ImageDropContainer
