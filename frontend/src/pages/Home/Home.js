import { PageContainer } from 'components/Containers';
import { HomeLinks, useHomePage } from './components';

const HomePage = () => {

	const { homePageLinkGroups } = useHomePage();

    return (
        <div className="bd-masthead">
            <PageContainer>
                <section>
                    {homePageLinkGroups.map(group => (
                        <HomeLinks
                            key={group.title.replaceAll(' ', '')}
                            group={group}
                        />
                    ))}
                </section>
            </PageContainer>
        </div>
    );
};

export default HomePage;
