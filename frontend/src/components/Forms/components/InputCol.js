import React from 'react'
import { Col } from 'components/HTML';
import { Input } from 'components/Forms/Inputs';

const ColWrap = ({ cols, colClass, children }) => (
	<Col cols={cols || '12'} {...colClass && { className: colClass }}>
		{children}
	</Col>
)

const InputCol = {

	Dropdown: (props) => (
		<ColWrap {...props}>
			<Input.Dropdown {...props} />
		</ColWrap>
	),
	Validation: (props) => (
		<ColWrap {...props}>
			<Input.Validation {...props} />
		</ColWrap>
	),
	Text: (props) => (
		<ColWrap {...props}>
			<Input.Text {...props} />
		</ColWrap>
	),
	TextArea: (props) => (
		<ColWrap {...props}>
			<Input.TextArea {...props} />
		</ColWrap>
	),
	Number: (props) => (
		<ColWrap {...props}>
			<Input.Number {...props} />
		</ColWrap>
	),
	NumberText: (props) => (
		<ColWrap {...props}>
			<Input.NumberText {...props} />
		</ColWrap>
	),
	NumberFormat: (props) => (
		<ColWrap {...props}>
			<Input.NumberFormat {...props} />
		</ColWrap>
	),
	ImageUpload: (props) => (
		<ColWrap {...props}>
			<Input.ImageUpload {...props} />
		</ColWrap>
	),
	RadioSelect: (props) => (
		<ColWrap {...props}>
			<Input.RadioSelect {...props} />
		</ColWrap>
	),
	CreatableMultiText: (props) => (
		<ColWrap {...props}>
			<Input.CreatableMultiText {...props} />
		</ColWrap>
	),
	CreatableMultiSelectDD: (props) => (
		<ColWrap {...props}>
			<Input.CreatableMultiSelectDD {...props} />
		</ColWrap>
	),
	CreatableDropdown: (props) => (
		<ColWrap {...props}>
			<Input.CreatableDropdown {...props} />
		</ColWrap>
	),
	Toggle: (props) => (
		<ColWrap {...props}>
			<Input.Toggle {...props} />
		</ColWrap>
	),
	Date: (props) => (
		<ColWrap {...props}>
			<Input.Date {...props} />
		</ColWrap>
	),
	Phone: (props) => (
		<ColWrap {...props}>
			<Input.PhoneInput {...props} />
		</ColWrap>
	)
}

export default InputCol
