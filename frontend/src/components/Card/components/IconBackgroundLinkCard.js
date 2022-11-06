import React from 'react';
import { Link } from 'react-router-dom';
import { CardIconBackground } from '.';
import { PageLinkCardStyle } from '../style';
import clsx from 'clsx';

const IconBackgroundLinkCard = ({ icon, linkPath, iconColor, cardColor, height, children }) => {

    if (!linkPath) {

        return (
            <span className="btn m-0">
                <CardIconBackground
                    className={clsx(cardColor, 'box-shadow lift')}
                    style={PageLinkCardStyle({ icon, color: iconColor, height })}
                >
                    {children}
                </CardIconBackground>
            </span>
        )
    }

    return (
        <Link to={linkPath}>
            <CardIconBackground
                className={cardColor + ' box-shadow lift'}
                style={PageLinkCardStyle({ icon, color: iconColor, height })}
            >
                {children}
            </CardIconBackground>
        </Link>
    )
}

export default IconBackgroundLinkCard
