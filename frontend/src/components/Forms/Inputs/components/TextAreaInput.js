import { MaxLengthCount, InputComponentWrap } from '.';

const TextAreaInput = ({ setTextValue, ...props }) => {

	const onChangeHandler = (e) => {
		const value = e.target.value;
		setTextValue(value)
	};

	return (
		<InputComponentWrap {...props}>
			<textarea
				className="form-control"
				rows="4"
				onChange={onChangeHandler}
				{...props}
			/>
			<MaxLengthCount {...props} />
		</InputComponentWrap>
	)
}

export default TextAreaInput
