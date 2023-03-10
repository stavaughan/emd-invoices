import { useMemo, useCallback } from 'react';
import { controlProps } from 'globals/js';

const WebSiteLink = ({ url, shortLabel, className, length }) => {

	const shortUrl = useCallback((url, label, length = 55) => {
		const urlLabel = url.replace('https://', '');
		const lengthTest = (urlLabel.length > (length * .5) && window.width < 600) || urlLabel.length > length;
		return lengthTest ? label : urlLabel;
	}, []);

	const siteName = useMemo(() => shortUrl(url, shortLabel, length), [url, shortLabel, length, shortUrl]);

    return (
        <a
            className={className || ''}
            {...controlProps.newTab(url)}
			role="button"
        >
            {siteName}
        </a>
    );
};

export default WebSiteLink;
