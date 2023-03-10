import { Col } from 'components/HTML';
import clsx from 'clsx';
import { useMobile } from 'hooks';

const AspectRatio = ({ ratioID, setRatioID, ratio, width, height }) => {

	const { isXSmall } = useMobile();

	return (
		<Col key={ratio._id} cols="12 md-6">
			<div className="d-flex justify-content-start align-items-center">
				<div
					className={clsx(
						'btn p-0',
						ratio._id === ratioID
							? 'bg-primary-soft border border-2 border-primary'
							: 'bg-light border border-2 border-gray'
					)}
					style={{ width, height }}
					onClick={() => setRatioID(ratio._id)}
				>
				</div>
				<div className={clsx(
					isXSmall ? 'text-xs' : 'text-sm',
					'ms-3 my-auto',
					ratio._id === ratioID
						? 'text-primary font-medium'
						: 'text-secondary'
				)}>
					{ratio.label}
				</div>
			</div>
		</Col>
	)
};

export default AspectRatio
