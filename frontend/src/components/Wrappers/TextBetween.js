import React from 'react'
import clsx from 'clsx'

const TextBetween = ({
	children,
	className,
	align = 'align-items-center'
}) => {

	return (
		<div
			className={clsx(
				'd-flex justify-content-between',
				align,
				className
			)}
		>
			{children}
		</div>
	)
}

export default TextBetween
