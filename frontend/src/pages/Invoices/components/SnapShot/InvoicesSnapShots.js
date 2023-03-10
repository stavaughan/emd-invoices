import { LinkTextButton } from 'components/Buttons/Type';
import { useToggleSnapShot, SnapShotsContainer } from '.';
import clsx from 'clsx';

const InvoicesSnapShots = ({
	initTitle,
	setTableTitle,
	snapShotData,
	setFilter,
	filter
}) => {

	const {
		handleCollapse,
		viewText,
		collapse,
	} = useToggleSnapShot(initTitle, setTableTitle, setFilter, filter)

	return (
		<div className="container mb-3 d-print-none">
			<div className="text-center mb-3">
				<LinkTextButton
					handleClick={handleCollapse}
					toggle={true}
					colID="snapshotCollapse"
					collapse={collapse}
					disabled={filter}
				>
					{viewText}
				</LinkTextButton>
			</div>
			<div
				id="snapshotCollapse"
				className={clsx(collapse ? `collapse ease-in` : '')}
			>
				<SnapShotsContainer
					snapShotData={snapShotData}
					setTableTitle={setTableTitle}
					setFilter={setFilter}
				/>
			</div>
		</div>
	)
}

export default InvoicesSnapShots
