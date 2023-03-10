import { RowImage, FetchedImageThumbnail } from '.';

const RowImageCol = ({
	item,
	upload,
	setResults,
	fileType = ''
}) => {

	const apiImage = item?.apiImage || {};

	return (
		<td style={{ width: '7rem' }}>
			{apiImage?.pid ? (
				<FetchedImageThumbnail
					link={item?.link}
					pid={apiImage.pid}
				/>
			) : (
				<RowImage
					item={item}
					upload={upload}
					setResults={setResults}
					fileType={fileType}
				/>
			)}
		</td>
	)
}

export default RowImageCol
