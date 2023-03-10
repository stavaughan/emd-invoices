import { PaginationBtn } from ".";

const PaginationNextPrev = ({
	handlers,
	currentNum,
	color,
	count
}) => {

	return (
		<>
			<PaginationBtn
				color={color}
				indexFn="prevPage"
				handlers={handlers}
				disabled={currentNum === 1}
				dir="left"
			/>
			<PaginationBtn
				color={color}
				indexFn="nextPage"
				handlers={handlers}
				disabled={currentNum === count}
				dir="right"
			/>
		</>
	)
}

export default PaginationNextPrev
