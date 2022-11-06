import clsx from 'clsx'

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'

const ResultsLayoutSelector = ({ display, setDisplay, headContent }) => {

    return (
        <div role="group" className="d-flex flex-grow-0 flex-shrink-0 ps-2 btn-group align-items-center">
            {headContent ? headContent : (
                <>
                    <button
                        type="button"
                        className={clsx(
							'btn btn-outline-primary btn-sm',
							display === 'lists' && 'active'
						)}
                        onClick={() => setDisplay('lists')}
                    >
                        <FAIcon icon="bars" className="fa-fw" />
                    </button>
                    <button
                        type="button"
                        className={clsx(
							'btn btn-outline-primary btn-sm',
							display === 'images' && 'active'
						)}
                        onClick={() => setDisplay('images')}
                    >
                        <FAIcon icon="th-large" className="fa-fw" />
                    </button>
                </>
            )}
        </div>
    )
}

export default ResultsLayoutSelector
