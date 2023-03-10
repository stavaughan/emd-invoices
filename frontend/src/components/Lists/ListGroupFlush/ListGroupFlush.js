import React from 'react';
import { ListItem } from '.';
import clsx from 'clsx';

const ListGroupFlush = (props) => {

    const {
        listContent,
        ItemComponent,
        className,
        noPad,
        noBorder
    } = props;

    return (
        <ul className={clsx(
			'list-group list-group-flush',
			className
		)}>
            {listContent.map((itemContent, idx) => (
                <ListItem
                    key={idx}
                    idx={idx}
                    last={listContent.length - 1}
                    ItemComponent={ItemComponent}
                    itemContent={itemContent}
                    noBorder={noBorder}
                    noPad={noPad}
                />
            ))}
        </ul>
    )
}

export default ListGroupFlush
