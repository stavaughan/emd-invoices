import { Row } from 'components/HTML';
import { PageContainer } from 'components/Containers';
import clsx from 'clsx';

const ListPageWrapper = ({visibility, children}) => {

    return (
        <PageContainer
			className={clsx('p-0 justify-content-center', visibility)}
			fluid
		>
            <Row className="p-0 justify-content-center">
                {children}
            </Row>
        </PageContainer>
    );
};

export default ListPageWrapper;
