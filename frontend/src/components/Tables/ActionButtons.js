import React, { useMemo } from 'react'
import { ButtonRow } from 'components/Buttons/ButtonRows';
import { tableActionButtons } from 'components/Tables';
import { useDataSort } from 'hooks';
import { SiteData } from 'data';

const ActionButtons = ({
	id = '',
	test,
	type,
	printRef,
	setEditID = () => {},
	setMessage = () => {},
	sortSliceAsc = null,
	sortSliceDesc = null,
	groupDisplayed = false,
	editOn,
	collection,
	initSort
}) => {

    const { sortBy, setSortBy } = useDataSort({
        sortItemsAsc: sortSliceAsc,
        sortItemsDesc: sortSliceDesc,
        initialState: initSort
    });

    const createPrintSortButtons = useMemo(() => {
        if(!tableActionButtons[collection]?.cps) {
            return
        }
        return tableActionButtons[collection]?.cps({
			sortBy,
			setSortBy,
			printRef,
			group: groupDisplayed
		})
    }, [setSortBy, sortBy, printRef, collection, groupDisplayed]);

    const printEditButtons = useMemo(() => {
        const onEdit = () => {
            setEditID(editOn ? id : '')
            setMessage(SiteData.messages.editMessages?.onEdit)
        }
        if(!tableActionButtons[collection]?.pe) {
            return
        }
        return tableActionButtons[collection]?.pe({ onEdit, printRef, editOn })
    }, [setEditID, setMessage, printRef, id, collection, editOn]);

    const btnItems =  useMemo(() => ({
        cps: createPrintSortButtons,
        pe: printEditButtons,
    }), [createPrintSortButtons, printEditButtons])

    return (
        <ButtonRow btnItems={btnItems[type]} test={test} />
    )
}

export default ActionButtons
