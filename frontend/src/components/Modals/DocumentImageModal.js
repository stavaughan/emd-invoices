import { FetchedImage } from 'components/Gallery';
import { Global } from 'globals/js';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';
import { FileModalWrapper } from './components';

const DocumentImageModal = ({ file, modalID }) => {

	const { screenWidth } = useContext(SettingsContext).screen;


    return (
        <FileModalWrapper
            modalID={modalID}
            fileName={file?.title}
            dialogClass={Global.userDevice(screenWidth).className}
        >
			{file?.id && (
				<FetchedImage
					pid={`documents/${file.id}`}
					width={Global.userDevice(screenWidth).width}
				/>
			)}
        </FileModalWrapper>
    );
};

export default DocumentImageModal;
