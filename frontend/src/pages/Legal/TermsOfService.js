import { LegalWrapper, useTermsData } from './components';

const TermsOfService = () => {

	const { content } = useTermsData('termsOfUse');

	return (
		<LegalWrapper
			content={content}
			title="Terms of Use"
			activePage="terms"
		/>
	)
}

export default TermsOfService
