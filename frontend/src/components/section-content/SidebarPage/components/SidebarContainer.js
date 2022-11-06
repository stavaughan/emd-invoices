import { useMemo, useState } from 'react';
import { MenuExpandButton } from 'components/Buttons/Type';
import { Global } from 'globals/js';
import { SideBar } from '.';

const SidebarContainer = ({ section, setSection, contentSections, navID }) => {

	const [sideNavCollapsed, setSideNavCollapsed] = useState(true);

	const menuTitle = useMemo(() => {
		const navSection = navID.replace('sidenav-', '');
		const sectionName = ['userprofile', 'usersettings'].includes(navSection) ? navSection.replace('user', '') : navSection;
		return `${Global.upperCaseFirst(sectionName)} Menu`
	}, [navID])

	return (
		<nav className="navbar navbar-expand-md navbar-light mb-3 mb-lg-0 sidenav">
			<span className="ms-3 d-md-none text-primary text-xs">
				{menuTitle}
			</span>
			<MenuExpandButton
				className="my-2 me-2 p-1 btn-text-primary"
				sideNavCollapsed={sideNavCollapsed}
				setSideNavCollapsed={setSideNavCollapsed}
				navID={navID}
			/>
			<SideBar
				section={section}
				setSection={setSection}
				contentSections={contentSections}
				sideNavCollapsed={sideNavCollapsed}
				setSideNavCollapsed={setSideNavCollapsed}
				navID={navID}
			/>
		</nav>
	)
}

export default SidebarContainer
