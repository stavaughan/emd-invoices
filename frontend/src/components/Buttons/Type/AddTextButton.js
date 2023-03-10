import { Col } from 'components/HTML';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AddTextButton = ({
	divider,
	bottomDivider,
	handleOnClick,
	hasData,
	label
}) => {

	return (
		<Col>
			{divider && <hr />}
			<div className={clsx(
				'text-center',
				!hasData && 'bg-lighter rounded py-2'
			)}>
				<button
					className={clsx(
						'btn btn-sm link-hover p-0',
						hasData ? 'mt-n3' : 'mt-0'
					)}
					onClick={handleOnClick}
				>
					<FAIcon icon="plus" className="me-2" />
					{label}
				</button>
			</div>
			{bottomDivider && <hr />}
		</Col>
	);
};

export default AddTextButton;
