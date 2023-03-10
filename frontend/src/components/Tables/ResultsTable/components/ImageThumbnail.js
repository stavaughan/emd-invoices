import React from 'react';

import ImgClasses from "components/Gallery/styles/images.module.css";

const ImageThumbnail = ({ image }) => {
	return (
		<span className={ImgClasses["image-thumbnail"]}>
			<img src={image.url} alt={image.name} />
		</span>
	)
}

export default ImageThumbnail
