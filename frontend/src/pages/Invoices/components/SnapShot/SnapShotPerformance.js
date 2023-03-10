import { PerformanceIndicator } from 'components/Widgets';

const SnapShotPerformance = ({
	amount = '',
	formAmount = '',
	margin
}) => {

	return (
		<div className={`mt-${margin || '2'}`}>
			<PerformanceIndicator
				change={amount}
				color={amount > 0 ? 'text-success' : 'text-danger'}
				size="5"
			>
				<div className="d-flex justify-content-between align-items-center">
					<div className="text-sm font-bold">
						{formAmount}
					</div>
				</div>
			</PerformanceIndicator>
		</div>
	)
}

export default SnapShotPerformance;
