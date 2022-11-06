import { useEffect, useCallback, useMemo, useState } from 'react';
import { useWindowSize } from '.';

const useScreenWidth = () => {

	const [screen, setScreen] = useState({
		isXSmall: false,
		isSmall: false,
		isMedium: false,
		isLarge: false,
		isXLarge: false,
		screenWidth: {}
	})

	const { windowSize } = useWindowSize();

	const width = useMemo(() => {
		const windowWidth = Number(windowSize.width);
		return {
			xsmall: windowWidth < 576,
			small: windowWidth >= 576 && windowWidth < 768,
			medium: windowWidth >= 768 && windowWidth < 992,
			large: windowWidth >= 992 && windowWidth < 1200,
			xlarge: windowWidth >= 1200 && windowWidth < 1400,
			xxlarge: windowWidth >= 1400
		}
	}, [windowSize]);

	const widthValues = useCallback(() => {
		return {
			isXSmall: [width.xsmall, width.small].includes(true),
			isSmall: [width.xsmall, width.small, width.medium].includes(true),
			isMedium: width.medium,
			isLarge: [width.medium, width.large, width.xlarge, width.xxlarge].includes(true),
			isXLarge: [width.large, width.xlarge, width.xxlarge].includes(true),
			screenWidth: width
		}
	}, [width])

	useEffect(() => {
		if (windowSize.width) {
			const widthParams = widthValues();
			setScreen(widthParams)
		}
	}, [windowSize, widthValues])

	return { screen }
}

export default useScreenWidth
