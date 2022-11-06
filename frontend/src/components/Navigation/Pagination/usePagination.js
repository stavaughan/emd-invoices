import { useState, useMemo, useCallback, useEffect } from 'react';

const PageCountFooter = ({ data, startToLast, itemLabel }) => {

	if (!data?.length || data.length === 1) return null;

	return (
		<div className="d-flex justify-content-center align-items-center text-slate-700 text-xs">
			{startToLast?.startItem} - {startToLast?.endItem} of {data?.length} {`${itemLabel}s`}
		</div>
	);
};

const usePagination = ({
	data,
	itemLabel,
	itemsPerPage,
	filter
}) => {

	const initialItems = useMemo(() => {
		if (!data?.length) return [];
		const indexOfLastItem = 1 * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		return data?.slice(indexOfFirstItem, indexOfLastItem);
	}, [data, itemsPerPage]);

	const pageNumbers = useMemo(() => {
		if (!data?.length) return [];
		const nums = [];
		for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
			nums.push(i);
		}
		return nums;
	}, [data?.length, itemsPerPage]);

	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [paginatedItems, setPaginatedItems] = useState(initialItems);
	const [pageCount, setPageCount] = useState(pageNumbers?.length);

	useEffect(() => {
		if(filter) {
			setCurrentPageNumber(1);
			setPaginatedItems(() => initialItems);
			setPageCount(pageNumbers?.length)
		}
	}, [filter, initialItems, pageNumbers?.length]);

	const nextPage = useCallback(() => {
		if (currentPageNumber < pageCount) {
			setCurrentPageNumber(currentPageNumber + 1);
		} else {
			setCurrentPageNumber(1);
		}
	}, [currentPageNumber, pageCount]);

	const prevPage = useCallback(() => {
		if (currentPageNumber > 1) {
			setCurrentPageNumber(currentPageNumber - 1);
		} else {
			setCurrentPageNumber(pageCount);
		}
	}, [currentPageNumber, pageCount]);

	const firstPage = useCallback(() => setCurrentPageNumber(1), []);
	const setPage = useCallback((num) => setCurrentPageNumber(num), []);
	const lastPage = useCallback(() => {
		if (data?.length) {
			setCurrentPageNumber(Math.ceil(data?.length / itemsPerPage))
		} else {
			setCurrentPageNumber(1);
		};
	}, [data?.length, itemsPerPage]);

	const currentItems = useMemo(() => {
		if (!data?.length) return [];
		const indexOfLastItem = currentPageNumber * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		return data?.slice(indexOfFirstItem, indexOfLastItem);
	}, [currentPageNumber, data, itemsPerPage]);

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

	return {
		handlers: {
			nextPage,
			prevPage,
			firstPage,
			lastPage,
			setPage
		},
		currentPage: {
			items: paginatedItems,
			pageNumber: currentPageNumber,
			pageCount,
			startToLast
		},
		pageNumbers,
		countFooter
	}
}

export default usePagination;
