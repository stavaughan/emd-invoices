import { CardFooter } from 'components/Card';
import { SnapShotPerformance } from '.';

const SnapShotFooter = ({
	performance,
	bgColor,
	color,
}) => {

	const change1Test = performance?.amount && !isNaN(performance?.amount)
	const change2Test = performance?.percent && !isNaN(performance?.percent)

	console.log({
		performance: performance?.percent,
	})

	return (
		<CardFooter
			className="d-flex justify-content-center align-items-center"
			style={{
				backgroundColor: bgColor,
				color,
				minHeight: '92px',
			}}
		>
			{change1Test || change2Test ? (
				<div className='d-flex flex-column align-items-center p-3 bg-dark rounded-3'>
					<h5 className="text-xs">Change YOY</h5>
					{change1Test ? (
						<SnapShotPerformance
							amount={performance?.amount}
							formAmount={performance?.amountUSD}
						/>
					) : null}
					{change2Test ? (
						<SnapShotPerformance
							amount={performance?.percent}
							formAmount={`${Number(performance?.percent).toFixed(0).toLocaleString('en-US')}%`}
						/>
					) : null}
				</div>
			) : null}
		</CardFooter>
	)
}

export default SnapShotFooter
