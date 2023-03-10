import { Button } from 'components/Buttons';
import { useSearchBar } from '.';

import { SearchIcon } from '@heroicons/react/solid'

const SearchBar = ({ searchData, searchKey, setSelID, id }) => {

	const {
		searchValue,
		resVisible,
		filteredData,
		onSearchHandler,
		onNoFoundResults,
		onSelectItem
	} = useSearchBar(searchData, searchKey, setSelID);
	
	return (
		<>
			<div
				className="bg-transparent dropdown"
				onBlur={onNoFoundResults}
			>
				<div className="position-relative rounded-md">
					<div className="position-absolute inset-y-0 start-0 ps-3 d-flex align-items-center pointer-events-none">
						<SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<input
						id={`search${id}`}
						type="search"
						name="email"
						className="form-control block w-100 ps-5"
						placeholder="Search"
						value={searchValue}
						onChange={onSearchHandler}
						aria-label="item_search"
						aria-describedby={`search${id}`}
					/>
				</div>
			</div>
			{resVisible ? (
				<ul
					className="dropdown-menu show ms-2"
					aria-labelledby="searchBtn"
				>
					{filteredData?.length ? filteredData.map(item => (
						<li key={item.itemID}>
							<Button
								className="text-xxs dropdown-item"
								rest={{
									onClick: () => onSelectItem(item.itemID)
								}}
							>
								{item.name}
							</Button>
						</li>
					)) : (
						<li>
							<span className="text-xxs dropdown-item text-danger">
								No results found...
							</span>
						</li>
					)}
				</ul>
			) : null}
		</>
	)
};

export default SearchBar;
