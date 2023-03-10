import React from 'react'
import {
	InputNumber,
	InputText,
	InputValidation,
	InputDropdown,
	TextAreaInput,
	InputNumberFormat,
	InputNumberText,
	InputImageUpload,
	RadioSelectOptions,
	InputDate
} from './components';

import {
	CreatableMultiSelectText,
	CreatableMultiSelectDD,
	CreatableSelectDD
} from '../CreatableInputs';

import {
	SwitchToggle,
	PhoneInput
} from '.';

const Input = {

	Dropdown: (props) => (
		<InputDropdown {...props} />
	),

	Validation: (props) => (
		<InputValidation
			maxLength={props?.maxLength || '50'}
			placeholder={props?.placeholder || " "}
			autoComplete={props?.autoComplete || "off"}
			{...props}
		/>
	),

	Text: (props) => (
		<InputText
			maxLength={props?.maxLength || '150'}
			{ ...props }
		/>
	),

	Number: (props) => (
		<InputNumber {...props} />
	),

	NumberText: (props) => (
		<InputNumberText {...props} />
	),

	NumberFormat: (props) => (
		<InputNumberFormat {...props} />
	),

	TextArea: (props) => (
		<TextAreaInput
			maxLength={props?.maxLength || '500'}
			{...props}
		/>
	),

	ImageUpload: (props) => (
		<InputImageUpload
			{...props}
		/>
	),

	PhoneInput: (props) => (
		<PhoneInput
			{...props}
		/>
	),

	RadioSelect: (props) => (
		<RadioSelectOptions
			{...props}
		/>
	),

	CreatableMultiText: (props) => (
		<CreatableMultiSelectText
			{...props}
		/>
	),

	CreatableMultiSelectDD: (props) => (
		<CreatableMultiSelectDD
			{...props}
		/>
	),

	CreatableDropdown: (props) => (
		<CreatableSelectDD
			{...props}
		/>
	),

	Toggle: (props) => (
		<SwitchToggle
			{...props}
		/>
	),

	Date: (props) => (
		<InputDate
			{...props}
		/>
	)
}

export default Input
