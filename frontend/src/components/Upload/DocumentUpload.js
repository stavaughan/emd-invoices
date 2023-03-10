import React, { useCallback, useState } from 'react';
import { FileDropContainer } from './components';
import { useFileUpload } from 'hooks';
import { useClear } from 'hooks';

const DocumentUpload = ({
	apiPath,
	setUploadedFile,
	clear,
	fileID,
	label
}) => {

    const [selectedFile, setSelectedFile] = useState({})
    const [upLoadPercentage, setUpLoadPercentage] = useState(0);

    const clearStates = useCallback(() => {
        setUpLoadPercentage(0);
        setUploadedFile({});
        setSelectedFile({});
    }, [setUploadedFile])

    useFileUpload({
        file: selectedFile,
        apiPath,
        setPercentage: setUpLoadPercentage,
        setUploadedFile,
        setSelectedFile,
        ready: selectedFile?.type
    })

	useClear(clear, clearStates)

    return (
        <FileDropContainer
            upLoadPercentage={upLoadPercentage}
            clearPreviousStates={clearStates}
            setSelectedFile={setSelectedFile}
            fileID={fileID}
            label={label}
            type="files"
        />
    );
};

export default DocumentUpload;
