import { useState } from 'react'
import { ResultsWrapper, ResultsTableWrapper } from 'components/Tables/ResultsTable/components';
import { ResultsImages } from '.';

const UploadResults = ({files, setFiles}) => {

    const [display, setDisplay] = useState('images');

    const headItems = ['File Name','Size','Modified Date','Actions'];

    return (
        <ResultsWrapper
            results={files}
            display={display}
            setDisplay={setDisplay}
        >
            {display === 'images' ? (
                <ResultsImages
                    results={files}
                    setFiles={setFiles}
                    headItems={headItems}
                />
            ) : (
                <ResultsTableWrapper
                    results={files}
                    setResults={setFiles}
                    headItems={headItems}
                />
            )}
        </ResultsWrapper>
    )
}

export default UploadResults
