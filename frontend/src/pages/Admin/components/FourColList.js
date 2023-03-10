import { Row, Col } from 'components/HTML';

const FourColList = ({ content, dataID }) => {

	const dataArray = [...Object.entries(content)];

	return (
		<Row>
			{dataArray.map((item, idx) => (
				<Col
					key={dataID + idx}
					cols="6 md-3"
					className="mb-2 mb-lg-0"
				>
					<span className="small fw-bolder text-uppercase">
						{item[0]}
					</span>
					<h5 className="mb-0">
						{item[1]}
					</h5>
				</Col>
			))}
		</Row>
	)
}

export default FourColList
