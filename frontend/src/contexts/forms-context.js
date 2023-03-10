import { createContext } from 'react';
import { UpdateItemForm } from 'services/DataUpdates';
import { useForm } from 'hooks';

const FormsContext = createContext({
	newItem: {},
	setNewItem: () => { },
	setEntering: () => { },
	entering: false,
	clearForm: () => { },
	setParams: () => { },
	clear: false,
});

export const FormsProvider = ({
	children,
	modalID,
	collection,
	user = false,
	itemTitle
}) => {

	const {
		newItem,
		setNewItem,
		clearForm,
		entering,
		setEntering,
		createSlice,
		selector,
		clear
	} = useForm({ user, collection })

	return (
		<FormsContext.Provider value={{
			newItem,
			setNewItem,
			setEntering,
			entering,
			clear
		}}>
			<UpdateItemForm
				clear={clear}
				entering={entering}
				clearForm={clearForm}
				updateItem={newItem}
				updateSlice={createSlice}
				setEntering={setEntering}
				selector={selector}
				modalTitle={`Add ${itemTitle}`}
				modalID={modalID}
			>
				{children}
			</UpdateItemForm>
		</FormsContext.Provider>
	);
};

export default FormsContext;
