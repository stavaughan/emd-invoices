import { FetchedImage } from 'components/Gallery';
import { SkeletonElem } from 'components/LoadingSkeleton';

const PreviewImage = ({
	pid,
	width,
	height,
	loading,
	selectedName,
	selectedURL
}) => {

	const style = {
		width,
		height: height || '100%'
	}

	return (
		<>
			{selectedURL
				? <img src={selectedURL} alt={selectedName} {...style} />
				: (
					<>
						{loading
							? <SkeletonElem {...style} />
							: <FetchedImage pid={pid} {...style} />}
					</>
				)}
		</>
	)
}

export default PreviewImage
