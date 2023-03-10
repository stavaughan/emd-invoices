import React from 'react';
import { InputLabel, InputWrapper } from '.';

const InputComponentWrap = ({ children, ...props }) => {

	const labelProps = {
		...props?.labelClass && { className: props.labelClass },
		...props?.smallLabel && { smallLabel: props.smallLabel },
		...props?.required && { required: props.required },
		...props?.optional && { optional: props.optional },
		...props
    };

	const wrapperProps = {
		...props?.helperMsg && { helperMsg: props.helperMsg },
		...props?.groupClass && { className: props.groupClass },
		...props?.wrapStyle && { style: props.wrapStyle },
		...props?.showError && { error: props.showError },
		...props?.errorMsg && { alert: props.errorMsg },
		...props
	};

	return (
		<InputWrapper {...wrapperProps}>
			{(!props?.floating && !!props?.label) && <InputLabel {...labelProps} />}
            {children}
			{props?.Icon && <props.Icon />}
			{(props?.floating && !!props?.label) && <InputLabel {...labelProps} />}
		</InputWrapper>
	)
}

export default InputComponentWrap
