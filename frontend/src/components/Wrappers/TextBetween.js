import React from 'react'
import clsx from 'clsx'

const TextBetween = ({ width = '70%', children, className = 'align-items-center' }) => {
	return (
		<div
			className={clsx(
				'd-flex justify-content-between',
				className
			)}
			style={{ width }}
		>
			{children}
		</div>
	)
}

export default TextBetween
