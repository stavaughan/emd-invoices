import { useMemo } from 'react';
import { SectionContainer, SidebarContainer } from './components';

const SidebarPage = ({
	contentSections,
	sectionID,
	setSectionID,
	pageID,
	user
}) => {

    const selSection = useMemo(() => contentSections.find(item => item.id === sectionID), [contentSections, sectionID]);

    return (
        <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
                <SidebarContainer
                    section={sectionID}
                    setSection={setSectionID}
                    contentSections={contentSections}
                    navID={`sidenav-${pageID}`}
                />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
                <SectionContainer
                    title={selSection.label}
                    subTitle={selSection.description}
					footerContent={selSection?.footerContent}
                >
                    <selSection.section user={user} />
                </SectionContainer>
            </div>
        </div>
    )
}

export default SidebarPage
