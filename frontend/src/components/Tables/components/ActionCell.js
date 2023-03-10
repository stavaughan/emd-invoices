import React from 'react';
import clsx from 'clsx';

const ActionCell = (props) => {

    const { itemID, activeID, hoverID, className } = props;
    const display = ![activeID, hoverID].includes(itemID) ? ' hidden' : '';

    return (
        <td
			className={clsx('text-center', className)}
			style={{ minWidth: '80px' }}
		>
            <div className={clsx('d-flex justify-content-center align-items-center', display)}>
                {props.children}
            </div>
        </td>
    );
};

export default ActionCell;
