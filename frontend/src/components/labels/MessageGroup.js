import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const MessageGroup = ({ className, color, icon, children }) => {
    return (
        <span className={clsx(className, color)}>
            <FAIcon icon={icon} className="me-2" />
            {children}
        </span>
    );
};

export default MessageGroup;
