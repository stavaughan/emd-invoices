import { PageObjects } from "globals/js";
import { protectedRoutes } from ".";

const routesLogic = {

    allowedPage: (pid, access) => {
        const allowedUsers = PageObjects.PATHS.find(_ => _._id === pid)?.allowedUsers;
        return allowedUsers.includes(access);
    },

    allowedRoles(pid, access) {
        const allowedRoutes = protectedRoutes.find(_ => _.pid === pid)?.roles;
        return allowedRoutes.includes(access)
    },

    allowedChange: (access) => access === 'admin'
}

export default routesLogic
