import React from "react";

const RadioButton = ({ onCheckHandler, id, groupID, checkedID, label }) => {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="radio"
				name={groupID}
				id={id}
				onChange={(e) => onCheckHandler(e.target.id)}
				checked={checkedID === id}
			/>
			<label
				className="form-check-label text-muted text-sm"
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
