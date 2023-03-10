import { FormsProvider } from 'contexts/forms-context';
import { CustomerFormInputs } from '.';
import { SiteData } from 'data';

const NewCustomerForm = () => {

	const { modalIDs } = SiteData;

    return (
		<FormsProvider
			modalID={modalIDs.invoiceCustomer}
			collection='customers'
			itemTitle="Invoice Customer"
		>
            <CustomerFormInputs />
		</FormsProvider>
    )
}

export default NewCustomerForm
