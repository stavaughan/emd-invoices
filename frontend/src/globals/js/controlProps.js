const controlProps = {
    modalOpen: (modalID) => ({
        'data-bs-toggle': 'modal',
        'data-bs-target': `#${modalID}`
    }),
    collapse: (cid, bool) => ({
        'data-bs-toggle': 'collapse',
        'data-bs-target': `#${cid}`,
        'aria-expanded': bool,
        'aria-controls': cid
    }),
    dropdown: () => ({
        'data-bs-toggle': 'dropdown',
        'aria-expanded': false
    }),
    tabs: () => ({
        'data-bs-toggle': 'tab',
        'aria-expanded': false
    }),
	newTab: (url) => ({
		'href': url,
		'target': '_blank',
		'rel': 'noopener noreferrer nofollow'
	})
};

export default controlProps;
