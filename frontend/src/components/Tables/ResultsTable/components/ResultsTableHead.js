const ResultsTableHead = ({ headItems, colWidths, colClasses }) => {
	return (
		<thead>
			<tr>
				{['', ...headItems].map((item, idx) => (
					<th
						key={idx}
						scope="col"
						{...colWidths && !!colWidths?.length
							? { style: colWidths[idx] }
							: {}
						}
						{...colClasses?.length
							? { className: colClasses[idx] }
							: {}
						}
					>
						{idx !== 0 && item}
					</th>
				))}
			</tr>
		</thead>
	)
}

export default ResultsTableHead
