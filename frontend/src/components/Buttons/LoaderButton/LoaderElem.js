import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const LoaderElem = ({ className }) => {
	return (
		<span {...className && { className }}>
			<FAIcon icon="circle-notch" spin={true} className="me-2" />
			Please wait...
		</span>
	)
}

export default LoaderElem
