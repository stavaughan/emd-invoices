import clsx from 'clsx';
import { themeClasses } from 'theme';

const CardHeader = ({
	headerClass,
	titleClass,
	HeadActions,
	description,
	title,
	count,
	children
}) => {

	return (
		<div className={clsx(
			'px-3 py-3 border-b flex-wrap',
			headerClass
		)}>
			{title && (
				<div className={clsx(
					'd-flex justify-content-between align-items-center flex-wrap',
					titleClass || themeClasses.headers.card
				)}>
					<div className="d-flex flex-column">
						{title}
						{description && (
							<div className={themeClasses.card.header.descriptionSmall}>
								{description}
							</div>
						)}
					</div>
					{count && (
						<span className="text-indigo-500 text-xs">
							{count} items
						</span>
					)}
				</div>
			)}
			{HeadActions && HeadActions()}
			{children}
		</div>
	);
};

export default CardHeader;
