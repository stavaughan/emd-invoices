import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

const TableRow = ({
	rowCols,
	tdClass,
	rowClass,
	td1Class
}) => {

	const { smallText } = useContext(SettingsContext).fontSize;

	return (
		<tr {...rowClass && { className: rowClass }}>
			{rowCols.map((col, idx) => (
				<td
					key={col.colID}
					className={clsx(
						tdClass,
						(td1Class && idx === 0) && td1Class
					)}
					{...col?.style && { style: col.style }}
				>
					<div className={smallText}>
						{col?.handler ? (
							<col.content
								{...col.handler && { handleClick: col.handler }}
							/>
						) : col.content}
					</div>
				</td>
			))}
		</tr>
	)
}

export default TableRow
