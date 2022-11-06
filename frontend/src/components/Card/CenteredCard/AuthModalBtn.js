import { ModalButton } from "components/Buttons";
import { SiteData } from "data";

const AuthModalBtn = ({ modalID, label }) => {
	return (
		<ModalButton
			className="btn-sm pb-2 dark:btn-link-blue"
			modalID={SiteData.modalIDs[modalID]}
			rest={{
				style: { "backgroundImage": "none" }
			}}
		>
			{label}
		</ModalButton>
	)
}

export default AuthModalBtn
