import { useState, useEffect } from 'react'
import { ImageInputs, ImageCropComponent } from '.';
import { CloseButton } from 'components/Buttons/Type';
import { Button } from 'components/Buttons';
import { useImageCrop } from '.';

const ImageCropContainer = ({ crop, setCrop, imgSrc, submitLabel, ...props }) => {

	const [previewStyle, setPreviewStyle] = useState({
		border: '1px solid var(--slate-300)',
		objectFit: 'contain',
		width: 0,
		height: 0,
	});

	const {
		aspectRatio,
		previewRef,
		imageRef,
		ratioID,
		setRatioID,
		completedCrop,
		setCompletedCrop,
		scale,
		setScale,
		rotate,
		setRotate,
		onImageDownload,
		resetStates,
		BASE
	} = useImageCrop({
		setImageUpload: props.setImageUpload,
		setImageID: props.setImageID,
		setImgSrc: props.setImgSrc,
		setCrop
	})

	useEffect(() => {
		if(completedCrop?.width) {
			setPreviewStyle(prev => ({
				...prev,
				width: completedCrop.width,
				height: completedCrop.height
			}))
		}
		return () => setPreviewStyle(prev => ({
			...prev,
			width: 0,
			height: 0
		}))
	}, [completedCrop])

	return (
		<div>
			{imgSrc && (
				<div className="d-flex justify-content-center">
					<ImageCropComponent
						crop={crop}
						setCrop={setCrop}
						imgSrc={imgSrc}
						imageRef={imageRef}
						scale={scale}
						rotate={rotate}
						aspectRatio={aspectRatio}
						setCompletedCrop={setCompletedCrop}
					/>
				</div>
			)}
			{completedCrop?.width ? (
				<div className="d-flex justify-content-center align-items-start my-4">
					<div className=" me-3">
						<canvas
							ref={previewRef}
							className="rounded d-block mx-auto shadow-lg"
							style={previewStyle}
						/>
					</div>
					<CloseButton handleClose={resetStates} />
				</div>
			) : null}
			{completedCrop?.width ? (
				<>
					<ImageInputs
						scale={scale}
						setScale={setScale}
						rotate={rotate}
						setRotate={setRotate}
						ratioID={ratioID}
						setRatioID={setRatioID}
						base={BASE}
					/>
					<div className="mb-3 text-center">
						<Button
							className="btn-sm text-gray-500 me-3"
							rest={{ onClick: resetStates }}
						>
							Cancel
						</Button>
						<Button
							className="btn-sm btn-bd-primary-indigo"
							rest={{ onClick: onImageDownload }}
						>
							{submitLabel || 'Download'} Image
						</Button>
					</div>
				</>
			) : null}
		</div>
	)
}

export default ImageCropContainer
