import { Row } from 'components/HTML';
import { SkeletonElem } from '.';

const LoadingSkeletonRow = () => {
    return (
        <Row>
            <div className="col-auto">
                <div className="avatar avatar-sm">
                    <SkeletonElem
                        className="rounded-circle small"
                        width="24px"
                        height="24px"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: '0'
                        }} />
                </div>
            </div>
            <div className="ms-n2 col">
                <div className="mb-3">
                    <h4 className="mb-2">
                        <SkeletonElem width="280px" height="25px" />
                    </h4>
                    <div className="h5 pb-2">
                        <SkeletonElem width="580px" height="25px" />
                    </div>
                </div>
                <div className="p-3 rounded-3 me-5">
                    <SkeletonElem width="320px" height="60px" />
                </div>
            </div>
        </Row>
    )
}

export default LoadingSkeletonRow
