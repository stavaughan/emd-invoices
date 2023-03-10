import { useId } from 'react';
import { FormsProvider } from 'contexts/forms-context';
import { SiteData } from 'data';
import { FormInputs } from '.';

const NewActivityForm = ({
	modalID = '',
	contactID = '',
	accountID = '',
	name = ''
}) => {

	const itemTitle = name ? ` for ${name}` : '';

	return (
		<FormsProvider
			modalID={modalID || SiteData.modalIDs.activity}
			collection="activities"
			itemTitle={'Activity' + itemTitle}
			user
		>
            <FormInputs
                accountID={accountID}
				contactID={contactID}
				uid={useId()}
            />
		</FormsProvider>
    )
}

export default NewActivityForm
