import { PaginationWrapper, PaginationNextPrev, PaginationPageItem } from ".";

const Pagination = ({
	pageNumbers,
	handlers,
	currentPageNumber,
	isNext = false
}) => {

	if (!pageNumbers?.length) return null;

	return (
		<PaginationWrapper
			count={pageNumbers?.length}
			handlers={handlers}
			currentNum={currentPageNumber}
			isNext={isNext}
		>
			{isNext ? (
				<PaginationNextPrev
					handlers={handlers}
					currentNum={currentPageNumber}
					count={pageNumbers?.length}
				/>
			) : (
				<PaginationPageItem
					handlers={handlers}
					currentPageNumber={currentPageNumber}
					pageNumbers={pageNumbers}
				/>
			)}
		</PaginationWrapper>
	);
}

export default Pagination
