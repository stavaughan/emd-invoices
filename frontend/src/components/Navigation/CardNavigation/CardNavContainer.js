import clsx from 'clsx';
import { Row } from 'components/HTML';
import { SectionIconTitle } from 'components/Blocks';
import { useMobile } from 'hooks';
import { PageLinksGroup } from './components';

const CardNavContainer = ({ notReady, userID, heading, card }) => {

	const { isXSmall } = useMobile();

    return (
        <Row className="g-3 mb-5">
            <SectionIconTitle
                icon={heading.icon}
                iconColor={heading.iconColor}
                className={isXSmall ? ' mb-3' : ''}
                title={heading.title}
                titleClass={clsx(heading.titleColor, isXSmall && 'pe-2')}
                description={heading.description}
                subTitleClass={heading.subTitleColor}
                stylesTitle={{
					letterSpacing: isXSmall ? '.05rem' : '.09rem',
					width: isXSmall ? '' : '60%'
				}}
                stylesSubTitle={{ letterSpacing: '.06rem' }}
            />
            <div className="col-12">
                <PageLinksGroup
                    userID={userID}
                    notReady={notReady}
                    card={card}
                />
            </div>
        </Row>
    )
}

export default CardNavContainer
