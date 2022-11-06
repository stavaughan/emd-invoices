import { useState, useMemo } from 'react';
import { PageContainer } from 'components/Containers';
import { SidebarPage } from 'components/section-content/SidebarPage';
import { AdminSections } from './sections';

const Admin = ({ pageID }) => {

	const [sectionID, setSectionID] = useState('manageUsers')

	const Sections = useMemo(() => AdminSections().sections, []);

	return (
		<PageContainer>
			<SidebarPage
				contentSections={Sections}
				sectionID={sectionID}
				setSectionID={setSectionID}
				pageID={pageID}
			/>
		</PageContainer>
	);
};

export default Admin;
