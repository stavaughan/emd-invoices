import { ToolTip } from 'components/ToolTip';
import clsx from 'clsx';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const InfoAlert = ({ message, question, style, className }) => {

	return (
		<ToolTip tip={message} span={true}>
			<FAIcon
				icon={question ? "question-circle" : "info-circle"}
				className={clsx("text-info", className)}
				{...style && { style }}

			/>
		</ToolTip>
	)
}

export default InfoAlert
