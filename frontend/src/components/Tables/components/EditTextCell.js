import { useState, useEffect } from 'react';
import { useErrorSuccessToast } from 'hooks'
import { useDispatch } from 'react-redux';
import { InlineEdit } from 'components/Forms/Inputs';

const EditTextCell = ({
	editID,
	itemID,
	setEditID,
	itemLabel,
	selector,
	updateSlice,
	editSubmit,
	setEditSubmit,
	originalLabel,
	otherID,
	type,
	field
}) => {

	const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');

    useErrorSuccessToast({
        selector,
        displayTest: editSubmit,
        errorID: `editerr${itemID}`,
        successID: `editsuc${itemID}`,
        typeLabel: "Update"
    })

    useEffect(() => {
        if (editSubmit) {
            if (newItem) {
                dispatch(updateSlice({ id: otherID || editID, reqBody: { [field]: newItem } }))
            }
            setEditSubmit(false)
            setEditID('')
        }
    }, [editSubmit, setEditSubmit, dispatch, newItem, editID, field, updateSlice, setEditID, otherID])

    return (
        <>
            {editID === itemID ? (
                <InlineEdit
                    type={type}
                    newLabel={newItem}
                    onEditValue={setNewItem}
                    label={itemLabel}
                    small
                />
            ) : (
                <>{originalLabel || itemLabel}</>
            )}
        </>
    )
}

export default EditTextCell
