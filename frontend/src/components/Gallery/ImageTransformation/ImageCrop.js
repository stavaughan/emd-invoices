import { useState, useRef } from 'react';
import { ImageCropContainer, useImageMethods } from './components';
import { DropzoneWrapper } from 'components/Upload/components';

import 'react-image-crop/dist/ReactCrop.css'

const ImageCrop = ({ setImageUpload, setImageID, submitLabel }) => {

	const { onSelectImage } = useImageMethods();

    const [imgSrc, setImgSrc] = useState('')
    const [crop, setCrop] = useState()

    const hiddenFileInput = useRef(null);

    const handleOnClick = () => hiddenFileInput.current.click();

    const handleOnDrop = (e) => {
        e.preventDefault();
        hiddenFileInput.current.drop();
    }

    const onFileUpload = (e) => {
        !!setImageUpload && setImageUpload(true)
        if (e.target?.files?.length > 0) {
            onSelectImage(setCrop, setImgSrc, e.target.files[0])
        }
    };

    return (
        <DropzoneWrapper
            handleClick={handleOnClick}
            onDropHandler={handleOnDrop}
            onFileUpload={onFileUpload}
            inputRef={hiddenFileInput}
            mimeType="image/*"
            maxSize="1MB"
            imageSelected={imgSrc}
            type="image"
        >
            <ImageCropContainer
                crop={crop}
                setCrop={setCrop}
                setImgSrc={setImgSrc}
                setImageID={setImageID}
                setImageUpload={setImageUpload}
                submitLabel={submitLabel}
                imgSrc={imgSrc}
            />
        </DropzoneWrapper>
    );
}

export default ImageCrop
