import { useMemo, useCallback } from 'react';
import { toast } from "react-toastify";

const useUploadLogic = (setFile, onUpload, base64) => {

    const acceptTypes = useMemo(() => ({
        images: {
            accept: {
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg', '.jpg'],
                'image/webp': ['.webp'],
                'image/avif': ['.avif']
            },
            onError: `Not accepted image format. Accepted formats include 'avif', 'jpeg', 'jpg', 'png' and 'webp'.`
        },
        files: {
            accept: {
                'application/pdf': ['.pdf'],
                'application/msword': ['.doc'],
                'application/vnd.openxmlformats': ['.docx'],
                'application/zip': ['.zip'],
                'text/csv': ['.csv']
            },
            onError: `Not accepted file format. Accepted formats include 'pdf', 'json' and 'zip'.`
        }
    }), []);

    const mimeTypes = useCallback((accepted) => {
        const acceptedArrs = Object.entries(accepted);
        return acceptedArrs.map(_ => _[0])
    }, []);

    const extensionTypes = useCallback((accepted) => {
        const acceptedArrs = Object.entries(accepted);
        return acceptedArrs.map(_ => _[1]).flat()
    }, []);

    const fileSizeString = useCallback((size) => {
        const fileSize = size / 1000;
        const sizeAdj = fileSize > 1000 ? fileSize / 1000 : fileSize;
        const sizeConfig = fileSize > 1000 ? sizeAdj.toFixed(2) : sizeAdj.toFixed(0)
        const sizeSfx = fileSize > 1000 ? 'MB' : 'KB';
        return `${sizeConfig} ${sizeSfx}`;
    }, []);

    const fileTypes = useMemo(() => ([
        {
            _id: 'pdf',
            types: ['application/pdf'],
            lib: 'fas',
            icon: 'file-pdf'
        },
        {
            _id: 'zip',
            types: ['application/zip'],
            lib: 'fas',
            icon: 'file-zipper'
        },
        {
            _id: 'csv',
            types: ['text/csv'],
            lib: 'fas',
            icon: 'file-csv'
        },
        {
            _id: 'doc',
            types: ['application/msword', 'application/vnd.openxmlformats'],
            lib: 'fas',
            icon: 'file-word'
        },
        {
            _id: 'image',
            types: ['image/png', 'image/jpeg', 'image/jpg', 'image/*', 'image/webp', 'image/avif'],
            lib: 'far',
            icon: 'file-image'
        }
    ]), []);

    const isImage = useCallback((fileType) => {
        const imageTypes = fileTypes.filter(type => type._id === 'image')[0].types;
        return imageTypes.includes(fileType);
    }, [fileTypes]);

    const imageUint8Array = useCallback(async ({
		files,
		setFiles,
		setFile,
		onUpload
	}) => {
        if (files?.length) {
            const image = files[0];
            try {
                const buffer = await image.arrayBuffer();
                const blob = async () => new Blob([new Uint8Array(buffer)], { type: image.type });
                const file = await blob();
                const name = image.name.split('.')[0];
                const fileSize = fileSizeString(file.size);
                const url = URL.createObjectURL(file);
                const date = new Date(image.lastModified).toLocaleString();
                const fileObj = {
                    _id: name,
                    image: {
						isImage: isImage(file.type),
						file,
						url,
						name
					},
                    content: [name, fileSize, date],
                    file,
                    url,
                    name,
                    date
                };
                if (setFile) setFile(fileObj);
                if (setFiles) setFiles(prev => [...prev, fileObj]);
                if (onUpload) onUpload(fileObj?.image)
            } catch (err) {
				toast.error(err.message);
            }
        }
    }, [fileSizeString, isImage]);

	const imageBase64 = useCallback(async ({
		files,
		setFiles,
		setFile,
		onUpload
	}) => {
		if (files?.length) {
			const image = files[0];
			try {
				const reader = new FileReader();
				reader.readAsDataURL(image);
				reader.onload = async (e) => {
					const name = image.name.split('.')[0];
					const fileSize = fileSizeString(image.size);
					const isImg = isImage(image.type);
					const url = reader.result;
					const date = new Date(image.lastModified).toLocaleString();
					const fileObj = {
						_id: name,
						image: { isImage: isImg, file: image, url, name },
						content: [name, fileSize, date],
						file: e.target.result,
						url,
						name,
						date
					};
					if (setFile) setFile(fileObj);
					if (setFiles) setFiles(prev => [...prev, fileObj]);
					if (onUpload) onUpload(fileObj?.image)
				}
			} catch (err) {
				toast.error(err.message);
			}
		}
	}, [fileSizeString, isImage]);

	const onSetImages = useCallback((setImages) => async (files) => {
        const newFiles = files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        setImages(prev => [...prev, ...newFiles]);
    }, []);

	const onImageUpload = useCallback((files) => {
		base64 ? imageBase64({
			files,
			setFile: setFile || '',
			onUpload
		}) : imageUint8Array({
			files,
			setFile: setFile || '',
			onUpload
		});
	}, [base64, imageBase64, onUpload, imageUint8Array, setFile]);

	return {
		acceptTypes,
		mimeTypes,
		extensionTypes,
		fileSizeString,
		onImageUpload,
		fileTypes,
		isImage,
		imageUint8Array,
		imageBase64,
		onSetImages
	}
};

export default useUploadLogic;
