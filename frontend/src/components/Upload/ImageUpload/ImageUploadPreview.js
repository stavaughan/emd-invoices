import Classes from '../styles/ImagesUpload.module.css';

const ImageUploadPreview = ({ file }) => {
    return (
        <div className={Classes.thumb}>
            <div className={Classes.thumb_inner}>
                <img
                    src={file?.preview}
                    alt={file?.name}
                    className={Classes.thumb_img}
                />
            </div>
        </div>
    )
}

export default ImageUploadPreview
