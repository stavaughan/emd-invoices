import React, { useRef } from 'react';
import { ImageDropContainer, useUploadLogic } from '../components';

const ImagesUpload = ({
	type,
	maxSize,
	setFile,
	noLabel,
	onUpload,
	mimeType,
	base64,
	style,
	multi
}) => {

	const { onImageUpload } = useUploadLogic(setFile, onUpload, base64);

	const hiddenFileInput = useRef(null);

	const onClickHandler = () => {
		hiddenFileInput.current.click()
	};

	const handleOnDrop = () => {
		hiddenFileInput.current.drop();
	}

	const onFileUpload = (e) => {
		if(!e.target?.files?.length) return;
		onImageUpload(e.target.files)
	};

	return (
		<>
			<ImageDropContainer
				handleClick={onClickHandler}
				onDropHandler={handleOnDrop}
				onFileUpload={onFileUpload}
				inputRef={hiddenFileInput}
				noLabel={noLabel}
				mimeType={mimeType}
				multiple={multi}
				maxSize={maxSize}
				style={style}
				type={type}
			/>
		</>
	)
}

export default ImagesUpload
