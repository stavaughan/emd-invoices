import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const HorTwoSteps = ({
	completeOne,
	completeTwo,
	labelOne,
	labelTwo
}) => {
	return (
		<div className="position-relative px-5 mx-5 text-center">
			<div className="position-relative m-4">
				<div className="progress" style={{ height: completeOne ? '2px' : '1px' }}>
					<div
						className="progress-bar"
						role="progressbar"
						aria-label="Progress"
						style={{
							width: completeOne ? '100%' : '0%',
							ariaValueNow: completeOne ? '100' : '0',
							ariaValueMin: "0",
							ariaValueMax: "100"
						}}></div>
				</div>
				<div
					className="position-absolute top-0 start-0 translate-middle"
					style={{ width: '8rem', height: '2rem' }}
				>
					<span className="badge rounded-pill bg-primary py-2 px-3 font-bold">
						{completeOne ? (
							<FAIcon icon="check-circle" className="text-white me-2" />
						) : null}
						{labelOne}
					</span>
				</div>
				<div
					className="position-absolute top-0 start-100 translate-middle"
					style={{ width: '8rem', height: '2rem' }}
				>
					<span className={clsx(
						'badge rounded-pill',
						completeOne ? 'bg-primary' : 'bg-primary-soft',
						'py-2 px-3 font-bold'
					)}>
						{completeTwo ? (
							<FAIcon icon="check-circle" className="text-white me-2" />
						) : null}
						{labelTwo}
					</span>
				</div>
			</div>
		</div>
	)
}

export default HorTwoSteps
