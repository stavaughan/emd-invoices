import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const SuccessLabel = ({ message }) => {
    return (
        <>
            <h2 className="text-success mb-2 fw-bold">
                <FAIcon icon="check-circle" className="me-3" />
                Success!
            </h2>
            <div className="text-secondary mb-3">
                {message}
            </div>
        </>
    )
}

export default SuccessLabel
