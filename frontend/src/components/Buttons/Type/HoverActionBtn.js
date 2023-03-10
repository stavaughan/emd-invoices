import { Button } from '..';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const HoverActionBtn = ({ rest, type, className, isXSmall, children }) => {

	return (
        <Button
            className={clsx(
				'btn-sm btn-text-primary rounded-3',
				className
			)}
            type={type || "button"}
            rest={rest}
        >
			{isXSmall && <FAIcon icon="sliders" className="me-2" />}
            {children}
        </Button>
    )
}

export default HoverActionBtn
