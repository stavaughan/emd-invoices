import SearchBar from './components/SearchBar';

const SearchBarWrapper = ({
	searchData,
	searchKey,
	setSelID,
	id,
	className,
	style
}) => {

    return (
		<div
			{...className && { className }}
			{...style && { style }}
		>
			<form>
				<SearchBar
					searchData={searchData}
					searchKey={searchKey}
					setSelID={setSelID}
					id={id}
				/>
			</form>
		</div>
    );
};

export default SearchBarWrapper;
