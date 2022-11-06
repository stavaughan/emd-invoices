import { FormsProvider } from 'contexts/forms-context';
import { SiteData } from 'data';
import { BusinessFormInputs } from '.';

const NewBusinessForm = () => {

	const { modalIDs } = SiteData;

    return (
		<FormsProvider
			modalID={modalIDs.invoiceBusiness}
			collection='businesses'
			itemTitle="Invoice Business"
		>
            <BusinessFormInputs />
		</FormsProvider>
    )
}

export default NewBusinessForm
