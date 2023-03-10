import React from 'react';
import { alertProps } from 'components/Alerts/components';
import { Card } from 'components/Card';
import { SnapShotBody, SnapShotFooter } from '.';

const InvoicesSnapShot = ({
	setSnapShotFilter,
	snapShot,
	performance,
	single = false
}) => {

	const { colors } = alertProps.indigo;

	if(!snapShot?._id) return null;

	return (
		<div className='w-100'>
			<Card
				className="rounded-2 shadow mb-2 gap-1"
				style={{
					backgroundColor: colors?.bgColor2 || colors?.bgColor,
					borderTop: `10px solid ${colors?.color3 || colors?.color}`
				}}
			>
				<SnapShotBody
					snapShot={snapShot}
					color={colors?.color}
					color2={colors?.color2 || colors?.color}
					color3={colors?.color3 || colors?.color}
					setSnapShotFilter={setSnapShotFilter}
					single={single}
				/>
				<SnapShotFooter
					performance={performance}
					bgColor={colors?.bgColor}
					color={colors?.color2 || colors?.color}
				/>
			</Card>
		</div>
	)
}

export default InvoicesSnapShot
