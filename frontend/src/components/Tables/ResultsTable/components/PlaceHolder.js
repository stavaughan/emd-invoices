import React from 'react'
import { PdfFile } from "globals/img";
import { PlaceholderImage } from ".";

const PlaceHolder = ({ fileType }) => {
	return (
		<>
			{fileType === "pdf" ? (
				<PdfFile />
			) : (
				<PlaceholderImage
					width="5.46rem"
					height="5.46rem"
				/>
			)}
		</>
	)
}

export default PlaceHolder
