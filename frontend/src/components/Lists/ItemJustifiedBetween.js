import React from 'react'
import clsx from 'clsx'

const ItemJustifiedBetween = ({ className, children }) => {
	return (
		<div className={clsx(
			"d-flex justify-content-between align-items-center",
			className
		)}>
			{children}
		</div>
	)
}

export default ItemJustifiedBetween