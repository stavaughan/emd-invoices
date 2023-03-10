import { InputComponent } from '.';
import clsx from 'clsx';

import InputClasses from '../styles/InputValidation.module.css';

const ValidationInput = ({
	type,
	id,
	notValid,
	alertMsg,
	handleOnBlur,
	changeType,
	blurType,
	dispatch,
	required,
	Icon,
	label,
	...props
}) => {

    const onChangeHandler = (value) => {
        const inputValue = value.trim();
        const tValue = type === 'email'
            ? inputValue.toLowerCase()
            : inputValue

        if(inputValue) {
            dispatch({
                type: changeType,
                val: tValue
            })
        }
    }

    const validateHandler = () => {
        dispatch({ type: blurType });
        if(handleOnBlur) {
            handleOnBlur()
        }
    };

    return (
        <InputComponent
			id={id}
			type={type || "text"}
			floating
			required={required}
			label={label}
			groupClass={clsx('mb-2', InputClasses.control, notValid && InputClasses.invalid)}
			errorMsg={alertMsg}
			showError={notValid}
			onChange={onChangeHandler}
			onBlur={validateHandler}
			name={id}
			Icon={Icon}
			{...props}
        />
    )
}

export default ValidationInput
