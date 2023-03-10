import { LabeledItem } from "components/Lists";
import { EmailLink } from "components/links";
import { AddressGroup } from "components/Partials/Address";
import { useListingPageLogic } from "..";
import { Global } from "globals/js";
import { useContext, useMemo } from "react";
import { SettingsContext } from "contexts";
import { ProfilePhone } from ".";
import ErrorBoundary from "state/ErrorBoundary";

const ProfileInformation = ({ owner }) => {

	const { addressesContact } = useListingPageLogic();

	const { name, email, phone, address } = owner;

	const { isLarge, isXSmall } = useContext(SettingsContext).screen;

	const profPhone = useMemo(() => {
		const formPhone = phone ? Global.formatPhone(phone) : "";
		return <ProfilePhone phone={phone} formPhone={formPhone} />
	}, [phone]);

	const ownerAddresses = useMemo(() => {
		if (!address?.physical) return [];
		return addressesContact(address, ["alladd1", "alladd2"]);
	}, [address, addressesContact]);

	return (
		<ErrorBoundary>
			<AddressGroup addresses={ownerAddresses}>
				{name && (
					<LabeledItem label="Name" length="2" inline={true}>
						<div>{name}</div>
					</LabeledItem>
				)}
				{email && (
					<LabeledItem label="Email" length="2" inline={true}>
						<EmailLink email={email} isXSmall={isXSmall} />
					</LabeledItem>
				)}
				{phone && (
					<LabeledItem label="Phone" length="2" inline={true}>
						{isLarge ? profPhone : <div>{profPhone}</div>}
					</LabeledItem>
				)}
			</AddressGroup>
		</ErrorBoundary>
	);
};

export default ProfileInformation;
