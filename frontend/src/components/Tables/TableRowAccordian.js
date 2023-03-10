import clsx from 'clsx';

const TableRowAccordian = ({
	rowCols,
	colCols,
	tdClass,
	rowClass,
	td1Class,
	rowID
}) => {

	return (
		<>
			<tr
				role="button"
				data-bs-toggle="collapse"
				data-bs-target={`#accordian${rowID}`}
				{...rowClass && { className: rowClass }}
				aria-expanded="false"
				aria-controls={`accordian${rowID}`}
			>
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
			<tr
				id={`accordian${rowID}`}
				className={clsx('collapse', rowClass)}
			>
				{colCols.map((col, idx) => (
					<td
						key={col.colID}
						id={col.colID}
						className={clsx(tdClass, idx === 0 && td1Class)}
						colSpan={col.colSpan}
					>
						{col?.handler ? (
							<col.content
								{...col.handler && { handleClick: col.handler }}
							/>
						) : col.content}
					</td>
				))}
			</tr>
		</>

	)
}

export default TableRowAccordian
