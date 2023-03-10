import { SearchBar } from 'components/Search';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const AllItemsFilterSearch = ({
	searchData,
	searchKey,
	setSelID,
	setSearchData,
	id,
	BodyActions
}) => {

	const { isXSmall } = useMobile();

	return (
		<div className="d-print-none pb-3 border-bottom">
			<div className={clsx(
				'd-flex',
				isXSmall ? 'flex-column' : "justify-content-between align-items-center",
			)}>
				<div
					{...!isXSmall ? { style: { width: '40%' } } : {}}
					{...(BodyActions && isXSmall) ? { className: 'mb-3' } : {}}
				>
					<form>
						<SearchBar
							searchData={searchData}
							searchKey={searchKey}
							setSelID={setSearchData || setSelID}
							id={id}
						/>
					</form>
				</div>
				{BodyActions && <BodyActions />}
			</div>
		</div>
	)
}

export default AllItemsFilterSearch
