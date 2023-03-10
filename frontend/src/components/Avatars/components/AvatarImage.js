import { PreviewWrapper } from '.';
import { FetchedImage } from 'components/Gallery';
import { SkeletonElem } from 'components/LoadingSkeleton';

const AvatarImage = ({ pid, size = 'md', loading }) => {

    const dim = { sm: '36', md: '56', lg: '78' }

    return (
        <PreviewWrapper type="avatar" size={size}>
            {loading ? (
                <SkeletonElem
                    width={dim[size]}
                    height={dim[size]}
                />
            ) : (
                <FetchedImage
                    pid={pid}
                    width={dim[size]}
                    height={dim[size]}
                />
            )}
        </PreviewWrapper>
    );
}

export default AvatarImage
