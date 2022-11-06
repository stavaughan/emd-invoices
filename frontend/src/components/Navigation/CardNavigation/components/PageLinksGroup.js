import { LinkCardCol } from 'components/Card';
import { Row } from 'components/HTML';

const PageLinksGroup = ({ userID, notReady, card }) => {

    return (
        <Row>
            {card.data?.length ? card.data.map(item => (
                <LinkCardCol
                    key={item[card.itemKeys.id]}
                    notReady={notReady}
                    {...card.itemKeys?.path && {
                        linkPath: `/${userID}/${item[card.itemKeys.path]}`
                    }}
                    iconColor={card.iconColor}
                    cardColor={card.color}
                    colorSubTitle={card.colorSubTitle}
                    cardTitle={item[card.itemKeys.title]}
                    description={item[card.itemKeys.description]}
                    iconPath={item[card.itemKeys.iconPath]}
                />
            )) : null}
        </Row>
    )
}

export default PageLinksGroup
