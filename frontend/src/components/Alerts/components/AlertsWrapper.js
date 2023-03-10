import clsx from 'clsx';
import { useMobile } from 'hooks';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const AlertsWrapper = ({ className, children }) => {

	const { isXSmall } = useMobile();

    return (
        <div
            className={clsx(
				isXSmall ? 'text-xs' : 'text-sm',
				'alert alert-danger d-flex align-items-center my-auto',
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
