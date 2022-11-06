import { useMemo } from 'react';
import { NextPrevLink } from '.';
import navLogic from '../navLogic';

const NextPrevPagination = ({ onSelectID, data, itemID, idKey, path }) => {

	const navIDs = useMemo(() => {
		return navLogic.NextPrevlinkIDs(data, itemID, idKey);
	}, [data, idKey, itemID])

	return (
		<div className="btn-group btn-group-sm d-print-none" role="group" aria-label="">
			<NextPrevLink
				key={navIDs.prevID}
				selID={navIDs.prevID}
				onSelectID={onSelectID}
				icon="caret-left"
				path={path}
				label="Prev"
			/>
			<NextPrevLink
				key={navIDs.nextID}
				selID={navIDs.nextID}
				onSelectID={onSelectID}
				icon="caret-right"
				path={path}
				label="Next"
			/>
		</div>
	);
}

export default NextPrevPagination
