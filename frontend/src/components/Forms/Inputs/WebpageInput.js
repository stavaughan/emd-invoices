import { useState, useCallback } from 'react'
import { InputCol } from '../components';
import { regexTests } from 'globals/js';
import { useClear } from 'hooks';

const WebpageInput = ({
	cols,
	label,
	placeholder,
	setValue,
	currentValue,
	required,
	id,
	onBlur,
	smallLabel,
	clear,
	...props
}) => {

    const [url, setUrl] = useState({
		value: currentValue || '',
		error: false
	});

	const clearState = useCallback(() => {
		setUrl(prev => ({ ...prev, value: currentValue || '', error: false }))
	}, [currentValue])

	useClear(clear, clearState)

    const handleChange = (value) => {
        const textValue = value ? value.trim() : '';
		if(!textValue){
			setValue('')
		}
		const smallCase = textValue ? textValue.toLowerCase() : '';
		const isValid = smallCase && regexTests.url.test(smallCase);
        setUrl({ value: textValue, error: !isValid });
		if(isValid){
			setValue(textValue)
		}
    };

    return (
		<InputCol.Validation
			id={id}
			cols={cols}
			label={label}
			type="url"
			value={url.value}
			onChange={handleChange}
			onBlur={onBlur}
			invalidMessage="Please enter a valid url."
			isValid={!url.error}
			required={required}
			smallLabel={smallLabel}
			{...props}
		/>
    );
};

export default WebpageInput;
