import { ResultsHeaderBar } from '.'

const ResultsWrapper = ({
	results,
	display,
	setDisplay,
	headContent,
	children
}) => {

    return (
        <div className="mt-2">
            {results?.length ? (
                <ResultsHeaderBar
                    quantity={results.length}
                    display={display}
                    setDisplay={setDisplay}
                    headContent={headContent}
                />
            ) : null}
            {children}
        </div>
    )
}

export default ResultsWrapper
