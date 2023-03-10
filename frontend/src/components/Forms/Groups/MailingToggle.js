import { Input } from 'components/Forms/Inputs';

const MailingToggle = ({ prefix, toggle, setToggle }) => {

	const toggleLabel = (
		<>
			Mailing Address is
			<span className="font-medium highlight ms-1">
				{toggle ? 'different than physical address' : 'same as physical address'}
			</span>
		</>
	)

	return (
		<Input.Toggle
			cols="12"
			label={toggleLabel}
			id={`${prefix}MailingDifferent`}
			setToggle={setToggle}
			toggle={toggle}
		/>
	)
}

export default MailingToggle
