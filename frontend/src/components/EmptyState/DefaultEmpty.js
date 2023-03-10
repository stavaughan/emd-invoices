import clsx from 'clsx';
import { PrimaryPillButton } from 'components/Buttons';
import { CenteredItemsWrapper } from 'components/Wrappers';
import { AddFileIcon } from 'globals/img';
import { controlProps } from 'globals/js';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from './styles/EmptyStates.module.css';

const DefaultEmpty = ({ title, label, modalID }) => {

	return (
		<div className={Classes.wrapper}>
			<div className={Classes['centered-content']}>
				<div className={clsx(
					Classes['empty-state--image-container'],
					'text-center my-4'
				)}>
					<button
						className="btn"
						{...controlProps.modalOpen(modalID)}
					>
						<AddFileIcon width={782.04441 / 4} height={701.88002 / 4} />
					</button>
				</div>
				<div className={Classes['empty-state--details-container']}>
					<div className="text-center">
						<div className="pb-2">
							<p>You haven't created any invoices yet.</p>
							<p>{title}</p>
						</div>
						<div className={Classes['empty-state--actions-container']}>
							<div className={Classes['empty-state--actions']}>
								<CenteredItemsWrapper gap="gap-3">
									<PrimaryPillButton modalID={modalID}>
										<FAIcon icon="plus" className="me-2" />
										{label}
									</PrimaryPillButton>
								</CenteredItemsWrapper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DefaultEmpty;
