import { useState, useMemo } from 'react';
import { SearchDropDown, SearchListItem, SearchInput } from '.';

const SearchBar = ({ searchData, searchKey, setSelID, id }) => {

    const [searchValue, setSearchValue] = useState('');
    const [resVisible, setResVisible] = useState(false)

    const filteredData = useMemo(() => {
        return searchData?.length ? searchData.filter(item => {
            const searchField = item[searchKey] ? item[searchKey].toString().toLowerCase() : '';
            return searchField ? searchField.includes(searchValue) : false;
        }).map((_) => ({ itemID: _._id, name: _[searchKey] })) : [];
    }, [searchData, searchKey, searchValue])

    const onSearchHandler = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value) {
            setResVisible(true)
            setSearchValue(value.toString().toLowerCase());
        } else {
            setResVisible(false)
            setSearchValue('')
        }
    };

    const onNoFoundResults = (e) => {
        if(resVisible && !filteredData?.length) {
            setResVisible(false)
            setSearchValue('')
        }
    };

    return (
        <>
            <div
                className="bg-transparent dropdown"
                onBlur={onNoFoundResults}
            >
				<SearchInput
					id={id}
					searchValue={searchValue}
					onSearchHandler={onSearchHandler}
				/>
            </div>
            {resVisible ? (
                <SearchDropDown>
                    {filteredData?.length ? filteredData.map(item => (
                        <SearchListItem
                            key={item.itemID}
                            item={item}
                            setSelID={setSelID}
                            setSearchValue={setSearchValue}
                            setResVisible={setResVisible}
                        />
                    )) : (
                        <li>
                            <span className="text-xs dropdown-item text-danger">
                                No results found...
                            </span>
                        </li>
                    )}
                </SearchDropDown>
            ) : null}
        </>
    )
};

export default SearchBar;
