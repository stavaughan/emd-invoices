import { createContext } from 'react';
import { AddItemForm } from 'services/DataUpdates';
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
		clear,
		newItem,
		setNewItem,
		clearForm,
		entering,
		setEntering,
		initialState,
		createSlice,
		isLoading
	} = useForm({ user, collection })

	return (
		<FormsContext.Provider value={{
			newItem,
			setNewItem,
			setEntering,
			entering,
			clear
		}}>
			<AddItemForm
				newItem={newItem}
				clearForm={clearForm}
				setNewItem={setNewItem}
				createSlice={createSlice}
				initialState={initialState}
				itemName={itemTitle}
				isLoading={isLoading}
				modalID={modalID}
				submissionStates={{
					entering,
					setEntering
				}}
			>
				{children}
			</AddItemForm>
		</FormsContext.Provider>
	);
};

export default FormsContext;
