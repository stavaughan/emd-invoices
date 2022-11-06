import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useErrorSuccessToast } from '.';
import { sliceData } from 'features';

const useItemUpdate = (dataID) => {

	const [ready, setReady] = useState(false)

	const action = useMemo(() => sliceData.find(_ => _.id === dataID), [dataID])

	const dispatch = useDispatch()

	const selector = useSelector(state => state[dataID])

    const [updateItem, setupdateItem] = useState({
        name: dataID,
        updateId: '',
		reqBody: null
    })

    const { updateId, reqBody } = updateItem;

	useErrorSuccessToast({
        selector,
        displayTest: ready,
        errorID: `editerr${updateId}`,
        successID: `editsuc${updateId}`,
        typeLabel: "Update"
    })

    const setValue = useCallback((prop, value) => setupdateItem(prev => ({
        ...prev,
        [prop]: value
    })), [setupdateItem])

    const setID = useCallback((id) => setValue('updateId', id), [setValue])
	const setReqBody = useCallback((data) => setValue('reqBody', data), [setValue])

    const onUpdate = useCallback(() => {
        if (updateId && ready) {
            dispatch(action.update({ id: updateId, reqBody }))
        }
    }, [ready, updateId, dispatch, reqBody, action])

    useEffect(() => {
        if(ready) {
            onUpdate()
            setTimeout(() => {
				setReady(false)
                setupdateItem({
					name: dataID,
					updateId: '',
					reqBody: null
                });
            }, 1000)
        }
    }, [ready, dataID, onUpdate, setReady])

    return { updateItem, setID, setReqBody, setReady, loading: selector.isLoading }

}

export default useItemUpdate
