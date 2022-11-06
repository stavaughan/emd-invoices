import React from 'react';
import { DropdownWrapper } from './components';
import clsx from 'clsx';

const DropdownSelect = ({
	onChange,
	onBlur,
	multiple,
	options,
	label,
	selected,
	flush,
	required,
	id,
	upperCase,
	small,
	smallLabel,
	selectLabel,
	...props
}) => {

	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const defaultValue = `- ${selectLabel || 'SELECT'} -`;
		if (onChange && value !== defaultValue) {
			onChange(e.target.value);
		}
	};

	return (
		<DropdownWrapper
			label={label}
			required={required}
			smallLabel={smallLabel}
			id={id}
			{...props}
		>
			<select
				id={id}
				className={clsx(
					'form-select',
					flush && 'form-control-flush border-bottom',
					small && 'form-select-sm'
				)}
				aria-label={label}
				onChange={handleChange}
				onBlur={onBlur}
				value={selected || ''}
				multiple={multiple}
				{...props}
			>
				<option
					key="default"
					defaultValue="default"
					className="text-muted"
					//disabled
				>
					{`- ${selectLabel || 'SELECT'} -`}
				</option>
				{options?.length ? options.map((option, idx) => {
					const optionID = option?._id || option?.id;
					return (
						<option
							className="text-dark"
							key={optionID || idx}
							value={optionID}
						>
							{option.label}
						</option>
					)
				}) : null}
			</select>
		</DropdownWrapper>
	);
};

export default DropdownSelect;
