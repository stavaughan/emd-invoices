import { PaginationWrapper, PaginationNextPrev, PaginationPageItem } from ".";

const Pagination = ({
	pageNumbers,
	handlers,
	color,
	currentPageNumber,
	isNext = false
}) => {

	if (!pageNumbers?.length) return null;

	const nextPrevTest = pageNumbers?.length > 2;

	return (
		<PaginationWrapper
			count={pageNumbers?.length}
			handlers={handlers}
			color={color}
			currentNum={currentPageNumber}
			isNext={isNext}
		>
			{nextPrevTest ? (
				<>
					{isNext ? (
						<PaginationNextPrev
							handlers={handlers}
							currentNum={currentPageNumber}
							count={pageNumbers?.length}
							color={color}
						/>
					) : (
						<PaginationPageItem
							handlers={handlers}
							currentPageNumber={currentPageNumber}
							pageNumbers={pageNumbers}
							color={color}
						/>
					)}
				</>
			) : null}
		</PaginationWrapper>
	);
}

export default Pagination
