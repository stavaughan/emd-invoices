import { ImageThumbnail, RowImageUpload } from ".";

const RowImage = ({
	item,
	upload,
	setResults,
	fileType
}) => {
	
	return (
		<>
			{item?.image?.isImage
				? <ImageThumbnail image={item?.image} />
				: (
					<RowImageUpload
						item={item}
						upload={upload}
						setResults={setResults}
						fileType={fileType}
					/>
				)}
		</>
	);
};

export default RowImage;
