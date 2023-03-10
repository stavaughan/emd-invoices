import React from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const centeredStyle = {
	opacity: 0.7,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	position: 'absolute'
};

const ImageIcon = ({ noLabel }) => (
	<FAIcon
		icon="images"
		className={clsx(
			'upload-icon',
			'fa-fw text-slate-400',
			noLabel ? 'fa-2x' : 'fa-3x pb-3'
		)}
		{...noLabel && { style: centeredStyle }}
	/>
);

export default ImageIcon;
