import { ModalWrapper } from 'components/Modals/components'
import { SiteData } from 'data';
import { ImageCrop } from '.'

const ImageCropModal = () => {

	const { modalIDs } = SiteData;

    return (
        <ModalWrapper
            modalID={modalIDs.imageUploadCrop}
            modalName="Image Transform"
            modalTitle="Image Transform"
        >
            <ImageCrop />
        </ModalWrapper>
    )
}

export default ImageCropModal
