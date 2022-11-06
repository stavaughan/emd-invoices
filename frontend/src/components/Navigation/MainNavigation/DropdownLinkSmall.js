import React from 'react';

const DropdownLinkSmall = (props) => {

    const { label, id } = props;

    return (
        <li className="nav-item dropdown d-md-none">
            <div
                id={id}
                className="nav-link text-slate-100"
                style={{ letterSpacing: '.09rem' }}
            >
                {label}
            </div>
			<div className="ms-3">
				{props.children}
			</div>
        </li>
    )
};

export default DropdownLinkSmall;