import NumberFormat from 'react-number-format';
import clsx from 'clsx';
import { InlineEncryptCC } from '.';

const InlineEncryptEdit = ({
	type,
	newLabel,
	onEditValue,
	onHandleUpdate,
	small,
	clear,
	...props
}) => {

	const onEdit = (e) => {
		e.preventDefault()
		const value = e.target.value;
		onEditValue(prev => ({ ...prev, maskedStr: value }))
	};

	const className = clsx(
		small && 'form-control-sm',
		'rounded-1 bg-transparent text-slate-700'
	);

	const onBlurHandler = (e) => {
		e.preventDefault();
		!!onHandleUpdate && onHandleUpdate();
	};

	const style = {
		fontSize: 'inherit',
		padding: '1px 3px',
		margin: '0',
		minHeight: 'inherit',
		fontWeight: 'inherit',
		opacity: '.75',
		color: 'inherit',
		border: '1px solid var(--slate-200)',
	}

	if (type === 'number') {
		return (
			<NumberFormat
				type={type}
				className={className}
				value={newLabel.maskedStr}
				onChange={onEdit}
				onBlur={onBlurHandler}
				format="+1 (###) ###-####"
				mask="_"
				allowEmptyFormatting={true}
				style={style}
			/>
		)
	}

	if (type === 'cc') {
		return (
			<InlineEncryptCC
				newLabel={newLabel}
				onUpdateValue={onEdit}
				onBlurHandler={onBlurHandler}
				className={className}
				style={style}
				clear={clear}
			/>
		)
	}

	return (
		<input
			type="text"
			className={className}
			maxLength={props?.maxLength || '250'}
			value={newLabel.maskedStr}
			onChange={onEdit}
			onBlur={onBlurHandler}
			style={style}
			{...props}
		/>
	)
}

export default InlineEncryptEdit
