import React, { useState, useEffect } from 'react'
import { ImageInputs } from '.';
import { CloseButton } from 'components/Buttons/Type';
import { Button } from 'components/Buttons';

const CropControls = ({
	aspectRatios,
	previewRef,
	ratioID,
	setRatioID,
	scale,
	setScale,
	rotate,
	setRotate,
	resetStates,
	imageFormat,
	imageFormats,
	setImageFormat,
	completedCrop,
	setImageID,
	onImageDownload,
	submitLabel,
	BASE
}) => {

	const [previewStyle, setPreviewStyle] = useState({
		border: '1px solid var(--slate-300)',
		objectFit: 'contain',
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (completedCrop?.width) {
			setPreviewStyle(prev => ({
				...prev,
				width: completedCrop.width,
				height: completedCrop?.height
			}))
		}
	}, [completedCrop?.height, completedCrop?.width])

	const handleImageDownload = async (e) => {
		e.preventDefault();
		!!setImageID ? setImageID() : onImageDownload();
	};

	return (
		<>
			{completedCrop?.width && (
				<>
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
					<ImageInputs
						scale={scale}
						setScale={setScale}
						rotate={rotate}
						setRotate={setRotate}
						ratioID={ratioID}
						setRatioID={setRatioID}
						imageFormat={imageFormat}
						imageFormats={imageFormats}
						setImageFormat={setImageFormat}
						aspectRatios={aspectRatios}
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
							rest={{ onClick: handleImageDownload }}
						>
							{submitLabel || 'Download'} Image
						</Button>
					</div>
				</>
			)}
		</>
	)
}

export default CropControls
