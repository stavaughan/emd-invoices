import { FetchedImage } from 'components/Gallery';
import { FileModalWrapper, useModalWidth } from './components';

const DocumentImageModal = ({ file, modalID }) => {

	const { modalWidth } = useModalWidth();

    return (
        <FileModalWrapper
            modalID={modalID}
            fileName={file?.title}
            dialogClass={modalWidth().className}
        >
			{file?.id && (
				<FetchedImage
					pid={`documents/${file.id}`}
					width={modalWidth().width}
				/>
			)}
        </FileModalWrapper>
    );
};

export default DocumentImageModal;
