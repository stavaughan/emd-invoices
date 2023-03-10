import clsx from 'clsx';

const RadioSelectInput = ({
	groupID,
	id,
	checkedData,
	setData,
	labelClass,
	label
}) => {

    return (
        <div className="form-check mb-2">
            <input
				id={id}
				type="radio"
                className="form-check-input"
                {...groupID && { name: groupID }}
                onChange={(e) => e.target.checked && setData(id)}
                checked={checkedData === id}
            />
            <label
                className={clsx('form-check-label', labelClass)}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}

export default RadioSelectInput
