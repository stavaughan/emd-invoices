import { useState, useMemo, useCallback, useEffect } from 'react';
import { Pagination } from '.';

const PageCountFooter = ({ data, startToLast, itemLabel }) => {

	if (!data?.length || data.length === 1) return null;

	return (
		<div className="d-flex justify-content-center align-items-center text-slate-500 text-xs">
			{startToLast?.startItem} - {startToLast?.endItem} of {data?.length} {`${itemLabel}s`}
		</div>
	);
};

const usePagination = ({
	data,
	itemLabel,
	itemsPerPage,
	cancelFilter,
	setCancelFilter,
	filter
}) => {

	const getPaginatedItems = useCallback((data, ipp, cp) => {
		if (!data?.length) return [];
		const indexOfLastItem = cp * ipp;
		const indexOfFirstItem = indexOfLastItem - ipp;
		return data?.slice(indexOfFirstItem, indexOfLastItem);
	}, []);

	const initialItems = useMemo(
		() => getPaginatedItems(data, itemsPerPage, 1),
		[data, getPaginatedItems, itemsPerPage]
	);

	const pageNumbers = useMemo(() => {
		if (!data?.length) return [];
		const nums = [];
		for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
			nums.push(i);
		}
		return nums;
	}, [data?.length, itemsPerPage]);

	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [paginatedItems, setPaginatedItems] = useState([]);
	const [pageCount, setPageCount] = useState(pageNumbers?.length);

	useEffect(() => {
		if (filter || cancelFilter) {
			setCurrentPageNumber(1);
			setPaginatedItems(() => initialItems);
			setPageCount(pageNumbers?.length)
			setCancelFilter(false);
		}
	}, [filter, initialItems, pageNumbers?.length, cancelFilter, setCancelFilter]);

	const nextPage = useCallback(() => {
		const num = currentPageNumber < pageCount
			? currentPageNumber + 1
			: 1;
		setCurrentPageNumber(num);
	}, [currentPageNumber, pageCount]);

	const prevPage = useCallback(() => {
		const num = currentPageNumber > 1
			? currentPageNumber - 1
			: pageCount;
		setCurrentPageNumber(num);
	}, [currentPageNumber, pageCount]);

	const firstPage = useCallback(() => setCurrentPageNumber(1), []);
	const setPage = useCallback((num) => setCurrentPageNumber(num), []);
	const lastPage = useCallback(() => {
		const num = data?.length
			? Math.ceil(data?.length / itemsPerPage) : 1;
		setCurrentPageNumber(num);
	}, [data?.length, itemsPerPage]);

	const currentItems = useMemo(
		() => getPaginatedItems(data, itemsPerPage, currentPageNumber),
		[currentPageNumber, data, getPaginatedItems, itemsPerPage]
	);

	useEffect(() => {
		setPaginatedItems(() => currentItems);
		return () => setPaginatedItems(() => initialItems);
	}, [currentItems, initialItems]);

	//startToLastNotice
	const startToLast = useMemo(() => {
		if (!data?.length) return {};
		const indexOfLastItem = currentPageNumber * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		return {
			startItem: indexOfFirstItem + 1,
			endItem: indexOfLastItem > data?.length ? data?.length : indexOfLastItem,
			pageNumber: currentPageNumber,
			pageCount
		};
	}, [currentPageNumber, data, itemsPerPage, pageCount]);

	const countFooter = useMemo(() => (
		<PageCountFooter
			data={data}
			startToLast={startToLast}
			itemLabel={itemLabel}
		/>
	), [data, startToLast, itemLabel]);

	const bodyFooter = useMemo(() => {
		if (data?.length < 21) return null;
		return (
			<Pagination
				pageNumbers={pageNumbers}
				handlers={{
					nextPage,
					prevPage,
					firstPage,
					lastPage,
					setPage
				}}
				currentPageNumber={currentPageNumber}
				color='primary'
				isNext
			/>
		)
	}, [
		pageNumbers,
		currentPageNumber,
		data?.length,
		nextPage,
		prevPage,
		firstPage,
		lastPage,
		setPage
	]);

	return {
		currentPage: {
			items: paginatedItems,
			pageNumber: currentPageNumber,
			pageCount,
			startToLast
		},
		bodyFooter,
		countFooter
	}
}

export default usePagination;
