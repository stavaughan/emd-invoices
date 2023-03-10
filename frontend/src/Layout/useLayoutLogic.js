import { PageObjects } from "globals/js";
import Pages from 'pages';
import { useCallback } from "react";

const useLayoutLogic = () => {

    const allowedPage = useCallback((pid, uid) => {
		return PageObjects.allowedUsers(pid).includes(uid) ? pid : 'home';
	}, []);

    const getSelectedPage = useCallback((pageID) => {
        const selPage = PageObjects.FILE(pageID)
        return {
            Page: Pages[selPage.page],
            groupPageIDs: PageObjects.groupPageIDs(),
            unitLabel: selPage?.unitLabel || ''
        }
    }, []);

	return { allowedPage, getSelectedPage }
}

export default useLayoutLogic
