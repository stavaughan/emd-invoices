import { useContext } from 'react';
import { AddressInputGroup } from 'components/Forms/Groups';
import { GroupInputRow, InputCol } from 'components/Forms/components';
import { WebpageInput, ContactEmailInput, ProfilePhoneInput } from 'components/Forms/Inputs';
import { FormInputsContext, FormsContext } from 'contexts';
import { BusLogoUpload, BrandColorSelect } from '.';

const BusinessFormInputs = () => {

	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setNewItem);

	return (
		<div className="p-3 mb-4">
			<GroupInputRow label="Business Contact Information">
				<InputCol.Text
					id="busfullname"
					value={newItem.longName}
					onChange={setValue('longName')}
					label="Full Name"
				/>
				<InputCol.Text
					id="busshortname"
					value={newItem.shortName}
					onChange={setValue('shortName')}
					maxLength="50"
					label="Short Name"
					cols="6 sm-9"
				/>
				<ContactEmailInput
					id="busemailinput"
					setOwner={setNewItem}
					setEntering={setEntering}
					clear={clear}
				/>
				<ProfilePhoneInput
					id="busphoneinput"
					setOwner={setNewItem}
					setEntering={setEntering}
					clear={clear}
				/>
				<WebpageInput
					cols="12 sm-6"
					label="Website"
					id="buswebpageinput"
					setValue={setValue('website')}
					value={newItem.value}
					clear={clear}
				/>
			</GroupInputRow>
			<GroupInputRow label="Business Address">
				<AddressInputGroup
					label="Business Address"
					setContact={setNewItem}
					setEntering={setEntering}
					clear={clear}
					small
				/>
			</GroupInputRow>
			<GroupInputRow label="Business Brand">
				<BusLogoUpload setNewBusiness={setNewItem} />
				<BrandColorSelect
					setValue={setValue('brandColor')}
					clear={clear}
				/>
			</GroupInputRow>
		</div>
	)
}

export default BusinessFormInputs
