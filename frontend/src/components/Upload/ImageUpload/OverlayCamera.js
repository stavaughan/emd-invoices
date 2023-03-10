import React from 'react'
import clsx from 'clsx';

import Classes from '../../Gallery/styles/ImageWrapper.module.css';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'

const OverlayCamera = ({ size }) => {

	return (
		<span className={Classes['avatar--overlay']}>
			<span
				className={clsx(
					'p-1 border border-1 rounded',
					Classes['avatar-icon-wrapper'],
					size
				)}
				style={{
					color: 'hsl(0, 0%, 85%)',
					borderColor: 'hsl(0, 0%, 80%)',
				}}
			>
				<FAIcon icon="camera" className={Classes['avatar-icon']} />
			</span>
		</span>
	)
}

export default OverlayCamera
