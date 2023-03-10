import React from 'react';
import { Row } from 'components/HTML';
import { MultiUploadImage } from '.';
import { v4 as uuidv4 } from 'uuid';

const MultiImageResults = ({
	images,
	setImages,
	setImageIDs,
	setValue,
	api
}) => {

	return (
		<div className="container">
			<Row className="g-3">
				{images.map(image => {
					const idKey = uuidv4()
					return (
						<MultiUploadImage
							key={idKey}
							id={idKey}
							api={api}
							image={image}
							setImages={setImages}
							setImageIDs={setImageIDs}
							setValue={setValue}
						/>
					)
				})}
			</Row>
		</div>
	)
}

export default MultiImageResults
