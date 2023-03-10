import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { InvoicesSnapShot, SnapShotsPriorYears } from '.';

const SnapShotsContainer = ({
	snapShotData,
	setTableTitle,
	setFilter
}) => {

	const dispatch = useDispatch();

	const setTitleOnClick = useCallback((title) => {
		setTableTitle(title);
		setFilter(true);
	}, [setTableTitle, setFilter]);

	const setSnapShotFilter = useCallback((stat) => {
		setTitleOnClick(stat.title);
		dispatch(stat.filterSlice(stat.sliceParams))
	}, [setTitleOnClick, dispatch]);

	return (
		<div className='d-flex flex-column'>
			<InvoicesSnapShot
				snapShot={snapShotData?.firstCol}
				performance={snapShotData?.firstColPerf}
				setSnapShotFilter={setSnapShotFilter}
				single
			/>
			<SnapShotsPriorYears
				snapShotData={snapShotData}
				setSnapShotFilter={setSnapShotFilter}
			/>
		</div>
	)
}

export default SnapShotsContainer
