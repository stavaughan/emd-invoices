import React from 'react';
import { controlProps } from 'globals/js';
import { RoundIconBtn } from 'components/Icons';

const DropDownEllipsis = ({ menuID, style, children }) => {
	return (
		<div className="dropdown dropstart">
			<RoundIconBtn
				icon="ellipsis-v"
				color="text-xs text-slate-500"
				xSmall={true}
				{...controlProps.dropdown()}
			/>
			<ul
				id={menuID}
				className="dropdown-menu"
				aria-labelledby={menuID}
				{...style || {}}
			>
				{children}
			</ul>
		</div>
	)
}

export default DropDownEllipsis
