import { useMemo } from 'react'
import { Global } from 'globals/js';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const HeadContent = () => {

	const { isXSmall } = useMobile();

    const dateStamp = useMemo(() => {
        const today = new Date();
        return Global._Date.formatted(today, 'full')
    }, []);

    return (
        <div className={clsx(
			isXSmall ? 'text-xxs' : 'text-xs',
			"text-primary my-auto"
		)}>
            {dateStamp}
        </div>
    )
}

export default HeadContent
