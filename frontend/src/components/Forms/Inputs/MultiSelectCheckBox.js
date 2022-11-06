import { useState } from 'react';
import { Col } from 'components/HTML';
import { CheckBox } from '.';

const MultiSelectCheckBox = ({ options, setData, setObject, cols, dataKey, setContacts }) => {

    const [values, setValues] = useState([])

    const handleOnChange = (checked, itemID) => {
        setValues(prev => checked ? [...prev, itemID] : prev.filter(item => item !== itemID))
        if (setData) {
            setData(prev => checked
				? [...prev, itemID]
				: prev.filter(item => item !== itemID))
        }
        if(setObject) {
            setObject(prev => ({
                ...prev,
                [dataKey]: checked ? [
                    ...prev[dataKey],
                    itemID
                ] : prev[dataKey].filter(_ => _ !== itemID)
            }))
        }
		if(setContacts) {
			const selectValues = checked ? [...values, itemID] : values.filter(item => item !== itemID)
            setContacts(selectValues, options)
        }
    };

    return (
        <>
            {options.map((item, idx) => {
                const itemID = item._id
                return (
                    <Col
                        key={itemID + idx + 1}
                        cols={cols || '12 md-6 lg-4'}
                    >
                        <CheckBox
                            value={itemID}
                            label={item.label}
                            handleOnChange={(checked) => handleOnChange(checked, itemID)}
                        />
                    </Col>
                )
            })}
        </>
    );
};

export default MultiSelectCheckBox;
