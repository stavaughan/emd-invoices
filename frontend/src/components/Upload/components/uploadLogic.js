import { toast } from "react-toastify";

const uploadLogic = {

    acceptTypes: {
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
    },

    mimeTypes: (accepted) => {
        const acceptedArrs = Object.entries(accepted);
        return acceptedArrs.map(_ => _[0])
    },

    extensionTypes: (accepted) => {
        const acceptedArrs = Object.entries(accepted);
        return acceptedArrs.map(_ => _[1]).flat()
    },

    fileSizeString: (size) => {
        const fileSize = size / 1000;
        const sizeAdj = fileSize > 1000 ? fileSize / 1000 : fileSize;
        const sizeConfig = fileSize > 1000 ? sizeAdj.toFixed(2) : sizeAdj.toFixed(0)
        const sizeSfx = fileSize > 1000 ? 'MB' : 'KB';
        return `${sizeConfig} ${sizeSfx}`;
    },

    fileTypes: [
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
    ],

    isImage(fileType) {
        const imageTypes = uploadLogic.fileTypes.filter(type => type._id === 'image')[0].types;
        return imageTypes.includes(fileType);
    },

    imageUint8Array: async ({
		files,
		setClasses,
		setFiles,
		setFile,
		onUpload
	}) => {
        if (files?.length) {
            const selfile = files[0];
            try {
                const buffer = await selfile.arrayBuffer();
                const blob = async () => new Blob([new Uint8Array(buffer)], { type: selfile.type });
                const file = await blob();
                const name = selfile.name.split('.')[0];
                const fileSize = uploadLogic.fileSizeString(file.size);
                const isImage = uploadLogic.isImage(file.type);
                const url = URL.createObjectURL(file);
                const date = new Date(selfile.lastModified).toLocaleString();
                const fileObj = {
                    _id: name,
                    image: { isImage, file, url, name },
                    content: [name, fileSize, date],
                    file,
                    url,
                    name,
                    date
                };
                if (setFile) setFile(fileObj);
                if (setFiles) setFiles(prev => [...prev, fileObj]);
                if (setClasses) setClasses();
                if (onUpload) onUpload(fileObj?.image)
            } catch (err) {
				toast.error(err.message);
            }
        }
    },

	imageBase64: async ({ files, setClasses, setFiles, setFile, onUpload }) => {
		if (files?.length) {
			const image = files[0];
			try {
				const reader = new FileReader();
				reader.readAsDataURL(image);
				reader.onload = async (e) => {
					const name = image.name.split('.')[0];
					const fileSize = uploadLogic.fileSizeString(image.size);
					const isImage = uploadLogic.isImage(image.type);
					const url = reader.result;
					const date = new Date(image.lastModified).toLocaleString();
					const fileObj = {
						_id: name,
						image: { isImage, file: image, url, name },
						content: [name, fileSize, date],
						file: e.target.result,
						url,
						name,
						date
					};
					if (setFile) setFile(fileObj);
					if (setFiles) setFiles(prev => [...prev, fileObj]);
					if (setClasses) setClasses();
					if (onUpload) onUpload(fileObj?.image)
				}
			} catch (err) {
				toast.error(err.message);
			}
		}
	},

    onSetImages: (setImages) => async (files) => {
        const newFiles = files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        setImages(newFiles);
    }
};

export default uploadLogic;
