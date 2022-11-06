import React from 'react';
import { AlertsWrapper } from './components';

const AlertMessage = ({ message }) => {

    return (
        <AlertsWrapper>
            {message}
        </AlertsWrapper>
    )
}

export default AlertMessage
