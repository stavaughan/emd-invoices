import { useMemo, useCallback } from 'react';
import clsx from 'clsx';

const EmailLink = ({ email, table }) => {

	const shortEmail = useCallback((email, length) => {
		const lengthTest = (email.length > (length * .5) && window.width < 600) || email.length > length;
		return lengthTest ? 'Click for email' : email;
	}, []);

	const label = useMemo(() => shortEmail(email, 55), [email, shortEmail]);

    return (
        <a href={`mailto:${email}`} className={clsx(
			!table && 'text-sm',
			"text-nowrap"
		)}>
            {label}
        </a>
    );
};

export default EmailLink;
