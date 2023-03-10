import React from 'react'
import { IconButton } from 'components/Buttons/Type'
import { controlProps } from 'globals/js'
import clsx from 'clsx'

const IconDropDown = ({ setOption, options, icon, margin = '' }) => {

    return (
        <div className={clsx('btn-group', margin)}>
            <IconButton
                icon={icon}
                mode="light"
                rest={{ ...controlProps.dropdown() }}
            />
            <ul className="dropdown-menu">
                {options?.length ? options.map(option => (
                    <li
                        key={option}
                        className="btn dropdown-item"
                        onClick={() => setOption(option)}
                    >
                        {option}
                    </li>
                )) : null}
            </ul>
        </div>
    )
}

export default IconDropDown
