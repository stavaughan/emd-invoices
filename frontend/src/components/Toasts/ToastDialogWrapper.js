import React from 'react'

const ToastDialogWrapper = ({ message, children }) => {
	return (
		<div className="d-flex flex-column text-dark text-sm">
			{message}
			<div className="d-flex justify-content-end align-items-center">
				{children}
			</div>
		</div>
	)
}

export default ToastDialogWrapper
