import { SearchIcon } from '@heroicons/react/solid'

const SearchInput = ({ id, searchValue, onSearchHandler }) => {
	return (
		<>
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
		</>
	)
}

export default SearchInput
