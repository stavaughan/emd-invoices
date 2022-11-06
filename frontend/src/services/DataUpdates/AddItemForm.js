import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { APIModalForm, APIForm } from '.';
import ErrorBoundary from 'state/ErrorBoundary';

const AddItemForm = ({
	submissionStates,
	initialState,
	clearForm,
	newItem,
	multiStep,
	setNewItem,
	createSlice,
	submitLabel,
	itemName,
	modalID,
	children,
	isLoading,
	name
}) => {

	const dispatch = useDispatch()

	const { entering, setEntering } = submissionStates;

	const [modalClose, setModalClose] = useState(false);
	const [display, setDisplay] = useState(false);
	const [displayClose, setDisplayClose] = useState(false);

	const resetStateValues = () => {
		!!clearForm && clearForm()
		setDisplayClose(false);
		if (setEntering) setEntering(false);
	};

	const submitTimeout = () => {
		setTimeout(() => {
			if(!isLoading) {
				setDisplayClose(true)
			}
		}, 800);
	};

	const formSubmitHandler = () => {
		dispatch(createSlice(newItem))
		setNewItem(initialState)
		submitTimeout()
	};

	return (
		<ErrorBoundary>
			<APIModalForm
				name={name}
				modalID={modalID}
				modalTitle={`Add ${itemName}`}
				modalClose={modalClose}
				setDisplay={setDisplay}
				entering={entering}
			>
				<APIForm
					toastID={modalID}
					formTitle={`Add ${itemName}`}
					display={display}
					setDisplay={setDisplay}
					formSubmitHandler={formSubmitHandler}
					resetValues={resetStateValues}
					entering={entering}
					setModalClose={setModalClose}
					buttonGroup={{
						multiStep,
						displayClose,
						isLoading,
						submitLabel
					}}
				>
					{children}
				</APIForm>
			</APIModalForm>
		</ErrorBoundary>
	)
}

export default AddItemForm;
