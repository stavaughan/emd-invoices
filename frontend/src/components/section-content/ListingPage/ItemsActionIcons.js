import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Buttons';
import { useAllowed, useMobile } from 'hooks';
import { useButtonProps } from '.';
import clsx from 'clsx';

const ItemsActionIcons = (props) => {

	const { isXSmall } = useMobile();
	const { allowed } = useAllowed();
	const { buttonProps } = useButtonProps(props)

	return (
		<>
			{allowed ? buttonProps.map((elem, idx) => {
				const last = buttonProps.length - 1;
				return (
					<Button
						key={elem._id}
						className={clsx(
							'p-0',
							isXSmall ? 'text-xs' : 'text-sm',
							idx !== last && 'me-2'
						)}
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
		</>
	);
};

export default ItemsActionIcons;
