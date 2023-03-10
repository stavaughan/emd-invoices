import React from 'react';
import { Table, TableRow, TableRowAccordian, TableRowNested } from '.';

const ResponsiveTable = ({
	tableContent,
	tdClass,
	rowClass,
	td1Class,
	type
}) => {

    const { headerRow = [], tableRows } = tableContent;

    return (
        <div className="table-responsive">
            <Table className="text-nowrap mb-2">
                {headerRow?.length ? (
                    <thead>
                        <tr>
                            {headerRow.map(col => (
                                <th
                                    key={col.colID}
                                    {...col?.colProps}
                                    {...col?.colSpan && { colSpan: col.colSpan }}
                                    scope="col"
									{...col?.style && { style: col.style }}
                                >
                                    {col.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                ) : null}
                <tbody>
                    {tableRows?.length ? tableRows.map(row => (
                        <React.Fragment key={row?.rowID}>
							{!['accordian', 'nested'].includes(type) && (
                                <TableRow
                                    rowCols={row?.rowCols}
                                    rowClass={rowClass}
                                    tdClass={tdClass}
                                    td1Class={td1Class}
                                />
							)}
                            {type === 'accordian' && (
                                <TableRowAccordian
                                    rowID={row?.rowID}
                                    rowCols={row?.rowCols}
                                    colCols={row?.colCols}
                                    rowClass={rowClass}
                                    tdClass={tdClass}
                                    td1Class={td1Class}
                                />
                            )}
                            {type === 'nested' && (
                                <TableRowNested
                                    rowCols={row?.rowCols}
                                    colCols={row?.colCols}
                                    rowClass={rowClass}
                                    tdClass={tdClass}
                                    td1Class={td1Class}
									nestedClass={row?.nestedClass}
                                />
                            )}
                        </React.Fragment>
                    )) : null}
                </tbody>
            </Table>
        </div>
    )
}

export default ResponsiveTable
