import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useErrorSuccessToast } from '.';
import { sliceData } from 'features';

const useItemUpdate = (id) => {

	const [ready, setReady] = useState(false)

	const action = useMemo(() => sliceData.find(_ => _.id === id), [id])

	const dispatch = useDispatch()

	const selector = useSelector(state => state[action.dataID])

	const [updateItem, setupdateItem] = useState({
		name: action.dataID,
		updateId: '',
		reqBody: null
	})

	useErrorSuccessToast({
		selector,
		displayTest: ready,
		errorID: `editerr${updateItem.updateId}`,
		successID: `editsuc${updateItem.updateId}`,
		typeLabel: "Update"
	})

	const setValue = useCallback((prop, value) => setupdateItem(prev => ({
		...prev,
		[prop]: value
	})), [setupdateItem])

	const setID = useCallback((id) => setValue('updateId', id), [setValue])
	const setReqBody = useCallback((data) => setValue('reqBody', data), [setValue])

	const onUpdate = useCallback(() => {
		dispatch(action.update({
			id: updateItem.updateId,
			reqBody: updateItem.reqBody
		}))
	}, [dispatch, action, updateItem.updateId, updateItem.reqBody])

	useEffect(() => {
		if (updateItem.updateId && ready) {
			onUpdate()
			let timer = setTimeout(() => {
				setReady(false)
				setupdateItem({
					name: action.dataID,
					updateId: '',
					reqBody: null
				});
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [updateItem.updateId, ready, onUpdate, action.dataID])

	return {
		updateItem,
		setID,
		setReqBody,
		setReady,
		loading: selector?.isLoading
	}
}

export default useItemUpdate
