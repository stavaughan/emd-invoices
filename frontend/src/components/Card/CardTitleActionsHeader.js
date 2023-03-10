import { useMemo } from 'react';
import { themeClasses } from 'theme';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const CardTitle = ({ title, count }) => (
	<>
		{title}
		{count && (
			<span className={themeClasses.card.header.count}>
				{count} items
			</span>
		)}
	</>
);

const CardTitleActionsHeader = ({
	title,
	count,
	description,
	centeredContent,
	btnCount = 4,
	section,
	children
}) => {

	const { header } = themeClasses.card;

	const { isXSmall } = useMobile();

	const titleElem = useMemo(() => (
		<CardTitle title={title} count={count} />
	), [title, count]);

	return (
		<div className={header.withActions.wrapper}>
			<div className={header.withActions.container}>
				<div className="ms-3">
					{section ? (
						<div className={header.sectionTitle}>
							{titleElem}
						</div>
					) : (
						<h3 className={header.title}>
							{titleElem}
						</h3>
					)}
					{description && <p className={header.description}>{description}</p>}
				</div>
				{centeredContent}
				<div className={clsx(
					header.withActions.actions,
					(isXSmall && btnCount > 4) && 'ms-3 mt-3 mb-1'
				)}>
					{children}
				</div>
			</div>

		</div>
	)
}

export default CardTitleActionsHeader
