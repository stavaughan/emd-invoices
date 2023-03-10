import React, { useState } from 'react';
import { IconButton } from '.';

const DataSortButton = ({ handleSort, margin }) => {

    const [sortUp, setSortUp] = useState('asc')

    const onClickHandler = () => {

        const newSort = sortUp === 'asc' ? 'desc' : 'asc';
        setSortUp(newSort);
        handleSort(newSort);
    };

    return (
        <IconButton
            mode="light"
            icon={sortUp === 'asc' ? 'sort-amount-up' : 'sort-amount-down'}
            onClick={onClickHandler}
			margin={margin}
        />
    );
};

export default DataSortButton;
