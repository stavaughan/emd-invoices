import { useState } from 'react';
import { ItemsActionIcons } from 'components/section-content/ListingPage';
import { ActionCell } from '.';
import clsx from 'clsx';

const ActionCellRow = ({
	itemID,
	print,
	sentStatus,
	printModalID,
	editID,
	activeID,
	setEditID,
	setEditSubmit,
	setDeleteID,
	setMessage,
	rowSelectFN,
	setActiveID,
	rowActions,
	children,
	loading,
	active
}) => {

    const [hoverID, setHoverID] = useState('');

    const onRowClick = (e) => {
        e.preventDefault();
        setActiveID(itemID)
        setHoverID('');
        if (rowActions) {
            rowActions(itemID)
        }
    };

    const handleMouseEnter = (e) => {
        e.preventDefault();
        setHoverID(itemID)
    }

    const handleMouseLeave = (e) => {
        e.preventDefault();
        setHoverID('')
    };

    const hoverProps = {
        hid: hoverID,
        iid: itemID,
        aid: activeID
    };

    return (
        <tr
            className={clsx('listing-page-row', active && 'active')}
            role="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onRowClick}
        >
            {children}
            <ActionCell
                itemID={itemID}
                activeID={activeID}
                hoverID={hoverID}
                className="d-print-none"
            >
                <ItemsActionIcons
                    print={print}
                    itemID={itemID}
                    editID={editID}
                    setEditSubmit={setEditSubmit}
                    sentStatus={sentStatus}
                    printModalID={printModalID}
                    setEditID={setEditID}
                    setDeleteID={setDeleteID}
                    setMessage={setMessage}
                    rowSelectFN={rowSelectFN}
                    hoverProps={hoverProps}
                    loading={loading}
                />
            </ActionCell>
        </tr>
    );
};

export default ActionCellRow;
