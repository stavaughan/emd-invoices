import React from 'react';
import { Button } from 'components/Buttons';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const FilterReset = ({ selSID, setSelSID }) => {

	return (
		<>
			{selSID && (
				<span className="me-3">
					<Button
						className="btn-sm text-danger"
						rest={{ onClick: () => setSelSID('') }}
					>
						<FAIcon
							icon="times"
							className="me-2"
						/>
						Clear
					</Button>
				</span>
			)}
		</>
	);
};

export default FilterReset
