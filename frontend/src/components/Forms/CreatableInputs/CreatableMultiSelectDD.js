import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { DropdownWrapper } from '../Inputs/components';
import { creatableStyles } from '.';

const animatedComponents = makeAnimated();

const CreatableMultiSelectDD = ({
	options,
	setSelected,
	setInputItem,
	differentValue,
	setReady,
	isLoading,
	...props
}) => {

	const handleChange = (selectedOption, actionMeta) => {
		const selectedIDs = selectedOption.map(_ => _.value);

		switch(actionMeta.action) {
			case 'select-option':
				setSelected(selectedIDs)
				//setInputItem('')
				break;
			case 'clear':
				setSelected(selectedIDs)
				setInputItem('')
				break;
			case 'create-option':
				const newValue = selectedOption.find(_ => _.__isNew__)?.label;
				if(!differentValue) {
					setSelected([...selectedIDs.filter(_ => _ !== newValue), newValue])
				}
				setInputItem(newValue)
				!!setReady && setReady(true)
				break;
			case 'remove-value':
				setSelected(selectedIDs)
				setInputItem('')
				break;
			default:
				break;
		}
	};

	const handleInputChange = (inputValue, actionMeta) => {
		if(actionMeta.action === 'input-change') {
			//console.log("handleInputChange input-change", inputValue);
		}
		if(actionMeta.action === 'input-blur') {
			//console.log("handleInputChange input-blur", inputValue);
		}
		if(actionMeta.action === 'set-value') {
			//console.log("handleInputChange set-value", inputValue);
		}
	};

	return (
		<DropdownWrapper {...props}>
			<CreatableSelect
				styles={creatableStyles}
				isClearable
				menuPlacement="auto"
				maxMenuHeight={200}
				closeMenuOnSelect={false}
				components={animatedComponents}
				onChange={handleChange}
				onInputChange={handleInputChange}
				isMulti={true}
				placeholder="Select multiple or create..."
				isSearchable
				loadingMessage={() => 'Loading...'}
				noOptionsMessage={() => 'No options found. Create a new one.'}
				isDisabled={isLoading}
				isLoading={isLoading}
				options={options}
			/>
		</DropdownWrapper>
	);
}

export default CreatableMultiSelectDD;
