import React from 'react'
import clsx from 'clsx';

const ListItem = ({
	itemContent,
	ItemComponent,
	noBorder,
	children,
	idx,
	last,
	noPad
}) => {

    const paddingClass = () => {
        switch(true){
            case idx === 0:
                return 'px-0 pt-0 pb-3';
            case idx !== last:
                return 'px-0 py-2 border-bottom';
            default:
                return 'px-0 py-2';
        }
    };

    return (
        <li className={clsx(
			'list-group-item',
			noBorder && 'border-0',
			noPad ? 'py-2' : paddingClass(),
		)}>
            {(ItemComponent && !!itemContent) && <ItemComponent item={itemContent} />}
			{children}
        </li>
    )
}

export default ListItem
