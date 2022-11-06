import React from 'react';
import { Col } from 'components/HTML';
import clsx from 'clsx';

import styles from './PageTitle.module.css';

const TitleIcon = (props) => {
    return (
        <Col cols="auto">
            <div className="avatar-lg position-relative mt-2">
                <span className={clsx(
					styles['header--avatar-img'],
					'rounded position-absolute top-50 start-0 translate-middle-y'
				)}>
                    {props.icon}
                </span>
            </div>
        </Col>
    )
}

export default TitleIcon
