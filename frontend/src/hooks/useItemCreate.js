import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useErrorSuccessToast } from '.';
import { sliceData } from 'features';

const useItemCreate = (dataID) => {

	const [ready, setReady] = useState(false)

	const action = useMemo(() => sliceData.find(_ => _.id === dataID), [dataID])

	const dispatch = useDispatch()

	const selector = useSelector(state => state[dataID])

    const [newItem, setNewItem] = useState({
        name: dataID,
        createId: '',
		item: null
    })

    const { createId } = newItem;

	useErrorSuccessToast({
        selector,
        displayTest: ready,
        errorID: `createerr${createId}`,
        successID: `createsuc${createId}`,
        typeLabel: "Create"
    })

    const setValue = useCallback((prop, value) => setNewItem(prev => ({
        ...prev,
        [prop]: value
    })), [setNewItem])

    const setID = useCallback((id) => setValue('updateId', id), [setValue])
	const setReqBody = useCallback((data) => setValue('item', data), [setValue])

    const onUpdate = useCallback(() => {
        if (createId && ready) {
            dispatch(action.create(newItem.item))
        }
    }, [ready, createId, dispatch, action, newItem?.item])

    useEffect(() => {
        if(ready) {
            onUpdate()
            setTimeout(() => {
				setReady(false)
                setNewItem({
					name: dataID,
					createId: '',
					item: null
                });
            }, 1000)
        }
    }, [ready, dataID, onUpdate, setReady])

    return { setID, setReqBody, setReady, loading: selector.isLoading }

}

export default useItemCreate
