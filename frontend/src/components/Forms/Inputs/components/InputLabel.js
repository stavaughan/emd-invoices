import { Global } from 'globals/js';
import { themeClasses } from 'theme';
import clsx from 'clsx';

const InputLabel = ({
	id,
	className,
	required,
	optional,
	label,
	labelClass,
	smallLabel
}) => {

	const defaultClass = smallLabel
		? themeClasses.forms.inputGroups.label.fieldSmall
		: themeClasses.forms.inputGroups.label.field;

	const SupNotice = ({ notice }) => (
		<sup className={clsx(
			'ms-1 text-xs fst-italic font-light',
			notice === 'required' ? 'text-danger' : 'text-muted'
		)}>{notice === 'required' ? '*' : ' (optional)'}</sup>
	);

	return (
		<label
			htmlFor={id}
			className={clsx(className || defaultClass, labelClass)}
		>
			{Global.upperCaseFirst(label)}
			{optional && <SupNotice notice="optional" />}
			{required && <SupNotice notice="required" />}
		</label>
	)
}

export default InputLabel
