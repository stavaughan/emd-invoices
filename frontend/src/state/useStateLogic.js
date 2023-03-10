import { useCallback } from "react";

const useStateLogic = () => {

	const getSelectedItem = useCallback((items, selID) => {
        if(!items?.length || !selID) return null;
		return items?.find(_ => _._id === selID);
    }, []);

	return { getSelectedItem }
}

export default useStateLogic
