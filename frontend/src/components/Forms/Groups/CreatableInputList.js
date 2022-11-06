import { GroupWrapper, ItemInputsWrapper } from 'components/Wrappers';
import { useCreatableInputData } from '../inputLogic';

const CreatableInputList = ({
	setUpdatedItem,
	updatedItem,
	setEntering,
	groupLabel,
	inputLabel,
	ItemInputs,
	addNestedItem,
	updateNestedItem,
	deleteNestedItem,
	addLabel,
	schema,
	field,
	test,
	clear
}) => {

	const { ids, setItems, onRemoveItem, handleAddNew, itemData } = useCreatableInputData({
		setUpdatedItem,
		updatedItem,
		addNestedItem,
		updateNestedItem,
		deleteNestedItem,
		setEntering,
		schema,
		field,
		clear,
		test
	});

	return (
		<GroupWrapper
			title={groupLabel}
			handleAddNew={handleAddNew}
			count={ids?.length || 0}
			itemName={addLabel}
		>
			{ids.length ? ids?.map((id, idx) => (
				<ItemInputsWrapper
					key={id}
					idx={idx}
					id={id}
					itemName={inputLabel}
					onRemove={onRemoveItem}
					sub={true}
				>
					<ItemInputs
						id={id}
						clear={clear}
						item={itemData(id)}
						setItems={setItems}
						setEntering={setEntering}
						updateNestedItem={updateNestedItem}
						smallLabel={true}
						schema={schema}
					/>
				</ItemInputsWrapper>
			)) : null}
		</GroupWrapper>
	)
}

export default CreatableInputList;
