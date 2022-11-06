import { SuccessLabel } from 'components/labels';
import { Button } from 'components/Buttons';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const FormSubmitBtns = ({
	buttonGroup,
	resetValues,
	setDisplay,
	display,
	entering
}) => {

	const {
		displayClose,
		isLoading,
		multiStep, // multiStep form
		displaySubmit // multiStep form
	} = buttonGroup;

	const onCancel = () => {
		if (entering) {
			setDisplay(true)
		}
	};

	return (
		<div className="px-3">
			<hr />
			<div className={clsx(
				'mb-3 text-center pb-3 pe-2',
				multiStep && !displaySubmit ? 'hide' : 'show'
			)}>
				{displayClose ? (
					<div className="mb-3">
						<SuccessLabel />
						<Button
							className="btn-success"
							rest={{
								onClick: resetValues,
								'data-bs-dismiss': 'modal'
							}}
						>
							Close Form
						</Button>
					</div>
				) : (
					<div className="mb-3 float-end">
						<Button
							type="button"
							className="btn btn-outline-secondary me-3"
							rest={{
								onClick: onCancel,
								...!entering ? { "data-bs-dismiss": "modal" } : {}
							}}
						>
							Cancel
						</Button>
						<Button
							// rest={{ disabled: [!entering, isLoading, display].includes(true) }}
							rest={{ disabled: [!entering, isLoading].includes(true) }}
							className="btn btn-primary"
							type="submit"
						>
							{isLoading ? (
								<>
									<FAIcon icon="circle-notch" spin={true} className="me-2" />
									Updating...
								</>
							) : 'Submit'}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FormSubmitBtns
