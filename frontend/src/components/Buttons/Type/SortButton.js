import React from 'react';
import { IconButton } from '.';

const SortButton = ({ sortBy, setSortBy, margin }) => {

    const onClickHandler = () => {
        setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
    };

    return (
        <IconButton
            mode="light"
            icon={sortBy === 'asc' ? 'sort-amount-up' : 'sort-amount-down'}
            onClick={onClickHandler}
			margin={margin}
        />
    )
}

export default SortButton
