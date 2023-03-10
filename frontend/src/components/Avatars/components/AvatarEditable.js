import { ProfileImage } from '.';
import { UploadableImageWrapper } from 'components/Upload/ImageUpload';

const AvatarEditable = (props) => {

    const {
        pid,
        setFile,
        loading,
        selectedURL,
        selectedName,
        setChangeDetect,
        setFileInputState,
        fileInputState
    } = props;

    return (
		<UploadableImageWrapper
			setFile={setFile}
			setChangeDetect={setChangeDetect}
			setFileInputState={setFileInputState}
			fileInputState={fileInputState}
		>
            <ProfileImage
                selectedName={selectedName}
                selectedURL={selectedURL}
                loading={loading}
                pid={pid}
            />
		</UploadableImageWrapper>
    )
}

export default AvatarEditable
