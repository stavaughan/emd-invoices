import { TextBetween } from "components/Wrappers"

const ItemFloatRight = ({ label, name }) => {

	return (
		<TextBetween className="float-end">
			<div className="me-3 text-super-small text-gray-500 leading-5m">
				{label}
			</div>
			<div className="text-sm mb-0 text-dark leading-5m">
				{name}
			</div>
		</TextBetween>
	)
}

export default ItemFloatRight
