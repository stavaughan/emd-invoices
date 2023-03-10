import React from 'react';
import { EditableListItem } from '.';

const ExtraContent = ({ extraData, editData }) => {

    return (
        <ul className="mb-0 list-inline text-light">
            {extraData.map((item, idx) => (
                <EditableListItem
                    key={idx}
                    itemData={item.itemData}
                    itemLabel={item.itemLabel}
                    editData={editData}
                />
            ))}
        </ul>
    );
};

export default ExtraContent;
