import React from 'react';
import { Button } from '..';
import { controlProps } from 'globals/js';

const ModalButton = ({ className, modalID, rest, children }) => {

	return (
		<Button
			className={className}
			rest={{
				...controlProps.modalOpen(modalID),
				...rest
			}}
			children={children}
		/>
	);
};

export default ModalButton;
