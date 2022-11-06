import React from 'react'
import clsx from 'clsx';
import { Button } from 'components/Buttons';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const CancelSubmitGroup = ({
	float,
	className,
	displayCancel,
	disabled,
	handleCancel,
	isLoading,
	submitLabel = 'Submit',
	small
}) => {
	return (
		<div className={clsx(
			'd-flex align-items-center',
			`justify-content-${float}`,
			className
		)}>
				{displayCancel && (
					<Button
						type="button"
						className={clsx(
							small && 'btn-sm',
							"btn-outline-secondary me-3"
						)}
						rest={{ onClick: handleCancel }}
					>
						Cancel
					</Button>
				)}
				<Button
					rest={{ disabled }}
					className={clsx(
						small && 'btn-sm',
						"btn-primary"
					)}
					type="submit"
				>
					{isLoading ? (
						<>
							<FAIcon icon="circle-notch" spin={true} className="me-2" />
							Updating...
						</>
					) : submitLabel}
				</Button>
		</div>
	)
}

export default CancelSubmitGroup
