import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { DropdownWrapper } from '../Inputs/components';
import { useClear } from 'hooks';
import { creatableStyles } from '.';

const animatedComponents = makeAnimated();

const CreatableSelectDD = ({
	options,
	setDDvalue,
	setInputItem,
	setReady,
	isLoading,
	clear,
	...props
}) => {

	const initState = { label: '', value: '' }
	const [inputLabel, setInputLabel] = useState(initState);

	const handleChange = (newValue, actionMeta) => {
		switch(actionMeta.action) {
			case 'select-option':
				setInputItem('')
				setDDvalue(newValue?.id)
				setInputLabel(prev => ({ ...prev, label: '' }));
				break;
			case 'clear':
				setDDvalue('')
				setInputItem('')
				setInputLabel({ label: '', value: '' })
				break;
			case 'create-option':
				setDDvalue(newValue?.label)
				setInputItem(newValue?.label)
				setInputLabel(prev => ({ ...prev, value: newValue.value }));
				!!setReady && setReady(true)
				break;
			default:
				break;
		}
	};

	const handleInputChange = (inputValue) => {
		setInputLabel(prev => ({ ...prev, label: inputValue }));
	};

	const handleKeyDown = (e) => {
		const { label } = inputLabel;
		if (!e.target.value) {
			setInputLabel(prev =>({ ...prev, label: '' }))
			return
		};
		switch (e.key) {
			case 'Enter':
			case 'Tab': {
				setInputLabel(prev => ({ ...prev, label }));
				!!setReady && setReady(false);
				e.preventDefault();
				break;
			}
			default:
				break;
		}
	};

	useClear(clear, () => setInputLabel(initState))

	return (
		<DropdownWrapper {...props}>
			<CreatableSelect
				styles={creatableStyles}
				inputValue={inputLabel.label}
				isClearable
				menuPlacement="auto"
				maxMenuHeight={200}
				components={animatedComponents}
				onChange={handleChange}
				onInputChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder="Select or create..."
				isSearchable
				loadingMessage={() => 'Loading...'}
				noOptionsMessage={() => 'No options...'}
				isDisabled={isLoading}
				isLoading={isLoading}
				options={options}
			/>
		</DropdownWrapper>
	);
}

export default CreatableSelectDD;
