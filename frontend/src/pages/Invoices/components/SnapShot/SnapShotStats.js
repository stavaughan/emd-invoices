import React from 'react'
import { SnapShotStat } from '.'
import { useMobile } from 'hooks'

const SnapShotStats = ({
	setSnapShotFilter,
	single,
	snapShot,
	color
}) => {

	const { isXSmall } = useMobile()

	return (
		<div
			className="d-flex flex-column text-sm gap-3"
			style={{
				...(!single && !isXSmall) && {
					minHeight: '148px'
				},
				color,
				width: '100%',
			}}
		>
			{snapShot?.stats?.length ? snapShot?.stats
				.filter(_ => _.count > 0)
				.map(stat => (
					<SnapShotStat
						key={stat._id}
						stat={stat}
						setSnapShotFilter={setSnapShotFilter}
					/>
				)) : null}
		</div>
	)
}

export default SnapShotStats
