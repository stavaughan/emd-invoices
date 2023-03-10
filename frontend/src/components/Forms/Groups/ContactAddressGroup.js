import { useState, useMemo } from 'react';
import { AddressGroup } from 'components/Forms/Groups';
import { Col } from 'components/HTML';
import { useClear } from 'hooks';

const ContactAddressGroup = ({
	small,
	prefix,
	setUser,
	setObject,
	ownerObject,
	setAddress,
	currentAddress,
	inputLabelClass,
	setEntering,
	clear
}) => {

	const [differentMailing, setDifferentMailing] = useState(!!currentAddress?.mailing?.street1);

	const currentPhysical = useMemo(() => {
		return currentAddress?.physical && !!currentAddress?.physical?.street1 ? currentAddress.physical : {};
	}, [currentAddress]);

	const currentMailing = useMemo(() => {
		if (!currentAddress || !currentAddress?.mailing?.street1) {
			return {}
		}
		return currentAddress?.mailing === 'Same as physical' || currentAddress?.sameAsPhysical
			? currentAddress?.physical
			: currentAddress.mailing
	}, [currentAddress])

	useClear(clear, () => setDifferentMailing(!!currentAddress?.mailing?.street1));

	return (
		<>
			<Col cols="12">
				<AddressGroup
					prefix={prefix}
					setUser={setUser}
					setObject={setObject}
					ownerObject={ownerObject}
					setAddress={setAddress}
					currentAddress={currentPhysical}
					inputLabelClass={inputLabelClass}
					setEntering={setEntering}
					type="physical"
					clear={clear}
					small={small}
				/>
			</Col>
			<Col cols="12">
				<AddressGroup
					prefix={prefix}
					setUser={setUser}
					setObject={setObject}
					setAddress={setAddress}
					ownerObject={ownerObject}
					showDelete={differentMailing}
					setEntering={setEntering}
					type="mailing"
					toggle={differentMailing}
					currentAddress={currentMailing}
					setToggle={setDifferentMailing}
					inputLabelClass={inputLabelClass}
					clear={clear}
					small={small}
				/>
			</Col>
		</>
	)
};

export default ContactAddressGroup;
