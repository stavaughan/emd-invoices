import React from 'react';
import classes from './GradientText.module.css';

const GradientText = (props) => {

    return (
        <span className={classes['text-gradient--title']}>
            {props.children}
        </span>
    )
}

export default GradientText
