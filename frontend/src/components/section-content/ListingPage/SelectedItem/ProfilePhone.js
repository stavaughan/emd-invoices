import { PhoneLink } from "components/links";
import { ClipboardCopyBtn } from "components/Buttons/Type";

const ProfilePhone = ({ phone, formPhone }) => {
	return (
		<>
			<PhoneLink
				phone={phone}
				formatted={formPhone}
				className="link-hover"
			/>
			<ClipboardCopyBtn
				string={formPhone}
				item="phone"
				//bottom={true}
			/>
		</>
	)
}

export default ProfilePhone
