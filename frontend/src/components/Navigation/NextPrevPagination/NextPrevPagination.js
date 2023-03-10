import { useMemo } from 'react';
import { NextPrevLink } from '.';
import useNavLogic from '../useNavLogic';

const NextPrevPagination = ({ onSelectID, data, itemID, idKey, path }) => {

	const { NextPrevlinkIDs } = useNavLogic();

	const navIDs = useMemo(() => {
		return NextPrevlinkIDs(data, itemID, idKey);
	}, [data, idKey, itemID, NextPrevlinkIDs]);

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
