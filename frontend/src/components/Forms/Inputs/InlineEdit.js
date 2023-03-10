import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { Global } from 'globals/js';
import clsx from 'clsx';

const InlineEdit = ({
	newLabel,
	onEditValue,
	height,
	label,
	small,
	type,
	style
}) => {

	const [number, setNumber] = useState(newLabel ? `${newLabel}` : '');

    const onEdit = (e) => {
		e.preventDefault()
		onEditValue(e.target.value)
    };

	const handleValueChange = (e) => {
		const value = e.target.value;
		const textValue = value.trim();
		const numValue = Global.allNumberCharacters(textValue);
		onEditValue(textValue ? Math.abs(numValue) : 0);
		setNumber(textValue ? numValue.toString() : '');
	};

    const className = clsx(
		small && 'form-control-sm',
		'form-control-flush rounded-1 bg-transparent w-100'
	);

	const inputStyle = {
		...style,
		fontSize: 'inherit',
		padding: '0px',
		margin: '0px',
		minHeight: height || 'inherit',
		fontWeight: 'inherit'
	}

    if(type === 'phone') {
        return (
            <PatternFormat
                type="tel"
                className={className}
                defaultValue={newLabel || ''}
                onChange={onEdit}
                format="+1 (###) ###-####"
                mask="_"
                allowEmptyFormatting={true}
				style={inputStyle}
            />
        )
    }

	if(type === 'numberText') {
		return (
			<input
				type="text"
				className={className + ' text-end'}
				value={number}
				placeholder="00.00"
				onChange={handleValueChange}
				style={inputStyle}
			/>
		)
	}

    return (
        <input
            type={type || 'text'}
            className={className}
            value={newLabel || ''}
            placeholder={label}
            onChange={onEdit}
			style={inputStyle}
        />
    )
}

export default InlineEdit
