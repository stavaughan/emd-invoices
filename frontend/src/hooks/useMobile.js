import { useContext, useMemo } from "react";
import { SettingsContext } from "contexts";

const useMobile = () => {
	const { screen } = useContext(SettingsContext);

	const isXSmall = useMemo(() => {
		return [screen.isXSmall, screen.isMobile].includes(true);
	}, [screen.isXSmall, screen.isMobile]);

	return { isXSmall };
}

export default useMobile
