import { useState } from 'react';
import { PageContainer } from 'components/Containers';
import { SidebarPage } from 'components/section-content/SidebarPage';
import { useSelector } from 'react-redux';
import { ProfileSections } from './sections';

const Profile = ({ pageID }) => {

	const { user } = useSelector(state => state.auth);

	const [sectionID, setSectionID] = useState('editProfile');

	// TODO: get user ip address, location, and device type so that this information can be
	// used in confirmation emails to user whenever user changes profile information, etc.

	return (
		<PageContainer>
			<SidebarPage
				contentSections={ProfileSections()?.sections}
				sectionID={sectionID}
				setSectionID={setSectionID}
				user={user}
				pageID={pageID}
			/>
		</PageContainer>
	);
};

export default Profile;
