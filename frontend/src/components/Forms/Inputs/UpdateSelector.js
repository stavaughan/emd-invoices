const UpdateSelector = ({ setChecked, checkedFields, selectorfields, id }) => {

	return (
		<div className="d-flex justify-content-start p-3 rounded-3 bg-light">
			<div className="d-flex flex-column ms-5">
				{selectorfields.map(field => {
					const fieldID = field[0];
					const fieldName = field[1];
					return (
						<div
							key={id + fieldID}
							className="form-check form-switch mb-1 text-xs"
						>
							<input
								type="checkbox"
								className="form-check-input"
								onChange={() => setChecked(fieldID)}
								checked={checkedFields[fieldID]}
								id={`${id + fieldID}-checkbox-selector`}
							/>
							<label
								className="form-check-label"
								htmlFor={`${id + fieldID}-checkbox-selector`}
							>
								{fieldName}
							</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default UpdateSelector
