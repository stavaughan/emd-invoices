import { useMemo } from 'react';
import { PageTitle, TitleIcon } from 'components/Blocks/TitleBlocks/PageTitle';
import { NavLinks } from 'components/Navigation';
import { Row, Col } from 'components/HTML';
import { PageObjects } from 'globals/js';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const PageHeader = ({ pageID }) => {

	const { isXSmall } = useMobile();

	const page = useMemo(() => PageObjects.FILE(pageID), [pageID])

	return (
		<div className="container-lg mb-3 py-4 d-print-none">
			<Row className="align-items-center">
				{page?.icon && <TitleIcon icon={page.icon} />}
				<PageTitle page={page} pageID={pageID} />
			</Row>
			<nav aria-label="page group">
				<Row className="align-items-center">
					<Col className={clsx(!isXSmall && 'ps-2')}>
						<NavLinks pageID={pageID} />
					</Col>
				</Row>
			</nav>
		</div>
	);
};

export default PageHeader;
