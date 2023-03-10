import React from 'react'
import clsx from 'clsx'

const BadgePill = ({ label, color, className }) => {
	return (
		<span className={clsx(
			'badge',
			color || 'bg-primary',
			className
		)}>{label}</span>
	)
}

export default BadgePill
