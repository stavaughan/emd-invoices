import { useCallback, useEffect, useState } from 'react';
import { Col } from 'components/HTML';

const SentCheckBox = ({
	invoice,
	setSelectedIDs,
	onUpdateIds,
	setGroupChecked,
	groupChecked
}) => {

    const { _id, number } = invoice;

	const [checked, setChecked] = useState(false);

	const handleOnChecked = useCallback((isChecked) => {
		setChecked(isChecked);
        if(!isChecked) {
			setGroupChecked(prev => ({ ...prev, all: false }))
            onUpdateIds(_id, true)
        } else {
            onUpdateIds(_id)
			setGroupChecked(prev => ({ ...prev, none: false }))
        }
        setSelectedIDs(prev => isChecked ? [...prev, _id] : prev.filter(_ => _ !== _id));
	}, [_id, onUpdateIds, setGroupChecked, setSelectedIDs])

	useEffect(() => {
		if(groupChecked.all) {
			setChecked(true)
		} else if(groupChecked.none) {
			setChecked(false)
		}
	}, [groupChecked.all, groupChecked.none])

	const onChangeHandler = (e) => {
        const isChecked = e.target.checked;
		handleOnChecked(isChecked);
    };

    return (
        <Col cols="sm-3 6">
            <div className="form-check">
                <input
                    id={`bulksent${_id}`}
                    className="form-check-input"
                    type="checkbox"
                    checked={checked}
                    onChange={onChangeHandler}
                />
                <label
                    className="form-check-label"
                    htmlFor={`bulksent${_id}`}
                >
                    {number}
                </label>
            </div>
        </Col>
    )
}

export default SentCheckBox
