import clsx from 'clsx';

const TableRowNested = ({ rowCols, colCols, tdClass, rowClass, nestedClass, td1Class }) => {

	return (
		<>
			<tr {...rowClass && { className: rowClass }}>
				{rowCols.map((col, idx) => (
					<td
						key={col.colID}
						id={col.colID}
						className={clsx(tdClass, idx === 0 && td1Class)}
						colSpan={col.colSpan}
					>
						{col?.handler
							? <col.content {...col.handler && { handleClick: col.handler }} />
							: col.content}
					</td>
				))}
			</tr>
			<tr {...nestedClass && { className: nestedClass }}>
				{colCols.map((col, idx) => (
					<td
						key={col.colID}
						id={col.colID}
						className={clsx(
							col?.colClass || tdClass,
							(idx === 0 && !col?.colClass) && td1Class
						)}
						colSpan={col.colSpan}
					>
						{col?.handler ? (
							<col.content {...col.handler && { handleClick: col.handler }} />
						) : col.content}
					</td>
				))}
			</tr>
		</>

	)
}

export default TableRowNested
