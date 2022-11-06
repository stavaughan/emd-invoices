import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AlertsWrapper = ({ className, children }) => {

    return (
        <div
            className={clsx(
				'alert alert-danger d-flex align-items-center my-auto text-sm',
				className
			)}
            role="alert"
        >
            <FAIcon icon="exclamation-triangle" className="me-2"/>
            {children}
        </div>
    );
};

export default AlertsWrapper;
