import { LegalWrapper, useTermsData } from './components';

const PrivacyPolicy = () => {

	const { content } = useTermsData('privacyPolicy');

	return (
		<LegalWrapper
			content={content}
			title="Privacy Policy"
			activePage="privacy"
		/>
	)
}

export default PrivacyPolicy
