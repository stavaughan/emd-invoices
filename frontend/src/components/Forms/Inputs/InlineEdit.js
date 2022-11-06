import NumberFormat from 'react-number-format';
import clsx from 'clsx';

const InlineEdit = ({ newLabel, onEditValue, label, small, type }) => {

    const onEdit = (e) => {
		e.preventDefault()
		onEditValue(e.target.value)
    };

    const className = clsx(
		small && 'form-control-sm',
		'form-control-flush text-gray-400 rounded-1 bg-transparent'
	);

	const style = {
		fontSize: 'inherit',
		padding: '0px',
		margin: '0px',
		minHeight: 'inherit',
		fontWeight: 'inherit',
		opacity: '.75'
	}

    if(type === 'phone') {
        return (
            <NumberFormat
                type="tel"
                className={className}
                defaultValue={newLabel || ''}
                onChange={onEdit}
                format="+1 (###) ###-####"
                mask="_"
                allowEmptyFormatting={true}
				style={style}
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
			style={style}
        />
    )
}

export default InlineEdit
