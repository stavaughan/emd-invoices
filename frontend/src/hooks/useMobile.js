import { useContext } from "react";
import { SettingsContext } from "contexts";

const useMobile = () => {
	const { isXSmall } = useContext(SettingsContext).screen;
	return { isXSmall };
}

export default useMobile
