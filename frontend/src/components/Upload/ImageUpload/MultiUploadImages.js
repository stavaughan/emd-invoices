import { useEffect } from 'react';
import { Row } from 'components/HTML';
import { MultiUploadImage, useUploadMultiImages } from '.';
import { Global } from 'globals/js';

import Classes from '../styles/Upload.module.css'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const MultiUploadImages = ({
	id = '',
	api,
	clearImages,
	setValue,
	setImageIDs
}) => {

	const {
		images,
		setImages,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject,
		maxSizeMessage
	} = useUploadMultiImages({ clearImages, setImageIDs })

	useEffect(() => () => { images.forEach((image) => URL.revokeObjectURL(image.preview)) }, [images]);

	return (
		<div>
			<div
				{...getRootProps({
					className: `${Classes.dropzone} rounded-3 my-3 py-4 text-slate-400`
				})}
			>
				<FAIcon icon="images" className="fa-fw fa-2x text-slate-400" />
				<input
					{...id && { id }}
					{...getInputProps()}
				/>
				<div className="text-sm font-normal fst-italic pt-3">
					{(!isDragActive && !maxSizeMessage) && 'Click here or drop your images to upload!'}
					{isDragActive && !isDragReject && "Drop it like it's hot!"}
					{isDragReject && <span className="text-danger">File type not accepted, sorry!</span>}
					{maxSizeMessage && <span className="text-danger">{maxSizeMessage}</span>}
				</div>
			</div>
			{images?.length ? (
				<Row className="g-3">
					{images.map(image => (
						<MultiUploadImage
							key={Global.itemKey(image.path)}
							id={Global.itemKey(image.path)}
							api={api}
							image={image}
							setImages={setImages}
							setImageIDs={setImageIDs}
							setValue={setValue}
						/>
					))}
				</Row>
			) : null}
		</div>

	);
};

export default MultiUploadImages;
