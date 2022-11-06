import { LabeledItem } from "components/Lists";
import { EmailLink } from "components/links";
import { AddressGroup } from "components/Partials/Address";
import { ListingPageLogic } from "..";
import { Global } from "globals/js";
import { useContext, useMemo } from "react";
import { SettingsContext } from "contexts";
import { ProfilePhone } from ".";

const ProfileInformation = ({ owner }) => {

	const { email, phone, address } = owner;

	const { isLarge } = useContext(SettingsContext).screen;

	const profPhone = useMemo(() => {
		const formPhone = phone ? Global.formatPhone(phone) : "";
		return <ProfilePhone phone={phone} formPhone={formPhone} />
	}, [phone]);

	const ownerAddresses = useMemo(() => {
		return address?.physical
			? ListingPageLogic.addressesContact(address, ["alladd1", "alladd2"])
			: [];
	}, [address]);

	return (
		<AddressGroup addresses={ownerAddresses}>
			{email && (
				<LabeledItem label="Email" length="2" inline={true}>
					<EmailLink email={email} />
				</LabeledItem>
			)}
			{phone && (
				<LabeledItem label="Phone" length="2" inline={true}>
					{isLarge ? profPhone : <div>{profPhone}</div>}
				</LabeledItem>
			)}
		</AddressGroup>
	);
};

export default ProfileInformation;
