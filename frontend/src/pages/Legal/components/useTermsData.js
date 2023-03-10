import { tempData } from '.';
import { useMemo } from 'react';
import { SiteData } from 'data';

const useTermsData = (dataKey) => {

	const content = useMemo(() => {
		const disclosureContent = SiteData.disclosures[dataKey];
		return disclosureContent(tempData.siteName, {
			name: tempData.businessName,
			streetAddress: tempData.streetAddress,
			city: tempData.city,
			state: tempData.state,
			zipCode: tempData.zipCode,
			phone: tempData.phone,
			email: tempData.email
		});
	}, [dataKey]);

	return { content }
}

export default useTermsData
