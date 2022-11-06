import { useCallback } from 'react';
import { ResultItemRow } from '.';
import clsx from 'clsx';

const ResultsTableWrapper = ({
	results,
	setResults,
	headItems,
	colWidths,
	colClasses,
	footerContent,
	setID,
	deleteId,
	loading,
	onDelete,
	upload
}) => {

	const colWidth = useCallback((idx) => {
		const cWidth = colWidths && colWidths?.length && colWidths[idx] !== null
			? colWidths[idx] : '';
		return cWidth && { style: cWidth }
	}, [colWidths]);

	const txtEnd = useCallback((idx, os) => {
		const last = ['', ...headItems].length - 1;
		const last3 = [last, last - 1, last - (os || 2)].includes(idx);
		return last3 && 'text-end';
	}, [headItems]);

	const colClass = useCallback((idx, os = 0) => {
		const cClass = colClasses && colClasses?.length ? colClasses[idx + os] : '';
		return (cClass || txtEnd(idx, os)) && { className: clsx(cClass, txtEnd(idx, os)) }
	}, [colClasses, txtEnd]);


	return (
		<div className="table-responsive">
			<table className="mt-3 table table-hover table-sm align-middle caption-top">
				<thead>
					<tr>
						{['', ...headItems].map((item, idx) => (
							<th key={idx} {...colWidth(idx)} {...colClass(idx)}>
								{idx !== 0 && item}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{results?.length ? results.map(item => (
						<ResultItemRow
							key={item._id}
							item={item}
							setResults={setResults}
							colClasses={colClasses}
							colClass={colClass}
							setID={setID}
							upload={upload}
							onDelete={onDelete}
							deleteId={deleteId}
							loading={loading}
							txtEnd={txtEnd}
						/>
					)) : null}
				</tbody>
				{footerContent?.length ? (
					<tfoot>
						<tr>
							{footerContent.map((item, idx) => (
								<td
									key={idx}
									{...txtEnd(idx) && { className: txtEnd(idx) }}
								>
									{item || ''}
								</td>
							))}
						</tr>
					</tfoot>
				) : null}
			</table>
		</div>
	)
}

export default ResultsTableWrapper
