import { SearchBarWrapper } from 'components/Search';
import { useMobile } from 'hooks';

const AllItemsFilterSearch = ({
	searchData,
	searchKey,
	setSelID,
	id,
	BodyActions
}) => {

	const { isXSmall } = useMobile();

	return (
		<div className="d-print-none pb-3 border-bottom">
			{isXSmall ? (
				<div className="d-flex flex-column">
					<SearchBarWrapper
						searchData={searchData}
						searchKey={searchKey}
						setSelID={setSelID}
						{...BodyActions && { className: 'mb-3' }}
						id={id}
					/>
					{BodyActions && <BodyActions />}
				</div>
			) : (
				<div className="d-flex justify-content-between align-items-center">
					<SearchBarWrapper
						searchData={searchData}
						searchKey={searchKey}
						setSelID={setSelID}
						style={{ width: '40%' }}
						id={id}
					/>
					{BodyActions && <BodyActions />}
				</div>
			)}
		</div>
	)
}

export default AllItemsFilterSearch
