import React, { useState } from 'react'

const EditableListItem = ({ itemData, itemLabel, editData }) => {

	const [itemValue, setItemValue] = useState(itemData);

	const onChangeHandler = (e) => {
		setItemValue(e.target.value)
	};

	return (
		<li className="list-inline-item me-3">
			{!editData ? (
				<span className="text-sm">
					{itemValue}
				</span>
			) : (
				<input
					type="text"
					className="form-control"
					value={itemValue}
					onChange={onChangeHandler}
				/>
			)}
			<div className="text-xs text-white-50">
				{itemLabel}
			</div>
		</li>
	)
}

export default EditableListItem
