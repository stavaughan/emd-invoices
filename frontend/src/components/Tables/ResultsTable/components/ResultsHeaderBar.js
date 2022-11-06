import { ResultsLayoutSelector } from '.'
import clsx from 'clsx';

import Classes from '../ResultsTable.module.css'

const ResultsHeaderBar = ({ display, setDisplay, quantity, headContent }) => {

    const hrTest = !!setDisplay || !!headContent;

    return (
        <div className="d-flex">
            <div className={clsx(
				hrTest ? Classes['hr-text'] : 'text-center',
				'flex-shrink-1 flex-grow-1'
			)}>
                <div className="px-2">
                    Results
                    <span className="ms-2 badge rounded-pill bg-primary-soft align-middle" style={{width: "2rem"}}>
                        {quantity}
                    </span>
                </div>
            </div>
            {hrTest && (
                <ResultsLayoutSelector
                    display={display}
                    setDisplay={setDisplay}
                    headContent={headContent}
                />
            )}
        </div>
    )
}

export default ResultsHeaderBar
