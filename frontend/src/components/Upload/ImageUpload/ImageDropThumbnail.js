import { PlaceHolderThumbnail } from '.'
import clsx from 'clsx';

import Classes from 'components/Gallery/styles/images.module.css';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const ImageDropThumbnail = ({ width, height }) => {
	return (
		<div
			className={clsx(Classes['image-placeholder-outline'], 'rounded-3')}
			style={{ width, height: '100%' }}
		>
			<PlaceHolderThumbnail width={width} height={height}>
				<FAIcon icon="image" className={Classes.placeholder} />
			</PlaceHolderThumbnail>
		</div>
	)
}

export default ImageDropThumbnail
