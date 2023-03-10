import { Card, CardBody } from 'components/Card';
import { LabelTitle } from 'components/Text';
import { Col, Row } from 'components/HTML';
import { PdfFile } from 'globals/img';
import clsx from 'clsx';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/Upload.module.css';

const ResultImage = ({ file, setFiles }) => {

	const image = file?.image;
	const content = file?.content;

	const onDeleteHandler = (e) => {
		e.preventDefault();
		setFiles(prev => prev.filter(_ => _._id !== file._id));
	};

	return (
		<Col cols="md-6 lg-4">
			<Card className="mb-3 shadow">
				{image?.url ? (
					<img src={image.url} className="card-img-top" alt={image.name} />
				) : (
					<div
						className={clsx(
							Classes['card-img-top'],
							Classes['image-placeholder'],
							'bg-light py-3'
						)}
						style={{ height: "10rem" }}
					>
						<PdfFile />
					</div>
				)}
				<CardBody>
					<Row className="text-start small">
						<Col cols="12" className="mb-0 pb-0">
							<span className="h-6 text-truncate py-0">
								<LabelTitle label="File name" value={image.name} />
							</span>
							<button
								type="button"
								className="btn btn-link-blue btn-sm p-0 float-end"
								onClick={onDeleteHandler}
							>
								<FaIcon icon="times" className="text-danger" />
							</button>
						</Col>
						<Col cols="12">
							<LabelTitle label="File size" value={content[1]} />
						</Col>
						<Col cols="12">
							<LabelTitle label="Modified date" value={content[2]} />
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export default ResultImage
