import {
	NewCustomerForm,
	NewBusinessForm,
	NewServiceForm,
	BulkInvoiceForm
} from 'pages/Invoices/components/Forms';
import { ImageCropModal } from 'components/Gallery/ImageTransformation';
import { NewInvoiceForm } from 'pages/Invoices/components/Forms';
import { NewUserRoleForm } from 'pages/Admin/forms';

const SiteModals = () => {

    return (
        <>
            <NewInvoiceForm />
			<BulkInvoiceForm />
			<NewCustomerForm />
            <NewBusinessForm />
			<NewServiceForm />
            <ImageCropModal />
			<NewUserRoleForm />
        </>
    )
}

export default SiteModals
