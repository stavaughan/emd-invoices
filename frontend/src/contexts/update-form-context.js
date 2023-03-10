import { createContext, useMemo } from 'react';
import { UpdateItemForm } from 'services/DataUpdates';
import { UpdateSelector } from 'components/Forms/Inputs';
import { inputSelectorValues } from 'services/DataUpdates';
import { useUpdateForm } from 'hooks';

const UpdateFormContext = createContext({
	checkedFields: {},
	setChecked: () => { },
	setNestValue: () => { },
	setNestedFieldValue: () => { },
	setTagsValue: () => { },
	setValue: () => { },
	setEntering: () => { },
	clear: false,
});

export const UpdateFormProvider = ({
	children,
	collection,
	currentItem,
	setUpdateData,
	upDateData,
	itemName = '',
	itemLabel,
	userOnly = false
}) => {

	const { initCheckedState, selectorfields } = useMemo(() => {
		return inputSelectorValues.find(_ => _.id === collection);
	}, [collection]);

	const {
		clearForm,
		entering,
		setEntering,
		updateSlice,
		checkedFields,
		setChecked,
		setValue,
		setTagsValue,
		setNestValue,
		setNestedFieldValue,
		modalID,
		selector,
		clear
	} = useUpdateForm({
		initCheckedState,
		collection,
		currentItem,
		setUpdateData,
		upDateData,
		userOnly
	});

	return (
		<UpdateFormContext.Provider value={{
			checkedFields,
			setChecked,
			setNestedFieldValue,
			setNestValue,
			setTagsValue,
			setValue,
			setEntering,
			clear
		}}>
			<UpdateItemForm
				updateItem={{ id: currentItem?._id, reqBody: upDateData }}
				modalTitle={`Update ${itemLabel}${itemName ? ' ' + itemName : ''}`}
				updateSlice={updateSlice}
				setEntering={setEntering}
				clearForm={clearForm}
				entering={entering}
				selector={selector}
				modalID={modalID}
				size="md"
			>
				<div className="p-3">
					{selectorfields && selectorfields?.length ? (
						<UpdateSelector
							id="updateaccount"
							setChecked={setChecked}
							checkedFields={checkedFields}
							selectorfields={selectorfields}
						/>
					) : null}
					{children}
				</div>
			</UpdateItemForm>
		</UpdateFormContext.Provider>
	);
};

export default UpdateFormContext;
