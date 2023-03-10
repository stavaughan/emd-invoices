import { useState, useEffect } from 'react';

const useToggleSnapShot = (initTitle, setTableTitle, setFilter, filter) => {

	const [toggle, setToggle] = useState({
		collapse: true,
		text: 'view snapshot'
	});

	useEffect(() => {
		if (filter) {
			setToggle((_) => ({
				collapse: true,
				text: 'view snapshot'
			}));
		}
	}, [filter, setFilter])

	const handleCollapse = () => {
		setToggle((_) => ({
			collapse: toggle.text !== 'view snapshot',
			text: toggle.text === 'view snapshot'
				? 'hide snapshot'
				: 'view snapshot'
		}));
	};

	return {
		handleCollapse,
		viewText: toggle.text,
		collapse: toggle.collapse,
		setToggle
	}
}

export default useToggleSnapShot;
