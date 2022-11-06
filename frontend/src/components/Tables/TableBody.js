import React from 'react';

const TableBody = ({ className, children }) => {

    return (
        <tbody
			{...className && { className }}
			children={children}
		/>
    );
};

export default TableBody;
