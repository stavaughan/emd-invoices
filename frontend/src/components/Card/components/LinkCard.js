import React from 'react';
import { IconBackgroundLinkCard, CardTitleDescription } from '.';

const LinkCard = (props) => {

    const {
        linkPath,
        description,
        iconColor,
        cardTitle,
        cardColor,
        colorSubTitle,
        iconPath,
        notReady
    } = props;

    return (
        <IconBackgroundLinkCard
            icon={iconPath}
            linkPath={linkPath}
            iconColor={iconColor}
            cardColor={cardColor}
            height="8.333rem"
        >
            <CardTitleDescription
                title={cardTitle}
                description={description}
                stylesTitle={{ letterSpacing: '.05rem' }}
                stylesSubTitle={{ letterSpacing: '.05rem' }}
                colorSubTitle={colorSubTitle}
                notReady={notReady}
            />
        </IconBackgroundLinkCard>
    );
};

export default LinkCard;
