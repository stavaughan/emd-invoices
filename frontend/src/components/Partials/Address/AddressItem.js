import { LabeledItem } from 'components/Lists';
import { Global } from 'globals/js';
import { Address } from '.';

const AddressItem = ({ item, id, length }) => (
    <LabeledItem
        id={id}
        label={Global.upperCaseFirst(item.type)}
        inline={false}
		length={length}
    >
        {item.address !== 'Same as physical' ? <Address address={item.address} /> : item.address}
    </LabeledItem>
)

export default AddressItem
