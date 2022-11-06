import React from 'react'
import { ResultsTableWrapper, ResultsWrapper } from './components'

const ResultsTable = (props) => {

    const {
        results,
        setResults,
        headContent,
        deleteId,
        loading,
        display,
        setDisplay,
        headItems,
		colWidths,
		colClasses,
        footerContent,
        setID,
        onDelete,
        upload
    } = props;

    return (
        <ResultsWrapper
            results={results}
            display={display}
            setDisplay={setDisplay}
            headContent={headContent}
        >
            <ResultsTableWrapper
                results={results}
                setResults={setResults}
                headItems={headItems}
				colWidths={colWidths}
				colClasses={colClasses}
                footerContent={footerContent}
                setID={setID}
                deleteId={deleteId}
                loading={loading}
                onDelete={onDelete}
                upload={upload}
            />
        </ResultsWrapper>
    )
}

export default ResultsTable
