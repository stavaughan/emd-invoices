import React from 'react'
import { controlProps } from 'globals/js';
import { FetchedImage } from 'components/Gallery';

import Classes from 'components/Gallery/styles/images.module.css';

const FetchedImageThumbnail = ({ link, pid }) => {
	return (
		<div className={Classes["image-thumbnail"]}>
			{link ? (
				<a {...controlProps.newTab(link)}>
					<FetchedImage pid={pid} width='7rem' />
				</a>
			) : <FetchedImage pid={pid} width='7rem' />}
		</div>
	)
}

export default FetchedImageThumbnail
