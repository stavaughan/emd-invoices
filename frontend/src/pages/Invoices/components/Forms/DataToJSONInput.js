import { JsonCodeBlock } from 'components/Blocks'

const DataToJSONInput = ({
	codeBlock,
	invoicesObject,
	resultTotal,
	display,
	onDeleteHandler,
	resultValue,
	placeholder,
	setTextValue,
	handleBlurEvent,
	textValue
}) => {

	const onChangeHandler = (e) => {
		e.preventDefault();
		setTextValue(e.target.value)
	};

	return (
		<>
			{display ? (
				<div className="text-primary position-relative">
					{codeBlock ? (
						<JsonCodeBlock
							data={invoicesObject}
							titleKey="amount invoiced"
							titleValue={resultTotal}
							onClickHandler={onDeleteHandler}
							hasData={!!invoicesObject?.invoices?.length}
						/>
					) : (
						<div className="my-3 fw-light text-secondary">
							{resultValue}
						</div>
					)}
				</div>
			) : (
				<textarea
					className="form-control"
					placeholder={placeholder}
					value={textValue}
					onChange={onChangeHandler}
					onBlur={handleBlurEvent}
				></textarea>
			)}
		</>
	)
}

export default DataToJSONInput
