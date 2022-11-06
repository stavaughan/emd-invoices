const SearchListItem = ({ item, setSelID, setSearchValue, setResVisible }) => {

    const onSelectItem = (e) => {
        setSearchValue('')
        setResVisible(false)
        setSelID(item.itemID)
    };

    return (
        <li>
            <span
                className="text-xs dropdown-item"
                onClick={onSelectItem}
            >
                {item.name}
            </span>
        </li>
    )
}

export default SearchListItem
