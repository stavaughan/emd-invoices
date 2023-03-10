import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';
import { DeleteGroupBtn } from 'components/Buttons/Type';

const TitleDescription = ({ title, description, onDelete }) => {

	const { smallText } = useContext(SettingsContext).fontSize;

	return (
		<div className="d-flex justify-content-between align-items-center mb-2">
			<div>
				<div className="text-sm font-medium text-dark">
					{title}
				</div>
				{description && <div className={clsx(
					smallText,
					"font-normal text-secondary pb-2"
				)}>{description}</div>}
			</div>
			{onDelete && (
				<div className="position-relative mb-auto me-2">
					<DeleteGroupBtn setDelete={onDelete} />
				</div>
			)}
		</div>
	)
}

export default TitleDescription
