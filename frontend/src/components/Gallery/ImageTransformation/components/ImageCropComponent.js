import { useEffect, useState } from 'react'
import ReactCrop from 'react-image-crop'

const ImageCropComponent = ({
	crop,
	setCrop,
	imgSrc,
	imageRef,
	scale,
	rotate,
	aspectRatio,
	setCompletedCrop,
	onLoadImage
}) => {

	const [currentTarget, setCurrentTarget] = useState(null);

	useEffect(() => {
		if (currentTarget?.width) {
			onLoadImage({
				imageRef,
				currentTarget,
				aspectRatio,
				setCrop
			})
		}
	}, [currentTarget, imageRef, aspectRatio, setCrop, onLoadImage])

	const onImageLoad = (e) => setCurrentTarget(e.currentTarget);

	const onCropChange = (_, percentCrop) => {
		setCrop(percentCrop)
	};

	return (
		<ReactCrop
			crop={crop}
			onChange={onCropChange}
			onComplete={setCompletedCrop}
			aspect={aspectRatio}
			className="rounded d-block mx-auto"
		>
			{imgSrc ? (
				<img
					alt="crop"
					src={imgSrc}
					style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
					onLoad={onImageLoad}
				/>
			) : null}
		</ReactCrop>
	)
}

export default ImageCropComponent
