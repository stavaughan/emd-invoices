import { Alerts } from 'globals/js';
import { AlertBanner } from 'components/Alerts';
import { InputLabel } from '.';

const InputWrapper2 = ({
	error,
	alertType,
	children,
	smallLabel,
	...props
}) => {

	return (
		<>
			<InputLabel smallLabel={smallLabel} {...props} />
			{children}
			{(error && !!alertType) && (
				<AlertBanner className="mt-2">
					{Alerts[alertType]}
				</AlertBanner>
			)}
		</>
	)
}

export default InputWrapper2
