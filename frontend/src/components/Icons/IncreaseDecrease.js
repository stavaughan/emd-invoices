import { ArrowUp, ArrowDown } from 'globals/img';
import clsx from 'clsx';

const IncreaseDecrease = ({ number, direction, size, children }) => {

	return (
		<span className="d-flex align-items-center">
			<span className={clsx(
				'svg-icon svg-icon-3 me-2',
				`svg-icon-${direction === 'up' ? 'success' : 'danger'}`
			)}>
				{direction === 'up' ? <ArrowUp /> : <ArrowDown />}
			</span>
			{children}
		</span>
	)
}

export default IncreaseDecrease
