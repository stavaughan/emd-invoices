import clsx from 'clsx';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';

const TitleBlock = ({ name, title }) => {

	const { smallText, mediumText } = useContext(SettingsContext).fontSize;

	return (
		<div className="mb-2">
			<div className={clsx(
				mediumText,
				'text-white leading-5 mb-1'
			)}>
				{name}
			</div>
			<div className={clsx(
				smallText,
				"text-white-50"
			)}>
				{title}
			</div>
		</div>
	);
};

export default TitleBlock;
