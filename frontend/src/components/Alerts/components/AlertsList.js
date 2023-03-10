import React from 'react';
import { AlertsWrapper } from '.';

const AlertsList = ({ message, className }) => {

	return (
		<div {...className && { className }}>
			<AlertsWrapper>
				<div style={{ color: "#842029", border: "0" }}>
					{message}
				</div>
			</AlertsWrapper>
		</div>
	)
}

export default AlertsList
