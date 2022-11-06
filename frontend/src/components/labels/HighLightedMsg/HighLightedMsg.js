import React from 'react';
import { controlProps } from 'globals/js';
import clsx from 'clsx';

import Classes from './HighLightedMsg.module.css';

const HighLightedMsg = ({ modalID, message }) => {

    return (
        <div
            className={clsx(
				'text-secondary text-sm me-3',
				Classes.highlighted
			)}
            style={{ cursor: 'pointer' }}
            {...modalID ? controlProps.modalOpen(modalID) : {}}
			children={message}
		/>
    )
};

export default HighLightedMsg;
