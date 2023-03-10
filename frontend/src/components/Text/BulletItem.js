import { InfoAlert } from "components/Alerts"
import { CheckIcon } from "@heroicons/react/outline"

const BulletItem = ({ label, description }) => {
	return (
		<div className="d-flex justify-content-start align-items-center">
			<CheckIcon className="w-4 h-4 text-success me-2" />
			<div className="d-flex justify-content-start align-items-center">
				<div className="highlight text-success text-wrap overflow-auto">{label}</div>
				{description && (
					<InfoAlert
						message={description}
						className="ms-2"
						style={{ "--bs-text-opacity": .75 }}
					/>
				)}
			</div>
		</div>
	)
}

export default BulletItem
