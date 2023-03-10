import React from 'react'

const SnapShotStat = ({ stat, setSnapShotFilter }) => {

	const onClickHandler = (e) => {
		e.stopPropagation()
		setSnapShotFilter(stat)
	}

	return (
		<div
			className="d-flex justify-content-between align-items-center flex-wrap"
			style={{
				width: '100%',
				cursor: 'pointer',
			}}
			onClick={onClickHandler}
		>
			<div
				className="d-flex justify-content-between align-items-center"
				style={{ width: '140px' }}
			>
				{stat.label}
				<div className="flex-shrink badge rounded-pill py-0 px-1 bg-primary-soft ms-2">
					{stat.count}
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center text-white">
				{stat.amountUSD}
			</div>
		</div>
	)
}

export default SnapShotStat
