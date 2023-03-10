import { useState, useMemo } from 'react';
import { PageContainer } from 'components/Containers';
import { SidebarPage } from 'components/section-content/SidebarPage';
import { PageSections } from './sections';

const Settings = ({ pageID }) => {

	const [sectionID, setSectionID] = useState('notifications')
	const sections = useMemo(() => PageSections().sections, [])

    return (
        <PageContainer>
			<SidebarPage
				contentSections={sections}
				sectionID={sectionID}
				setSectionID={setSectionID}
				pageID={pageID}
			/>
        </PageContainer>
    );
};

export default Settings;
