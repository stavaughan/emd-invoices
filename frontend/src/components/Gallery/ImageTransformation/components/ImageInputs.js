import { Input, QuantitySelector } from 'components/Forms/Inputs';
import { InputLabel } from 'components/Forms/Inputs/components';
import { Col, Row } from 'components/HTML';
import { useState } from 'react';
import { SelectAspectRatio } from '.';

const ImageInputs = ({
	scale,
	setScale,
	ratioID,
	setRatioID,
	imageFormat,
	imageFormats,
	setImageFormat,
	aspectRatios,
	base
}) => {

	const [quantity, setQuantity] = useState(scale * 100);

	const onScaleImage = (value) => {
		setQuantity(value);
		setScale(value / 100);
	};

	return (
		<div className="container mb-4 p-4 rounded-3 border">
			<Row className="g-3">
				<Col cols="12 md-8 lg-9">
					<SelectAspectRatio
						ratioID={ratioID}
						setRatioID={setRatioID}
						aspectRatios={aspectRatios}
						base={base}
					/>
				</Col>
				<Col cols="12 md-4 lg-3">
					<div className="d-flex flex-column align-items-start g-3">
						<div className="mb-3">
							<InputLabel label="Resize (percent)" />
							<QuantitySelector
								qty={quantity}
								setData={onScaleImage}
							/>
						</div>
						<div>
							<InputLabel label="Image Format" />
							<Input.Dropdown
								id="imagecropselformat"
								selected={imageFormat}
								onChange={setImageFormat}
								optionData={imageFormats}
							/>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default ImageInputs
