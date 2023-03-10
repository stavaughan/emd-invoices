import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Col } from 'components/HTML';
import TitleDescriptionLarge from './TitleDescriptionLarge';
import { useMobile } from 'hooks';

import Classes from './SectionIcon.module.css';

const SectionIconTitle = ({
	icon,
	title,
	description,
	iconColor,
	titleClass,
	subTitleClass,
	stylesTitle,
	stylesSubTitle
}) => {

	const { isXSmall } = useMobile();

	return (
		<Col cols="12" className={clsx(
			"d-flex align-items-start mb-4",
			isXSmall && "me-3"
		)}>
			{icon && (
				<div className={clsx(
					Classes['icon-circle'],
					'flex-shrink-0 ms-1 me-4 my-auto',
					iconColor
				)}>
					<FAIcon icon={icon} />
				</div>
			)}
			<TitleDescriptionLarge
				title={title}
				description={description}
				titleClass={titleClass}
				subTitleClass={subTitleClass}
				stylesTitle={stylesTitle}
				stylesSubTitle={stylesSubTitle}
			/>
		</Col>
	)
}

export default SectionIconTitle
