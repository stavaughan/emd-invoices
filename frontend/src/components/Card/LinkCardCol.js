import { SkeletonElem } from 'components/LoadingSkeleton';
import { useMobile } from 'hooks';
import { LinkCard } from './components';
import { Col } from 'components/HTML';

const LinkCardCol = ({
	notReady,
	cardColor,
	linkPath,
	iconColor,
	colorSubTitle,
	cardTitle,
	description,
	iconPath
}) => {

	const { isXSmall } = useMobile();

    return (
        <Col cols="6 md-4 lg-3">
            {notReady ? (
                <SkeletonElem height={isXSmall ? '126px' : '136px'} />
            ) : (
                <LinkCard
                    linkPath={linkPath}
                    iconColor={iconColor}
                    cardTitle={cardTitle}
                    cardColor={cardColor}
                    description={description}
                    iconPath={iconPath}
                    colorSubTitle={colorSubTitle}
                    notReady={notReady}
                />
            )}
        </Col>
    )
}

export default LinkCardCol
