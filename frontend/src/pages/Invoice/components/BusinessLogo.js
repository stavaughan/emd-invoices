import { UpdateBusinessLogo } from '.';
import clsx from 'clsx';

const BusinessLogo = ({ business, className, xsmall }) => {

	return (
		<span className={clsx(!xsmall && 'pt-2', className)}>
			<UpdateBusinessLogo
				business={business}
				displayWidth="100"
				height="auto"
			/>
		</span>
	);
};

export default BusinessLogo;
