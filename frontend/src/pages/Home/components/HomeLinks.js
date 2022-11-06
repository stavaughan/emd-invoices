import { CardNavContainer } from 'components/Navigation/CardNavigation';
import { useMemo } from 'react';
import { useHomePage } from '.';

const HomeLinks = ({ group }) => {

	const { pageCard, cardHeading, access, userID } = useHomePage();

    const card = useMemo(() => pageCard(group.data), [group.data, pageCard]);
    const heading = useMemo(() => cardHeading(group), [group, cardHeading]);

    return (
        <CardNavContainer
            notReady={!access}
            userID={userID}
            heading={heading}
            card={card}
        />
    )
}

export default HomeLinks
