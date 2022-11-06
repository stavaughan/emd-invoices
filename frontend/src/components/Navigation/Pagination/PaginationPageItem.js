import { Button } from "components/Buttons";

const PaginationPageItem = ({ handlers, currentPageNumber, pageNumbers }) => {
	return (
		<>
			{pageNumbers.filter(num => num !== 1 && num !== pageNumbers.length).map(num => (
				<Button
					key={num}
					className={`btn btn-sm ${num === currentPageNumber ? 'btn-primary' : 'btn-outline-secondary'}`}
					rest={{ onClick: () => handlers.setPage(num) }}
				>
					{num}
				</Button>
			))}
		</>
	)
}

export default PaginationPageItem
