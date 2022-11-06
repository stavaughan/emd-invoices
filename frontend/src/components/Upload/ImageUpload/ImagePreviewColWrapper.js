import { Progress } from 'components/Upload/components';
import { Col } from 'components/HTML'
import { ImageUploadPreview } from '.'

const ImagePreviewColWrapper = (props) => {

    const { file, percentage } = props;

    return (
        <Col cols="6 md-4 lg-3">
            <div className="m-2 text-center">
                <ImageUploadPreview file={file} />
                {props.children}
                {percentage ? <Progress percentage={percentage} /> : null}
            </div>
        </Col>
    )
}

export default ImagePreviewColWrapper
