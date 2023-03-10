import { FormsProvider } from 'contexts/forms-context';
import { SiteData } from 'data';
import { ServiceFormInputs } from '.';

const NewServiceForm = () => {

	const { modalIDs } = SiteData;

	return (
		<FormsProvider
			modalID={modalIDs.invoiceService}
			collection='services'
			itemTitle="Invoice Service or Product"
		>
			<ServiceFormInputs />
		</FormsProvider>
	)
}

export default NewServiceForm
