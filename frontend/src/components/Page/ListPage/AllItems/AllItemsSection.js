import { ListingPageTableHead } from 'components/section-content/ListingPage';
import { AllItemsContainer, AllItemsCardBody } from '.';
import { CardTitleActionsHeader } from 'components/Card';

const AllItemsSection = ({
	pageID,
	count,
	bodyFooter,
	setSearchData,
	pageCountInfo,
	visibleItems,
	printRefAll,
	HeadActions,
	BodyActions,
	searchData,
	searchKey,
	setSelID,
	children,
	btnCount,
	title,
	id
}) => {

	const HeadContent = () => <ListingPageTableHead pageID={pageID} />;

	return (
		<AllItemsContainer
			visible={visibleItems}
			printRef={printRefAll}
		>
			<CardTitleActionsHeader
				title={title}
				count={count}
				btnCount={btnCount}
				section
			>
				{HeadActions && <span className="d-print-none">{HeadActions()}</span>}
			</CardTitleActionsHeader>
			<AllItemsCardBody
				id={id}
				HeadActions={HeadActions}
				HeadContent={HeadContent}
				searchData={searchData}
				searchKey={searchKey}
				setSelID={setSelID}
				BodyActions={BodyActions}
				pageCountInfo={pageCountInfo}
				setSearchData={setSearchData}
			>
				{children}
			</AllItemsCardBody>
			{bodyFooter && <div className="card-footer d-print-none">{bodyFooter}</div>}
		</AllItemsContainer>
	);
};

export default AllItemsSection;
