import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { APIModalForm, APIForm } from '.';

const UpdateItemForm = ({
	clearForm,
	updateItem,
	updateSlice,
	submitLabel,
	modalTitle,
	formTitle,
	isLoading,
	modalID,
	children,
	entering,
	setEntering,
	size
}) => {

    const dispatch = useDispatch()

    const [display, setDisplay] = useState(false);
    const [displayClose, setDisplayClose] = useState(false);

    const resetValues = useCallback(() => {
        !!clearForm && clearForm()
        setDisplayClose(false);
		setDisplay(false);
    }, [clearForm, setDisplayClose]);

    const submitTimeout = useCallback(() => {
		!!setEntering && setEntering(false);
        setTimeout(() => {
            if(!isLoading) {
				setDisplayClose(true)
			}
        }, 200);
    }, [isLoading, setEntering, setDisplayClose]);

	const formSubmitHandler = () => {
        dispatch(updateSlice(updateItem))
        submitTimeout()
    };

    return (
        <APIModalForm
			modalID={modalID}
			modalTitle={modalTitle}
			setDisplay={setDisplay}
			entering={true}
			size={size}
		>
			<APIForm
				toastID={modalID}
				formTitle={formTitle}
				display={display}
				setDisplay={setDisplay}
				resetValues={resetValues}
				formSubmitHandler={formSubmitHandler}
				entering={entering}
				buttonGroup={{
					displayClose,
					isLoading,
					submitLabel
				}}
			>
				{children}
			</APIForm>
        </APIModalForm>
    )
}

export default UpdateItemForm;
