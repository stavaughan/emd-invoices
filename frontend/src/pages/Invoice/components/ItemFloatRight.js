import { TextBetween } from "components/Wrappers"

const ItemFloatRight = (props) => {

	return (
		<TextBetween className="float-end w-75">
			<div className="me-3 text-xs text-gray-500 leading-5m">
				{props?.label}
			</div>
			<div className="text-sm mb-0 text-secondary leading-5m">
				{props?.name}
			</div>
		</TextBetween>
	)
}

export default ItemFloatRight
