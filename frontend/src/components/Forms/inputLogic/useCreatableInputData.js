import { useMemo, useCallback, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useCreatableInputData = ({
	setUpdatedItem,
	updatedItem,
	addNestedItem,
	updateNestedItem,
	deleteNestedItem,
	setEntering,
	schema,
	field,
	test,
	clear
}) => {

	const initialIDs = useMemo(() => {
		if(!updatedItem?.[field]?.length) return [];
		return updatedItem?.[field].filter(_ => _[test]).map(_ => (_?._id || _?.id))
	}, [updatedItem, field, test]);

	const [ids, setIds] = useState(initialIDs);

	const setItems = useCallback((item) => {
		!!setUpdatedItem && setUpdatedItem(prev => ({
			...prev,
			[field]: prev[field].map(_ => [_?.id, _?._id].includes(item.id) ? item : _)
		}))
		!!updateNestedItem && updateNestedItem(item);
	}, [setUpdatedItem, updateNestedItem, field]);

	const onRemoveItem = useCallback((id) => {
		setIds(prev => prev.filter(_ => _ !== id));
		!!setUpdatedItem && setUpdatedItem(prev => ({
			...prev,
			[field]: prev[field].filter(_ => ![_?.id, _?._id].includes(id))
		}))
		!!deleteNestedItem && deleteNestedItem(id);
		!!setEntering && setEntering(true)
	}, [setUpdatedItem, deleteNestedItem, field, setEntering]);

	const handleAddNew = useCallback((e) => {
		e.preventDefault();
		const newId = uuidv4();
		setIds(prev => [...prev, newId]);
		!!setUpdatedItem && setUpdatedItem(prev => ({
			...prev,
			[field]: [...prev[field], { ...schema, id: newId }]
		}))
		!!addNestedItem && addNestedItem({ ...schema, id: newId });
	}, [setUpdatedItem, addNestedItem, field, schema]);

	const itemData = useCallback((id) => {
		return updatedItem?.[field]?.find(_ => [_?.id, _?._id].includes(id));
	}, [updatedItem, field]);

	useEffect(() => {
		if (clear) {
			const initIDs = updatedItem?.[field]?.length ? initialIDs : [];
			setIds([...initIDs]);
		}
	}, [clear, initialIDs, field, updatedItem]);

	return {
		ids,
		setIds,
		setItems,
		onRemoveItem,
		handleAddNew,
		itemData
	}
}

export default useCreatableInputData
