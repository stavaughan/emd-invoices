const InputFileUpload = ({
	inputRef,
	onFileUpload,
	mimeType = 'image/*',
	multiple,
	value
}) => {

	return (
		<input
			{...multiple && { multiple: true }}
			className="hide"
			type="file"
			{...inputRef && { ref: inputRef }}
			autoComplete="off"
			aria-describedby="fileUpload"
			aria-label="Upload"
			tabIndex="-1"
			value={value || ''}
			onChange={onFileUpload}
			accept={mimeType}
		/>
	)
}

export default InputFileUpload
