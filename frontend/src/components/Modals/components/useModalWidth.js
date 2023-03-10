import { useCallback, useMemo, useContext } from "react";
import { SettingsContext } from "contexts";

const useModalWidth = () => {

	const { breakPointWidth } = useContext(SettingsContext);

	const modalWidthBreakpoints = useMemo(() => ({
		xsmall: { width: '355', className: 'modal-sm' },
		small: { width: '535', className: 'modal-md' },
		medium: { width: '550', className: 'modal-lg' },
		large: { width: '740', className: 'modal-xl' },
		xlarge: { width: '1100', className: 'modal-xl' },
		xxlarge: { width: '1100', className: 'modal-xl' }
	}), []);

	const modalWidth = useCallback(() => {
		const currentKey = Object
			.keys(breakPointWidth)
			.find(key => breakPointWidth[key]);
		return modalWidthBreakpoints[currentKey];
	}, [breakPointWidth, modalWidthBreakpoints])

	return { modalWidth }
}

export default useModalWidth
