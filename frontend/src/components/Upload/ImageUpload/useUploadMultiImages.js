import { useState, useMemo, useEffect } from 'react';
import { uploadLogic } from 'components/Upload/components';
import { useDropzone } from 'react-dropzone';
import { useClear } from 'hooks';

const useUploadMultiImages = ({ clearImages, setImageIDs }) => {

	const maxSize = '5MB';

	const ONE_KB = 1024;
	const ONE_MB = Math.pow(ONE_KB, 2);
	const IMAGE_SIZE = {
		'1MB': ONE_MB,
		'2MB': 2 * ONE_MB,
		'5MB': 5 * ONE_MB
	};

    const MAX_SIZE = IMAGE_SIZE[maxSize];

	const [images, setImages] = useState([])
	const [maxSizeMessage, setMaxSizeMessage] = useState('')

	const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
		minSize: 0,
		maxSize: MAX_SIZE,
        maxFiles: 20,
		accept: uploadLogic.acceptTypes.images.accept,
		//accept: "image/*",
		onDrop: uploadLogic.onSetImages(setImages)
	});

	const fileTooLarge = useMemo(() => {
		return fileRejections?.length && fileRejections[0]?.errors?.length
			? fileRejections[0].errors[0]?.message : '';
	}, [fileRejections])

	useEffect(() => {
		if (fileTooLarge) {
			setMaxSizeMessage(fileTooLarge)
			const timer = setTimeout(() => {
				setMaxSizeMessage('')
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [fileTooLarge])

	useClear(clearImages, () => setImageIDs([]))

	return {
		images,
		setImages,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject,
		maxSizeMessage
	}
}

export default useUploadMultiImages
