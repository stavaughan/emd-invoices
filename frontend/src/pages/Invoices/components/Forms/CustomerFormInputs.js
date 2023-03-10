import { GroupInputRow, InputCol } from 'components/Forms/components';
import { ContactAddressGroup, NameInputFields } from 'components/Forms/Groups';
import { ContactEmailInput, Input, ProfilePhoneInput } from 'components/Forms/Inputs';
import { Col } from 'components/HTML';
import { FormInputsContext, FormsContext } from 'contexts';
import { useContext, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CustomerFormInputs = () => {

	const {
		clear,
		newItem,
		setNewItem,
		setEntering
	} = useContext(FormsContext);

	const ctx = useContext(FormInputsContext);
	const setValue = ctx.setValue(setNewItem);

	const { customers } = useSelector(state => state.customers)

	const onSetBusPrefix = useCallback((value) => {
		const newPfx = value.toUpperCase()
		const existingPfxs = customers.map(_ => _.busPfx)
		if (existingPfxs.includes(newPfx)) {
			toast.error('Prefix already in use', {
				position: 'top-center',
				autoClose: 1500,
				toastId: 'busPfx'
			})
		} else {
			setValue('busPfx')(newPfx)
			setEntering(true)
		}
	}, [customers, setEntering, setValue])

	return (
		<div className="p-3">
			<GroupInputRow label="Business Name">
				<InputCol.Text
					id="busname"
					value={newItem?.businessName || ''}
					onChange={setValue('businessName')}
					maxLength="200"
					label="Business Name"
					cols="12"
				/>
				<Col cols="12">
					<div className="d-flex justify-content-start align-items-center">
						<Input.Text
							id="busprefix"
							groupClass="flex-shrink-1 my-auto"
							value={newItem?.busPfx || ''}
							onChange={onSetBusPrefix}
							maxLength="3"
							label="Prefix"
						/>
						<div className="w-100 ms-3 mb-0 mt-auto">
							<div className="alert alert-info text-xs mb-auto" role="alert">
								"Used for the invoice number. It must be unique and 2 characters or less."
							</div>
						</div>
					</div>
				</Col>
			</GroupInputRow>
			<GroupInputRow label="Customer Address">
				<ContactAddressGroup
					setUser={setNewItem}
					setEntering={setEntering}
					prefix="customeraddress"
					clear={clear}
					small
				/>
			</GroupInputRow>
			<GroupInputRow label="Customer Contact Information">
				<NameInputFields
					setContact={setNewItem}
					setEntering={setEntering}
					contactName={newItem?.name}
					pfx="customercontact"
				/>
				<ContactEmailInput
					id="newcustomeremail"
					setOwner={setNewItem}
					setEntering={setEntering}
					autoComplete="email"
					clear={clear}
				/>
				<ProfilePhoneInput
					setOwner={setNewItem}
					setEntering={setEntering}
					id="newcustomerphone"
					clear={clear}
				/>
			</GroupInputRow>
		</div>
	)
}

export default CustomerFormInputs
