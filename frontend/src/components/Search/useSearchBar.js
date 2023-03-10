import { useState, useMemo, useCallback } from 'react';

const useSearchBar = (searchData, searchKey, setSelID) => {

	const [searchValue, setSearchValue] = useState('');
	const [resVisible, setResVisible] = useState(false)

	const filteredData = useMemo(() => {
		return searchData?.length ? searchData.filter(item => {
			const searchField = item[searchKey] ? item[searchKey].toString().toLowerCase() : '';
			return searchField ? searchField.includes(searchValue) : false;
		}).map((_) => ({ itemID: _._id, name: _[searchKey] })) : [];
	}, [searchData, searchKey, searchValue])

	const onSearchHandler = useCallback((e) => {
		e.preventDefault();
		const value = e.target.value;
		if (value) {
			setResVisible(true)
			setSearchValue(value.toString().toLowerCase());
		} else {
			setResVisible(false)
			setSearchValue('')
		}
	}, [setResVisible, setSearchValue]);

	const onNoFoundResults = useCallback((e) => {
		if (resVisible && !filteredData?.length) {
			setResVisible(false)
			setSearchValue('')
		}
	}, [resVisible, filteredData, setResVisible, setSearchValue]);

	const onSelectItem = useCallback((itemID) => {
		setSearchValue('')
		setResVisible(false)
		setSelID(itemID)
	}, [setSearchValue, setResVisible, setSelID]);

	return {
		searchValue,
		resVisible,
		filteredData,
		onSearchHandler,
		onNoFoundResults,
		onSelectItem
	}
}

export default useSearchBar
