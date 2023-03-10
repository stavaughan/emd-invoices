import { ModalFormWrapper } from 'components/Modals';
import { useModalClose, useUpdateAlerts } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ErrorBoundary from 'state/ErrorBoundary';
import { FormSubmitBtns } from 'services/DataUpdates';

const UpdateItemForm = ({
	clear,
	entering,
	clearForm,
	updateItem,
	updateSlice,
	setEntering,
	modalTitle,
	modalID,
	multiStep,
	displaySubmit,
	children,
	selector,
	size
}) => {

	const dispatch = useDispatch()

	const { isError, isLoading, errorMessage, successMessage } = selector;

	const { modalRef, setModalClose } = useModalClose();

	const [ready, setReady] = useState(false);
	const [display, setDisplay] = useState(false);

	const resetValues = useCallback(() => {
		!!setEntering && setEntering(false);
		const timer = setTimeout(() => {
			setModalClose(true);
		}, 500);
		return () => clearTimeout(timer);
    }, [setEntering, setModalClose]);

	useEffect(() => {
		if (clear) {
			resetValues();
		}
	}, [clear, resetValues])

	const afterSubmit = useCallback(() => {
		!!clearForm && clearForm();
		setReady(false);
		resetValues();
		if (isError) {
			toast.error(errorMessage);
		}
		if (!isError && !isLoading) {
			toast.success(successMessage);
		}
	}, [isError, errorMessage, isLoading, successMessage, clearForm, resetValues]);

	useEffect(() => {
		if (ready && !isLoading) {
			let timer = setTimeout(() => {
				afterSubmit();
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [ready, isLoading, afterSubmit]);

	useUpdateAlerts({
		toastID: modalID,
		formTitle: modalTitle,
		resetValues,
		setModalClose: clearForm,
		display,
		setDisplay
	});

	const onFormSubmit = (e) => {
		e.preventDefault();
		!!setEntering && setEntering(false);
		dispatch(updateSlice(updateItem));
		setReady(true);
	};

	return (
		<ErrorBoundary>
			<ModalFormWrapper
				labelID={`${modalID}Label`}
				modalID={modalID}
				modalTitle={modalTitle}
				handleModalClose={() => setDisplay(true)}
				modalRef={modalRef}
				entering={entering}
				classes={{
					dialogClass: `modal-fullscreen-sm-down modal-${size || 'lg'}`
				}}
			>
				<form onSubmit={onFormSubmit}>
					{children}
					<FormSubmitBtns
						multiStep={multiStep}
						displaySubmit={displaySubmit}
						isLoading={isLoading}
						setDisplay={setDisplay}
						display={display}
						entering={entering}
					/>
				</form>
			</ModalFormWrapper>
		</ErrorBoundary>
	)
}

export default UpdateItemForm;
