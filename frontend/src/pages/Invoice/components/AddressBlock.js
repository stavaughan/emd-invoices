import { useMemo } from 'react';
import clsx from 'clsx';

const AddressBlock = ({ address, className }) => {

	const addressStreet = useMemo(() => {
		const street1 = address?.street1 || '';
		const street2 = address?.street2 ? `, ${address?.street2}` : '';
		if (!street1 && !street2) return '';
		return `${street1} ${street2}`
	}, [address?.street1, address?.street2])

	if (!address?.city) return null;

	return (
		<div
			className={clsx(
				className,
				'd-flex flex-column'
			)}
		>
			{addressStreet && (
				<div>
					{addressStreet}
				</div>
			)}
			<div>
				{`${address?.city}, ${address?.state} ${address?.zip_code}`}
			</div>
		</div>
	);
};

export default AddressBlock;
