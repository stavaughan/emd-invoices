const SearchDropDown = (props) => {
    return (
        <ul
            className="dropdown-menu show ms-2"
            aria-labelledby="searchBtn"
            id="item_search"
        >
            {props.children}
        </ul>

    )
}

export default SearchDropDown
