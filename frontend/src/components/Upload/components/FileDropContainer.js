import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone';
import { toast } from "react-toastify";
import { useUploadLogic, Progress } from '.';
import clsx from 'clsx';

import Classes from '../styles/Upload.module.css'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Emphasize } from 'components/Text';

const FileDropContainer = ({
	upLoadPercentage,
	clearPreviousStates,
	setSelectedFile,
	fileID,
	label,
	type
}) => {

	const { acceptTypes, mimeTypes } = useUploadLogic();

	const IMAGE_SIZE = {
		'1MB': 1048576,
		'2MB': 2097152,
		'5MB': 5242880
	};

    const MAX_SIZE = IMAGE_SIZE['5MB'];
    const MIME_TYPES = useMemo(() => acceptTypes[type], [type, acceptTypes]);
    const types = useMemo(() => mimeTypes(MIME_TYPES.accept), [MIME_TYPES.accept, mimeTypes]);

    const onDrop = useCallback(async acceptedFiles => {
        clearPreviousStates()
        const selected = await acceptedFiles[0]
        if (selected) {
            if (types.includes(selected?.type)) {
                setSelectedFile(selected)
            } else {
                toast.error(MIME_TYPES.onError, {
                    toastId: 'uploadfiledroperror',
                    position: 'top-center'
                })
            }
        }
    }, [MIME_TYPES.onError, types, clearPreviousStates, setSelectedFile])

    const { getRootProps, getInputProps } = useDropzone({
        maxSize: MAX_SIZE,
        maxFiles: 20,
        accept: MIME_TYPES.accept,
        autoFocus: true,
        onDrop
    });

    return (
        <>
            <label className="form-label">{label}</label>
            <div
                {...getRootProps({
                    className: `${Classes.dropzone} rounded-3 py-4 mb-3`
                })}
                tabIndex="0"
            >
                <div className="text-secondary">
                    <FAIcon icon="file-pdf" className="fa-fw fa-2x text-pdf" />
                </div>
                <input {...getInputProps()} />
                <div className={clsx(
					fileID ? 'text-blue-500' : 'text-secondary',
					'pt-3 h5'
				)}>
					<Emphasize.Italic>
						{fileID || 'Upload pdf type document only'}
					</Emphasize.Italic>
                </div>
            </div>
            {upLoadPercentage ? <Progress percentage={upLoadPercentage} /> : null}
        </>
    )
}

export default FileDropContainer
