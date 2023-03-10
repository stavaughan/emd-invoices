import { useRef } from 'react';
import { InputFileUpload } from 'components/Forms/Inputs';
import { OverlayCamera } from '.';

import Classes from '../../Gallery/styles/ImageWrapper.module.css';

const UploadableImageWrapper = ({
	setFile,
	setChangeDetect,
	setFileInputState,
	fileInputState,
	camera,
	size,
	type,
	children
}) => {

	const hiddenFileInput = useRef(null);

	const onImageInput = (e) => {
		const file = e.target.files[0];
		setChangeDetect(true);
		setFile(file);
		setFileInputState(e.target.value);
	};

	return (
		<span
			role="button"
			className={Classes['avatar--container']}
			onClick={() => hiddenFileInput.current.click()}
		>
			<InputFileUpload
				inputRef={hiddenFileInput}
				onFileUpload={onImageInput}
				value={fileInputState}
				mimeType="image/*"
				multiple={false}
			/>
			{camera && <OverlayCamera size={size} type={type} />}
			{children}
		</span>
	)
}

export default UploadableImageWrapper
