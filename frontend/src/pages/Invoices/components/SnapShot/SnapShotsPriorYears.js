import { InvoicesSnapShot } from '.';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const SnapShotsPriorYears = ({ snapShotData, setSnapShotFilter }) => {

	const { isXSmall } = useMobile();

	return (
		<div className={clsx(
			'gap-3 d-flex',
			isXSmall ? "flex-column" : "flex-row",
		)}>
			{snapShotData?.remainingCols?.length ? snapShotData.remainingCols.map((snapShot, idx) => {
				const perf = snapShotData?.remainingColsPerf[idx];
				return (
					<InvoicesSnapShot
						key={snapShot._id}
						snapShot={snapShot}
						performance={perf}
						setSnapShotFilter={setSnapShotFilter}
					/>
				)
			}) : null}
		</div>
	)
}

export default SnapShotsPriorYears
