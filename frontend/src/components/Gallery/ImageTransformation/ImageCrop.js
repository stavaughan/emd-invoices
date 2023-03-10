import { useState, useRef } from 'react';
import { ImageCropWrapper, useImageMethods } from './components';
import { ImageDropContainer } from 'components/Upload/components';

import 'react-image-crop/dist/ReactCrop.css'

const ImageCrop = ({ setImageUpload, setImageID, submitLabel }) => {

	const [imgSrc, setImgSrc] = useState('')
	const [crop, setCrop] = useState()

	const { onSelectImage, onLoadImage } = useImageMethods();

	const hiddenFileInput = useRef(null);

	const onClickHandler = () => {
		hiddenFileInput.current.click()
	};

	const handleOnDrop = () => {
		hiddenFileInput.current.drop();
	}

	const onFileUpload = (e) => {
		!!setImageUpload && setImageUpload(true)
		if (e.target?.files?.length > 0) {
			onSelectImage({
				setCrop,
				setImgSrc,
				file: e.target.files[0]
			})
		}
	};

	return (
		<>
			<ImageDropContainer
				handleClick={onClickHandler}
				onDropHandler={handleOnDrop}
				onFileUpload={onFileUpload}
				inputRef={hiddenFileInput}
				mimeType="image/*"
				maxSize="5MB"
				type="image"
			/>
			<ImageCropWrapper
				crop={crop}
				setCrop={setCrop}
				setImgSrc={setImgSrc}
				setImageID={setImageID}
				setImageUpload={setImageUpload}
				submitLabel={submitLabel}
				onLoadImage={onLoadImage}
				imgSrc={imgSrc}
			/>
		</>
	);
}

export default ImageCrop
