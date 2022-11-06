import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const StackRoundIcon = ({
	size,
	color1,
	color2,
	icon,
	spin,
	iconSize,
	className,
	far = ''
}) => {

	return (
		<span className={clsx(
			'text-centered',
			size && `fs-${size}`,
			className,
			'd-print-none'
		)}>
			<span className={clsx(
				'fa-stack',
				`fa-${iconSize || "1x"}`,
				color1
			)}>
				<FaIcon
					icon="circle"
					className='fa-stack-2x'
				/>
				<FaIcon
					icon={far ? ['far', icon] : icon}
					spin={spin || false}
					className={clsx(
						'fa-stack-1x',
						color2
					)} />
			</span>
		</span>
	);
};

export default StackRoundIcon;
