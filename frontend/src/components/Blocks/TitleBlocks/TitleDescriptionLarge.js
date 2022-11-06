import { Col, Row } from 'components/HTML';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const TitleDescriptionLarge = ({
	title,
	description,
	titleClass,
	subTitleClass,
	stylesTitle,
	stylesSubTitle
}) => {

	const { isXSmall } = useMobile();

	return (
		<Row>
			<Col cols="12" className="my-auto">
				<h2
					className={clsx(titleClass, isXSmall && 'h3')}
					{...stylesTitle && { style: stylesTitle }}
				>
					{title}
				</h2>
			</Col>
			{(description && !isXSmall) && (
				<Col cols="12" className="my-auto w-75">
					<div
						className={subTitleClass}
						{...stylesSubTitle && { style: stylesSubTitle }}
					>
						{description}
					</div>
				</Col>
			)}
		</Row>
	)
}

export default TitleDescriptionLarge
