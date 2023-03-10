const ResultsTableFooter = ({ content, colWidths, colClasses }) => {
	return (
		<tfoot>
			<tr>
				{content.map((item, idx) => (
					<td
						key={idx}
						{...colWidths && !!colWidths?.length
							? { style: colWidths[idx] }
							: {}
						}
						{...colClasses?.length
							? { className: colClasses[idx] }
							: {}
						}
					>
						{item || ''}
					</td>
				))}
			</tr>
		</tfoot>
	)
}

export default ResultsTableFooter
