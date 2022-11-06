import { GroupDeleteLabel } from 'components/Forms/components';
import { useInputAddress } from 'components/Forms/inputLogic';
import { AddressInputs, MailingToggle } from '.';
import { Row } from 'components/HTML';
import { Global } from 'globals/js';

const AddressGroup = ({
	small,
	type,
	prefix,
	toggle,
	setToggle,
	setEntering,
	...props
}) => {

	const {
		newAddress,
		onSetValue,
		handleBlur,
		onDeleteAddress
	} = useInputAddress({ type, setToggle, setEntering, ...props })

	return (
		<>
			<GroupDeleteLabel
				label={Global.upperCaseFirst(`${type} Address`)}
				test={toggle}
				onDelete={onDeleteAddress}
				{...small && { margin: 'mb-1' }}
				sub={small}
				type={type}
				ActionLabel={() => (
					<MailingToggle
						prefix={prefix}
						toggle={toggle}
						setToggle={setToggle}
					/>
				)}
			/>
			{((toggle && type === 'mailing') || type === 'physical') && (
				<Row className="g-2 pb-3">
					<AddressInputs
						newAddress={newAddress}
						onSetAddress={onSetValue}
						onBlurFn={handleBlur}
						prefix={prefix + type}
						smallLabel={small}
					/>
				</Row>
			)}
		</>
	);
};

export default AddressGroup;
