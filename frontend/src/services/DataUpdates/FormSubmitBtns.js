import { Button } from 'components/Buttons';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const FormSubmitBtns = ({
	multiStep,
	displaySubmit,
	isLoading,
	setDisplay,
	display,
	entering
}) => {

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
						rest={{ disabled: [!entering, isLoading, display].includes(true) }}
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
			</div>
		</div>
	)
}

export default FormSubmitBtns
