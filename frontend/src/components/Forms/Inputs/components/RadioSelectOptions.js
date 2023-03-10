import { InputComponentWrap, RadioSelectInput } from '.';

const RadioSelectOptions = ({
	checkedData,
	groupID,
	setData,
	optionsData,
	labelClass,
	inputKey,
	required,
	optional,
	name,
	label,
	lsmall
}) => {

	return (
		<InputComponentWrap
			id={groupID}
			labelClass={lsmall ? 'text-muted text-xs pb-2' : 'text-secondary pb-2'}
			label={label}
			required={required}
			optional={optional}
		>
            {optionsData.map(item => (
                <RadioSelectInput
                    key={item.itemID}
                    groupID={groupID}
                    id={item.itemID}
                    setData={setData}
                    label={item.label}
                    inputKey={inputKey}
					labelClass={labelClass}
                    checkedData={checkedData}
                    name={name}
                />
            ))}
		</InputComponentWrap>
	)
}

export default RadioSelectOptions
