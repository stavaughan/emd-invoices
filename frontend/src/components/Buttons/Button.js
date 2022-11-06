import React from 'react';
import clsx from 'clsx';

const Button = ({ type, className, rest, children }) => {

    return (
        <button
            className={clsx('btn', className)}
            type={type || 'button'}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
