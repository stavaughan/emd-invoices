import React from 'react';
import clsx from 'clsx';

const Card = ({ className, style, printRef, children }) => {

	return (
		<div
			className={clsx('card', className)}
			{...printRef && { ref: printRef }}
			{...style && { style }}
			children={children}
		/>
	);
};

export default Card;
