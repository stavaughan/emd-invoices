import { amountUSD } from "globals/js";
import { InlineEdit } from 'components/Forms/Inputs';

const EditPrice = ({
	itemValue,
	itemID,
	editID,
	setValue,
	newValue,
	setEditReady
}) => {

	return (
		<>
			{editID === itemID ? (
				<InlineEdit
					type="numberText"
					newLabel={newValue || itemValue}
					onEditValue={setValue}
					onKeyPress={() => setEditReady(true)}
					style={{ width: '60px' }}
					small
				/>
			) : amountUSD({ num: itemValue || 0, dec: 2 })}
		</>
	)
}

export default EditPrice
