import { useMemo } from 'react';
import { useMobile } from 'hooks';
import { Address as AddressClass } from 'state/schemaConstructors';
import clsx from 'clsx';

const Address = ({ address, className }) => {

	const { isXSmall } = useMobile();

	const {
		street1,
		street2,
		addressLine1,
		addressLine2,
		test2
	} = useMemo(() => new AddressClass(address).output, [address]);

	return (
		<div className={clsx(
			isXSmall ? 'text-xs' : 'text-sm',
			"leading-5"
		)}>
			{street1 && (
				<address {...className && { className }}>
					{addressLine1}
					<br />
					{test2 && <>{street2}<br /></>}
					{addressLine2}
				</address>
			)}
		</div>
	);
};

export default Address;
