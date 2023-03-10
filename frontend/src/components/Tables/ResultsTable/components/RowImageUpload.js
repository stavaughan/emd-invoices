import React, { useCallback } from 'react'
import { ImagesUpload } from "components/Upload/ImageUpload";
import { PlaceHolder } from ".";

import Classes from "../ResultsTable.module.css";

const wrapClass = `${Classes["image-placeholder"]} bg-transparent`;
const wrapStyle = { marginBottom: "5px" };
const uploadStyle = { width: "5.46rem", height: "5.46rem" };

const RowImageUpload = ({
	item,
	upload,
	setResults,
	fileType
}) => {

	const onImageUpload = useCallback((fileObj) => {
		if (setResults) {
			setResults((prev) =>
				prev.map((file) =>
					file._id === item._id
						? {
							...file,
							image: fileObj
						} : file
				)
			);
		}
	}, [item, setResults]);

	const uploadProps = {
		type: "file",
		mimeType: "image/*",
		maxSize: "5MB",
		noLabel: true,
		onUpload: onImageUpload,
		style: uploadStyle,
		base64: true
	};

	return (
		<span className={wrapClass} style={wrapStyle}>
			{upload
				? <ImagesUpload {...uploadProps} />
				: <PlaceHolder fileType={fileType} />
			}
		</span>
	)
}

export default RowImageUpload
