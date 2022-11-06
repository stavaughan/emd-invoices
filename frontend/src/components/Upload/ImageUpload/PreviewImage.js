import { FetchedImage } from 'components/Gallery';
import { SkeletonElem } from 'components/LoadingSkeleton';

const PreviewImage = (props) => {

	const {
		pid,
		width,
		height,
		loading,
		selectedName,
		selectedURL
	} = props;

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
