import React from 'react';
import { InputComponentWrap } from './components';
import clsx from 'clsx';

const InputComponent = ({
	onChange,
	labelClass,
	inputStyle,
	inputRef,
	groupClass,
	wrapStyle,
	onBlur,
	label,
	Icon,
	InvalidFeedBack,
	onNumberChange,
	floating,
	showError,
	errorMsg,
	className = '',
	smallLabel,
	optional,
	required,
	flush,
	small,
	type,
	size,
	...props
}) => {

	const onChangeHandler = (e) => {
		const value = e.target.value;
		e.preventDefault();
		if (onChange) onChange(value);
		if (onNumberChange) onNumberChange(e);
	};

	const onBlurHandler = (e) => {
		e.preventDefault();
		if (onBlur) {
			onBlur(e)
		}
	};

	return (
		<InputComponentWrap
			labelClass={labelClass}
			groupClass={groupClass}
			wrapStyle={wrapStyle}
			smallLabel={smallLabel}
			small={small}
			label={label}
			Icon={Icon}
			InvalidFeedBack={InvalidFeedBack}
			floating={floating}
			showError={showError}
			errorMsg={errorMsg}
			optional={optional}
			required={required}
			{...props}
		>
			<input
				type={type || 'text'}
				className={clsx(
					'form-control',
					size && `form-control-${size}`,
					flush && 'form-control-flush border-bottom',
					className
				)}
				{...inputRef && { ref: inputRef }}
				{...onChangeHandler && { onChange: onChangeHandler }}
				{...onBlurHandler && { onBlur: onBlurHandler }}
				{...inputStyle && { style: inputStyle }}
				{...props}
			/>
		</InputComponentWrap>
	)
}

export default InputComponent
