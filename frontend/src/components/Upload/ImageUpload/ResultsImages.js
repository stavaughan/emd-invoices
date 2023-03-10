import React from 'react';
import { ResultImage } from '.';

const ResultsImages = ({ results, setFiles }) => {
    return (
        <div className="mt-4 row">
            {results.map(file => (
                <ResultImage 
                    key={file._id}
                    file={file}
                    setFiles={setFiles} 
                />
            ))}
        </div>
    )
};

export default ResultsImages
