import { useCallback, useId, useContext } from 'react';
import { InputCol, GroupInputRow } from 'components/Forms/components';
import { UploadImageContainer } from 'components/Upload/ImageUpload';
import { resetImages, uploadCloudinaryImage } from 'features/images/imagesSlice';
import { FormInputsContext, FormsContext } from 'contexts';
import { useSelector } from 'react-redux';
import { Col } from 'components/HTML';
import { SiteData } from 'data';

const ServiceFormInputs = () => {

	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setNewItem);

	const selector = useSelector((state) => state.images);

	const updateImage = useCallback(() => {
		setValue('_sID')(selector?.uploadImageID);
	}, [selector?.uploadImageID, setValue]);

	const priceInputHandler = (value) => {
		const textValue = value.trim();
		if (!textValue || isNaN(textValue)) {
			return ''
		}
		if (textValue) {
			setValue('unit_price')(Number(value));
			setEntering(true)
		}
	}

	return (
		<div className="p-3">
			<GroupInputRow label="Service / Product Description">
				<InputCol.Text
					id={useId() + 'title'}
					value={newItem?.title}
					onChange={setValue('title')}
					label="Title"
					required
				/>
				<InputCol.Text
					id={useId() + 'description'}
					value={newItem?.description}
					onChange={setValue('description')}
					label="Description"
					required
				/>
				<InputCol.Dropdown
					id={useId() + 'type'}
					cols="12 sm-6 lg-4"
					optionData={SiteData.forms.invoices.priceTypes}
					label="Price Types"
					onChange={setValue('priceType')}
					selected={newItem.priceType}
				/>
				<InputCol.Text
					cols="12 sm-6 lg-4"
					id={useId() + 'price'}
					value={`${newItem.unit_price}`}
					onChange={priceInputHandler}
					label="Unit Price"
					required
				/>
			</GroupInputRow>
			<GroupInputRow label="Upload Image">
				<Col cols="12 sm-6">
					<UploadImageContainer
						ids={{
							contact: 'new',
							toast: 'newInvoiceImg',
							pid: selector?.uploadImageID ? `invoice-images/${selector?.uploadImageID}` : ''
						}}
						selector={selector}
						collection="invoices"
						updateImage={updateImage}
						uploadSlice={uploadCloudinaryImage}
						resetSlice={resetImages}
						apiPath="invoices"
						clear={clear}
						width={300}
					/>
				</Col>
			</GroupInputRow>
		</div>
	)
}

export default ServiceFormInputs
