import { FormSubmitBtns } from '.';
import { useUpdateAlerts } from 'hooks';

const APIForm = ({
	toastID,
	formTitle,
	resetValues,
	display,
	setDisplay,
	formSubmitHandler,
	buttonGroup,
	setModalClose,
	entering,
	children
}) => {

	useUpdateAlerts({
		toastID,
		formTitle,
		resetValues,
		setModalClose,
		display,
		setDisplay
	})

	const onFormSubmit = (e) => {
		e.preventDefault();
		formSubmitHandler();
	};

	return (
		<form onSubmit={onFormSubmit}>
			{children}
			<FormSubmitBtns
				buttonGroup={buttonGroup}
				resetValues={resetValues}
				setDisplay={setDisplay}
				display={display}
				entering={entering}
			/>
		</form>
	)
}

export default APIForm
