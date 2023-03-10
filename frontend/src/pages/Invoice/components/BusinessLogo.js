import { UpdateBusinessLogo } from '.';
import clsx from 'clsx';

const BusinessLogo = ({ business, className }) => {

	return (
		<span className={clsx('pt-2', className)}>
			<UpdateBusinessLogo
				business={business}
				displayWidth="100"
				height="auto"
			/>
		</span>
	);
};

export default BusinessLogo;
