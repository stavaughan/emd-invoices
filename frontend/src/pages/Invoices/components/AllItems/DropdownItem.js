import React from 'react';
import { Button } from 'components/Buttons';
import clsx from 'clsx';

const DropdownItem = ({
	isXSmall,
	item,
	activeID,
	onSelectFilterItem
}) => {

	return (
		<li>
			<Button
				className={clsx(
					"dropdown-item",
					activeID === item.id && 'active'
				)}
				rest={{
					onClick: () => onSelectFilterItem(item)
				}}
			>
				<span
					className={
						isXSmall ? 'text-xxs' : 'text-xs'
					}
				>
					{item.label}
				</span>
			</Button>
		</li>
	)
}

export default DropdownItem
