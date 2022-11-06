import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { DropdownWrapper } from '../Inputs/components';
import { useClear } from 'hooks';
import { creatableStyles } from '.';

const createOption = (label) => ({ label, value: label });

const CreatableMultiSelectText = ({ setOptions, clear, ...props }) => {

	const initState = { inputValue: '', values: [] }
	const [labels, setLabels] = useState(initState);

	const handleChange = (value) => {
		setLabels(prev => ({ ...prev, values: value }));
		setOptions(value);
	};

	const handleInputChange = (inputValue) => {
		setLabels(prev => ({ ...prev, inputValue }));
	};

	const handleKeyDown = (e) => {
		const { inputValue, values } = labels;
		const compareValues = labels.values.map(_ => _.value);
		if (!inputValue || compareValues.includes(inputValue)) {
			setLabels(prev => ({ ...prev, inputValue: '' }))
			return
		};
		switch (e.key) {
			case 'Enter':
			case 'Tab': {
				setLabels(prev => ({
					inputValue: '',
					values: [...prev.values, createOption(inputValue)],
				}));
				const currentValues = values.map(_ => _.value);
				const newValues = [...currentValues, inputValue];
				setOptions(newValues);
				e.preventDefault();
				break;
			}
			default:
				break;
		}
	};

	useClear(clear, () => setLabels(initState));

	return (
		<DropdownWrapper {...props}>
			<CreatableSelect
				styles={creatableStyles}
				components={{ DropdownIndicator: null }}
				inputValue={labels.inputValue}
				isClearable
				isMulti
				menuIsOpen={false}
				onChange={handleChange}
				onInputChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder="Enter tags for quick reference..."
				value={labels.values}
			/>
		</DropdownWrapper>
	);
}

export default CreatableMultiSelectText;
