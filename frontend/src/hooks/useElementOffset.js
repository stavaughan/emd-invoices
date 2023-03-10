import { useLayoutEffect, useRef, useState } from 'react';

const useElementOffset = () => {

	const ref = useRef(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		setWidth(ref.current.offsetWidth);
		setHeight(ref.current.offsetHeight);
	}, []);

	return [ref, width, height];

};

export default useElementOffset;
