import clsx from 'clsx';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';

const TableSingleColRow = ({ label = '', children }) => {

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

	return (
		<tr>
			<th
				className={clsx(
					isXSmall ? 'text-xxs' : 'text-xs',
					"text-dark font-normal"
				)}
				style={{ width: isXSmall ? '120px' : '170px' }}
			>
				{label}
			</th>
			<td className={clsx(smallText, 'text-secondary')}>
				{children}
			</td>
		</tr>
	);
};

export default TableSingleColRow;
