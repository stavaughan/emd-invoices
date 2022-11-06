import { ImagesUpload } from 'components/Upload/ImageUpload';
import { PdfFile } from 'globals/img';

import Classes from '../ResultsTable.module.css'
import ImgClasses from 'components/Gallery/styles/images.module.css';

const RowImage = ({ item, upload, setResults }) => {

	const onImageUpload = (fileObj) => {
		if (setResults) {
			setResults(prev => prev.map(file => file._id === item._id ? { ...file, image: fileObj } : file));
		}
	};

	return (
		<>
			{item?.image?.isImage ? (
				<span className={ImgClasses["image-thumbnail"]}>
					<img src={item?.image.url} alt={item?.image.name} />
				</span>
			) : (
				<span className={`${Classes['image-placeholder']} bg-transparent`}>
					{upload ? (
						<ImagesUpload
							type="file"
							mimeType="image/*"
							maxSize="1MB"
							noLabel={true}
							onUpload={onImageUpload}
							base64
						/>
					) : (
						<PdfFile />
					)}
				</span>
			)}
		</>
	)
}

export default RowImage
