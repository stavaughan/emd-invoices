import { useCallback, useMemo } from 'react'
import { ListGroup } from 'components/Lists';
import { AddressItem } from 'components/Partials/Address';

const AddressGroup = ({ addresses, children }) => {

	const completeAddresses = useMemo(() => {
		return addresses.filter(item => item.address !== 'Same as physical' && !!item.address?.street1)
	}, [addresses])

	const itemKey = useCallback((street1) => {
		return street1
			.replaceAll(' ', '')
			.replaceAll('.', '')
			.toLowerCase();
	}, [])

	return (
		<ListGroup>
			{children}
			{completeAddresses?.length ? completeAddresses.map(item => (
				<AddressItem
					key={itemKey(item.address.street1)}
					id={itemKey(item.address.street1)}
					item={item}
				/>
			)) : null}
		</ListGroup>
	)
}

export default AddressGroup
