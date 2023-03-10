import { useState } from 'react';
import { ItemsActionIcons } from 'components/section-content/ListingPage';
import { controlProps } from 'globals/js';
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
	setModalAction,
	modalID,
	active
}) => {

    const [hoverID, setHoverID] = useState('');

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

	const handleSingleClick = (e) => {
		e.preventDefault();
        setActiveID(itemID)
        setHoverID('');
        if (rowActions) {
            rowActions(itemID)
        }
		if(setModalAction) {
			setModalAction(active)
		}
	}

    return (
        <tr
            className={clsx(
				'listing-page-row',
				active && 'active'
			)}
            role="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
			{...modalID && active ? controlProps.modalOpen(modalID) : {}}
            onClick={handleSingleClick}
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
