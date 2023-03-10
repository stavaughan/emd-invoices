import React from 'react'

const ContentRowColumns = ({
	colClasses,
	content
}) => {

	return (
		<>
			{(content && content?.length)
				? content.map((col, idx) => (
					<td
						key={idx}
						{...colClasses?.length
							? { className: colClasses[idx + 1] }
							: {}
						}
					>
						{col}
					</td>
				)) : null}
		</>
	)
}

export default ContentRowColumns
