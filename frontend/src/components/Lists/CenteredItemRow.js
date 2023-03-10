import React from 'react'
import { ItemJustifiedBetween } from '.'

const CenteredItemRow = ({ className, contentLeft, contentRight }) => {
	return (
		<ItemJustifiedBetween className={className}>
			<div className="d-flex align-items-center">
				{contentLeft}
			</div>
			<div className="d-flex align-items-center">
				{contentRight}
			</div>
		</ItemJustifiedBetween>
	)
}

export default CenteredItemRow