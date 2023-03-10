import { useCallback } from "react";
import { PageObjects } from "globals/js";
import { protectedRoutes } from "Routes";

const useNavLogic = () => {

    const NextPrevlinkIDs = useCallback((data, itemID, idKey) => {
        const itemIDs = data.map(item => item[idKey]);
        const idIndex = itemIDs.indexOf(itemID);
        const lastIndex = itemIDs.length - 1;
        return {
            prevID: idIndex === 0 ? itemIDs[lastIndex] : itemIDs[idIndex - 1],
            nextID: idIndex === lastIndex ? itemIDs[0] : itemIDs[idIndex + 1]
        };
    }, []);

    const userAuthLink = useCallback((link, access) => {
        const allowed = link?.allowedUsers;
        return allowed.includes(access)
    }, []);

    const allowedPIDs = useCallback((group, access) => {
        const pageIDs = PageObjects.pageIDs(group);
        const allowedIDs = pageIDs.filter(id => protectedRoutes.find(_ => _.pid === id).roles.includes(access))
        return allowedIDs?.length ? allowedIDs : []
    }, []);

    const allowedPage = useCallback((pid) => {
        return PageObjects.PATHS.find(_ => _._id === pid)
    }, []);

	return { NextPrevlinkIDs, userAuthLink, allowedPIDs, allowedPage }
};

export default useNavLogic;
