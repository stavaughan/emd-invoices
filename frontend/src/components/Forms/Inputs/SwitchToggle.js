import { themeClasses } from 'theme';
import clsx from 'clsx';

const SwitchToggle = ({
	label,
	id,
	setToggle,
	onBlur,
	toggle
}) => {

	const onToggleHandler = (e) => {
		const checked = e.target.checked;
		setToggle(checked);
	};

	const themeLabel = themeClasses.forms.inputGroups.label;

	return (
		<div className={clsx(
			label && 'd-flex align-items-center',
			"form-check form-switch"
		)}>
			<input
				className="form-check-input my-0"
				type="checkbox"
				checked={toggle}
				onChange={onToggleHandler}
				onBlur={onBlur}
				role="switch"
				id={id}
			/>
			{label && (
				<>
					<label
						className={themeLabel.fieldInline}
						htmlFor={id}
					>
						{label}
					</label>
				</>
			)}
		</div>
	);
};

export default SwitchToggle
