import React from 'react'
import {
	ResultsTableHead,
	ResultsTableFooter,
	ResultsTableRow
} from 'components/Tables/ResultsTable/components';

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
	upload,
	sticky
}) => {

	return (
		<div className="table-responsive">
			<table className="mt-3 table table-hover table-sm align-middle caption-top">
				<ResultsTableHead
					headItems={headItems}
					colWidths={colWidths}
					colClasses={colClasses}
					sticky={sticky}
				/>
				<tbody>
					{results?.length ? results.map(item => (
						<ResultsTableRow
							key={item._id}
							item={item}
							upload={upload}
							setResults={setResults}
							colClasses={colClasses}
							setID={setID}
							onDelete={onDelete}
							loading={loading}
							deleteId={deleteId}
						/>
					)) : null}
				</tbody>
				{footerContent?.length ? (
					<ResultsTableFooter
						content={footerContent}
						colWidths={colWidths}
						colClasses={colClasses}
					/>
				) : null}
			</table>
		</div>
	)
}

export default ResultsTableWrapper
