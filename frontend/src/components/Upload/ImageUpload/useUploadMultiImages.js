import { useState, useCallback, useMemo, useEffect } from 'react';
import { useUploadLogic } from 'components/Upload/components';
import { useDropzone } from 'react-dropzone';
import { Global } from 'globals/js';
import { useClear } from 'hooks';

const useUploadMultiImages = ({ clearImages, setImageIDs }) => {

	const [images, setImages] = useState([])

	const { acceptTypes, onSetImages } = useUploadLogic();

	const maxSize = '5MB';

	const ONE_KB = 1024;
	const ONE_MB = Math.pow(ONE_KB, 2);
	const IMAGE_SIZE = {
		'1MB': ONE_MB,
		'2MB': 2 * ONE_MB,
		'5MB': 5 * ONE_MB
	};

    const MAX_SIZE = IMAGE_SIZE[maxSize];

	const [maxSizeMessage, setMaxSizeMessage] = useState('')

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject,
		fileRejections
	} = useDropzone({
		minSize: 0,
		maxSize: MAX_SIZE,
        maxFiles: 20,
		accept: acceptTypes.images.accept,
		onDrop: onSetImages(setImages)
	});

	const fileTooLarge = useMemo(() => {
		return fileRejections?.length && fileRejections[0]?.errors?.length
			? fileRejections[0].errors[0]?.message : '';
	}, [fileRejections])

	useEffect(() => {
		if (fileTooLarge) {
			setMaxSizeMessage(fileTooLarge)
			const timer = setTimeout(
				() => {
					setMaxSizeMessage('')
				}, 2000);
			return () => clearTimeout(timer);
		}
	}, [fileTooLarge])

	useClear(clearImages, () => {
		setImages([])
		!!setImageIDs && setImageIDs([])
	})

	const duplicateItems = useMemo(() => Global.duplicateItems(images, 'name'), [images])

	const removeDuplicates = useCallback(() => {
		const uniqueImages = duplicateItems.unique.map(name =>
				images.find(image => image.name === name));
		setImages(prev => uniqueImages)
	}, [duplicateItems, images, setImages])

	useEffect(() => {
		if (images?.length && duplicateItems.duplicates?.length) {
			removeDuplicates();
		}
	}, [duplicateItems, images, removeDuplicates])

	return {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject,
		maxSizeMessage,
		images,
		setImages
	}
}

export default useUploadMultiImages
