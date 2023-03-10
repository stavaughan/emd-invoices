import React from 'react'
import { ImageCropComponent } from '.';
import { useImageCrop, CropControls } from '.';

const ImageCropWrapper = ({
	crop,
	setCrop,
	imgSrc,
	submitLabel,
	setImageUpload,
	onLoadImage,
	setImageID,
	setImgSrc
}) => {

	const { imageProps, controlsProps, scale, rotate } = useImageCrop({
		...setImageUpload && { setImageUpload },
		setImgSrc,
		setCrop
	})

	return (
		<div>
			{imgSrc && (
				<div className="d-flex justify-content-center">
					<ImageCropComponent
						crop={crop}
						setCrop={setCrop}
						onLoadImage={onLoadImage}
						imgSrc={imgSrc}
						scale={scale}
						rotate={rotate}
						{...imageProps}
					/>
				</div>
			)}
			<CropControls
				{...controlsProps}
				submitLabel={submitLabel}
				setImageID={setImageID}
				scale={scale}
				rotate={rotate}
			/>
		</div>
	)
}

export default ImageCropWrapper
