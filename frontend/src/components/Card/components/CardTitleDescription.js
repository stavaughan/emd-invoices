import { SkeletonElem } from 'components/LoadingSkeleton';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const CardTitleDescription = ({
	title,
	description,
	colorSubTitle,
	stylesTitle,
	stylesSubTitle,
	notReady
}) => {

	const { isXSmall } = useMobile();

	return (
	<div className="mx-2 mx-sm-3">
		<div
			className={clsx(colorSubTitle, 'text-sm mb-1')}
			{...stylesSubTitle && { style: stylesSubTitle }}
		>
			{notReady ? <SkeletonElem /> : description}
		</div>
		<div
			className={clsx(
				'font-semibold',
				isXSmall ? 'text-wrap' : 'text-lg leading-5',
			)}
			{...stylesTitle && { style: stylesTitle }}
		>
			{notReady ? <SkeletonElem /> : title}
		</div>
	</div>
)};

export default CardTitleDescription
