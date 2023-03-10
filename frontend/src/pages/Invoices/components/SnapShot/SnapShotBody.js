import { CardBody } from 'components/Card';
import { SnapShotStats } from '.';

const SnapShotBody = ({
	setSnapShotFilter,
	single,
	snapShot,
	color,
	color2,
	color3
}) => {

	return (
		<CardBody>
			<div className="d-flex justify-content-center">
				<div
					className="d-flex flex-column align-items-center gap-3 pb-3 pt-1"
					style={{ width: '200px' }}
				>
					<div className="h2 font-bold" style={{ color: color2 }}>
						{snapShot?.label}
						{snapShot?.subTitle && (
							<div className="text-xs" style={{ color: color3 }}>
								{snapShot?.subTitle}
							</div>
						)}
					</div>
					{snapShot?.count && (
						<div
							className="badge bg-info text-white"
							style={{ color: color2 }}
						>
							{`${snapShot?.count} invoices`}
						</div>
					)}
					{snapShot?.amountUSD !== null && (
						<div className="h2 font-bold" style={{ color }}>
							{snapShot?.amountUSD}
						</div>
					)}
					<SnapShotStats
						setSnapShotFilter={setSnapShotFilter}
						single={single}
						snapShot={snapShot}
						color={color2}
					/>
				</div>
			</div>
		</CardBody>
	)
}

export default SnapShotBody
