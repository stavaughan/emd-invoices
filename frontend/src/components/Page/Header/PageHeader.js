import clsx from 'clsx';
import { PageTitle, TitleIcon } from 'components/Blocks/TitleBlocks/PageTitle';
import { Col, Row } from 'components/HTML';
import { NavLinks } from 'components/Navigation';
import { PageObjects } from 'globals/js';
import { useMobile } from 'hooks';
import { useMemo } from 'react';

const PageHeader = ({ pageID }) => {

	const { isXSmall } = useMobile();

	const page = useMemo(() => PageObjects.FILE(pageID), [pageID])

	return (
		<div className="container-lg mb-3 py-4 d-print-none">
			<div className="d-flex justify-content-start align-items-center">
				<div className="me-3">
					<TitleIcon icon={page?.icon} />
				</div>
				<PageTitle
					pageGroup={page?.pageGroup}
					baseTitle={page?.baseTitle}
				/>
			</div>
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
