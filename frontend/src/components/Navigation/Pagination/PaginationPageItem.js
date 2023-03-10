import { Button } from "components/Buttons";
import clsx from "clsx";

const PaginationPageItem = ({
	handlers,
	currentPageNumber,
	pageNumbers,
	color
}) => {

	const colorMain = `btn-${color}`;
	const colorOutline = `btn-outline-${color}`;

	return (
		<>
			{pageNumbers.filter(num => num !== 1 && num !== pageNumbers.length).map(num => (
				<Button
					key={num}
					className={clsx(
						'btn-sm',
						num === currentPageNumber ? colorMain : colorOutline
					)}
					rest={{ onClick: () => handlers.setPage(num) }}
				>
					{num}
				</Button>
			))}
		</>
	)
}

export default PaginationPageItem
