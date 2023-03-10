import React from 'react';
import { ImageDropContainer, MultiImageResults, useUploadMultiImages } from '.';

const MultiUploadImages = ({
	api,
	clearImages,
	setValue,
	setImageIDs
}) => {

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject,
		maxSizeMessage,
		images,
		setImages
	} = useUploadMultiImages({ clearImages, setImageIDs })

	return (
		<div className="align-items-center">
			<ImageDropContainer
				acceptedFiles
				getRootProps={getRootProps}
				getInputProps={getInputProps}
				isDragActive={isDragActive}
				isDragReject={isDragReject}
				maxSizeMessage={maxSizeMessage}
			/>
			{images?.length ? (
				// Used on bulk invoices form and inventory form
				// drag and drop images
				<MultiImageResults
					images={images}
					setImages={setImages}
					setImageIDs={setImageIDs}
					setValue={setValue}
					api={api}
				/>
			) : null}
		</div>

	);
};

export default MultiUploadImages;
