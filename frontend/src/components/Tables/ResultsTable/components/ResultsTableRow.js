import { RowImageCol, ContentRowColumns, RowActionCol } from 'components/Tables/ResultsTable/components';

const ResultsTableRow = ({
	item,
	upload,
	rowRef,
	setResults,
	colClasses,
	setID,
	onDelete,
	loading,
	deleteId
}) => {

	return (
		<tr>
			<RowImageCol
				item={item}
				upload={upload}
				setResults={setResults}
				fileType={item?.fileType || 'image'}
			/>
			<ContentRowColumns
				colClasses={colClasses}
				content={item?.content}
			/>
			<RowActionCol
				image={item?.image}
				setResults={setResults}
				itemID={item._id}
				setID={setID}
				onDelete={onDelete}
				loading={loading}
				deleteId={deleteId}
			/>
		</tr>
	)
}

export default ResultsTableRow
