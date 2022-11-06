import { Row, Col } from 'components/HTML'
import { SelectAspectRatio } from '.'
import { InputCol } from 'components/Forms/components';

const ImageInputs = ({ scale, setScale, ratioID, setRatioID, base }) => {

	const onScaleImage = (value) => {
		const number = Number(value)
		setScale(number)
	};

	return (
		<div className="container mb-4 p-4 rounded-3 border">
			<Row className="g-3">
				<Col cols="12 md-8 lg-9">
					<SelectAspectRatio
						ratioID={ratioID}
						setRatioID={setRatioID}
						base={base}
					/>
				</Col>
				<InputCol.Number
					cols="4"
					type="number"
					step="0.1"
					length="4"
					value={scale}
					onChange={onScaleImage}
					label="Resize"
				/>
			</Row>
		</div>
	)
}

export default ImageInputs
