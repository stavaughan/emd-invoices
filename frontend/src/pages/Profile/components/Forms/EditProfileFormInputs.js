import { TitleDescription } from 'components/Blocks';
import {
	ContactAddressGroup, CreatableInputList, NameInputFields, Phone
} from 'components/Forms/Groups';
import { ContactEmailInput, WebpageInput } from 'components/Forms/Inputs';
import { Row } from 'components/HTML';
import { FormInputsContext } from 'contexts';
import { useContext } from 'react';
import { phoneSchema } from 'state/inputSchemas';

const EditProfileFormInputs = ({
	updatedContact,
	clear,
	setContactData,
	setDataToUpdate,
	setEntering
}) => {

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setContactData);

	const onSetWebsite = (value) => {
		setValue('website')(value);
		setDataToUpdate(prev => ({ ...prev, website: value }));
		setEntering(true);
	};

	return (
		<>
			<div className="mb-3">
				<TitleDescription
					title="Your Contact Information"
					description="Edit your name here"
				/>
			</div>
			<Row className="g-3 mb-4">
				<NameInputFields
					setContact={setContactData}
					setEntering={setEntering}
					contactName={updatedContact?.name}
					setDataToUpdate={setDataToUpdate}
					clear={clear}
					pfx="user"
				/>
				<ContactEmailInput
					cols="12 md-6"
					id="useremail"
					setOwner={setContactData}
					setEmail={(email) => setDataToUpdate(prev => ({ ...prev, email }))}
					setEntering={setEntering}
					contactEmail={updatedContact?.email}
					clear={clear}
				/>
				<WebpageInput
					cols="12 md-6"
					label="Website URL"
					id="updateuserurl"
					setValue={onSetWebsite}
					currentValue={updatedContact?.website || ''}
					clear={clear}
				/>
			</Row>
			<TitleDescription
				title="Your Phones"
				description="Edit your phones here"
			/>
			<CreatableInputList
				setUpdatedItem={setContactData}
				updatedItem={updatedContact}
				setEntering={setEntering}
				inputLabel="Phone"
				addLabel="phone"
				ItemInputs={Phone}
				schema={phoneSchema}
				field="phones"
				test="number"
				clear={clear}
			/>
			<div className="mt-1 mb-3">
				<TitleDescription
					title="Your Addresses"
					description="Edit your address here"
				/>
			</div>
			<Row className="g-3 mb-4">
				<ContactAddressGroup
					setUser={setDataToUpdate}
					currentAddress={updatedContact?.address}
					setEntering={setEntering}
					prefix="useraddressgroup"
					clear={clear}
					small
				/>
			</Row>
		</>
	)
}

export default EditProfileFormInputs
