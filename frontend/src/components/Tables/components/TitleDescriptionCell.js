import React from 'react'

const TitleDescriptionCell = ({ title, children }) => {
	return (
		<div className="d-flex justify-content-between">
			<div className="d-flex flex-column">
				<div className="font-medium text-dark">
					{title}
				</div>
				{children}
			</div>
		</div>
	)
}

export default TitleDescriptionCell
