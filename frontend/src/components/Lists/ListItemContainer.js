import clsx from 'clsx';

const ListItemContainer = ({ className, border, children }) => {

    return (
        <li className={clsx(
			'list-group-item d-flex justify-content-between align-items-center border-0 py-2',
			border && 'border-bottom border-light',
			className
		)}>
            {children}
        </li>
    );
};

export default ListItemContainer;
