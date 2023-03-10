import { PreviewWrapper } from '.';

const PreviewAvatar = ({ size = 'md', selectedURL, selectedName }) => {

    const dim = { sm: '36', md: '56', lg: '78' }

    return (
        <PreviewWrapper type="avatar" size={size}>
            <img
                src={selectedURL}
                alt={selectedName}
                width={dim[size]}
                height={dim[size]}
            />
        </PreviewWrapper>
    )
}

export default PreviewAvatar
