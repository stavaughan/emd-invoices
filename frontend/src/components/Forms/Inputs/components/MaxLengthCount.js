import React from 'react'
import clsx from 'clsx'

const MaxLengthCount = ({ textValue, maxLength }) => {

	return (
		<>
			{textValue?.length ? (
				<figcaption className={clsx(
					'figure-caption text-end',
					textValue.length === Number(maxLength) && 'text-danger fw-bold'
				)}>
					{`${textValue.length} / ${maxLength}`}
				</figcaption>
			) : null}
		</>
	)
}

export default MaxLengthCount