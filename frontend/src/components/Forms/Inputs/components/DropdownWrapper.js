import { InputLabel } from 'components/Forms/Inputs/components';

const DropdownWrapper = ({ label, smallLabel, children, ...props }) => {

	return (
		<div className="dropdown">
			{label && <InputLabel label={label} smallLabel={smallLabel} {...props} />}
			{children}
		</div>
	);
};

export default DropdownWrapper;
