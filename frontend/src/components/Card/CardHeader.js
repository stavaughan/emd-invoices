import clsx from 'clsx';
import { themeClasses } from 'theme';

const CardHeader = ({
	headerClass,
	titleClass,
	HeadActions,
	title,
	count,
	children
}) => {

	return (
		<div className={clsx(
			'px-3 py-3 border-b border-gray-200 flex-wrap',
			headerClass
		)}>
			{title && (
				<div className={titleClass || themeClasses.headers.card}>
					{title}
					{count && (
						<span className="ms-4 text-indigo-500 text-xs text-nowrap">
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
