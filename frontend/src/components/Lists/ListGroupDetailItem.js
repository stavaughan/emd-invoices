import clsx from 'clsx';
import { FlexListItem } from 'components/Lists';

const ListGroupDetailItem = ({ label, inline, id, length = 0, nested, children }) => {

	return (
		<div className={clsx('list-group-item', length > 1 && 'py-3')} id={id}>
			{inline ? (
				<FlexListItem
					label={label}
					className="text-muted"
					justify="start"
					nested={nested}
				>
					{children}
				</FlexListItem>
			) : (
				<div className="my-2 position-relative">
					<div className="mb-2 text-muted">
						{label}
					</div>
					<div className="ps-1">
						{children}
					</div>
				</div>
			)}
		</div>
	);
};

export default ListGroupDetailItem;
