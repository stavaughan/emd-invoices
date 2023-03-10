import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Buttons';
import { useAllowed, useMobile } from 'hooks';
import { useButtonProps } from '.';
import clsx from 'clsx';

const ItemsActionIcons = (props) => {

	const { isXSmall } = useMobile();
	const { allowed } = useAllowed();
	const { buttonProps } = useButtonProps(props);

	return (
		<div className="d-flex justify-content-center align-items-center gap-2">
			{allowed ? buttonProps.map(elem => {
				return (
					<Button
						key={elem._id}
						className={clsx('p-0', isXSmall ? 'text-xxs' : 'text-xs')}
						rest={{
							id: elem._id,
							onClick: elem.handleClick,
							...elem?.modalProps
						}}
					>
						{elem.icon && <FAIcon icon={elem.icon} className={elem.iconClass} />}
						{elem?.label && <span className="text-primary">{elem.label}</span>}
					</Button>
				)
			}) : null}
		</div>
	);
};

export default ItemsActionIcons;
