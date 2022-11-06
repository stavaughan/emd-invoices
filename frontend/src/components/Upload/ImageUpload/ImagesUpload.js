import { useState, useRef } from 'react';
import { DropzoneWrapper, uploadLogic } from '../components';
import { UploadResults } from '.';

const ImagesUpload = ({
	type,
	maxSize,
	setFile,
	noLabel,
	onUpload,
	mimeType,
	base64,
	multi
}) => {

	const hiddenFileInput = useRef(null);

	const [files, setFiles] = useState([]);

	const handleOnClick = () => {
		hiddenFileInput.current.click();
	}

	const handleOnDrop = (e) => {
		e.preventDefault();
		hiddenFileInput.current.drop();
	}

	const onFileUpload = async (e) => {
		e.preventDefault();
		base64 ? await uploadLogic.imageBase64({
			files: e.target.files,
			setFiles: !setFile ? setFiles : '',
			setFile: setFile || '',
			onUpload
		}) : await uploadLogic.imageUint8Array({
			files: e.target.files,
			setFile: setFile || '',
			setFiles: !setFile ? setFiles : '',
			onUpload
		});
	};

	return (
		<DropzoneWrapper
			handleClick={handleOnClick}
			onDropHandler={handleOnDrop}
			onFileUpload={onFileUpload}
			inputRef={hiddenFileInput}
			noLabel={noLabel}
			mimeType={mimeType}
			multiple={multi}
			maxSize={maxSize}
			type={type}
		>
			{(files?.length && !setFile) ? (
				<UploadResults
					files={files}
					setFiles={setFiles}
				/>
			) : null}
		</DropzoneWrapper>
	)
}

export default ImagesUpload
