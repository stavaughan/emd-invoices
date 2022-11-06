import { useCallback, useMemo } from "react"
import { Global, PageObjects } from 'globals/js';
import { useSelector } from "react-redux";
import { SiteData } from 'data';

const useHomePage = () => {

	const { access, userID } = useSelector(state => state.auth).user;

	const homePageLinkGroups = useMemo(() => {

        const linkData = (id) => {
            const sortedPaths = Global.sortData(PageObjects.PATHS, 'pageGroup', 'desc')
            return sortedPaths.filter(page => page.pageGroup === id && page.pageGroup !== 'Home')
        }

        return SiteData.pageGroupsContent.map(group => ({
            title: group.title,
            description: group.description,
            icon: group.icon,
            data: linkData(group._id)
        }));
    }, []);

    const groupRowLinks = useCallback((groupData, access) => {
        return groupData.filter(page => page?.allowedUsers.includes(access));
    }, []);

    const pageCard = useCallback((groupData) => ({
        data: groupRowLinks(groupData, access),
        itemKeys: {
            id: '_id',
            path: 'path',
            title: 'baseTitle',
            description: 'pageGroup',
            iconPath: 'iconPath'
        },
        iconColor: 'rgba(197,202,233,.2)',
        color: 'btn-bd-primary-indigo',
        colorSubTitle: 'text-indigo-200 fw-light'
    }), [groupRowLinks, access]);

    const cardHeading = useCallback((group) => ({
        icon: group.icon,
        title: group.title,
        description: group.description,
        iconColor: 'btn-md-indigo-300',
        titleColor: 'text-blue-700 font-medium',
        subTitleColor: 'text-slate-500'
    }), [])

	return {
		homePageLinkGroups,
		pageCard,
		cardHeading,
		access,
		userID
	}
}

export default useHomePage
