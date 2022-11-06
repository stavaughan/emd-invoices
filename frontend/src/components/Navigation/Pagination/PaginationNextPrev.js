import { Button } from "components/Buttons";
import { Chevron } from 'components/SVGs';

const PaginationNextPrev = ({ handlers, currentNum, count }) => {
	return (
		<>
			<Button
				className="btn-sm btn-outline-secondary"
				rest={{
					onClick: () => handlers.prevPage(),
					disabled: currentNum === 1
				}}
			>
				<Chevron dir="left" className="w-4 h-4" />
			</Button>
			<Button
				className="btn-sm btn-outline-secondary"
				rest={{
					onClick: () => handlers.nextPage(),
					disabled: currentNum === count
				}}
			>
				<Chevron dir="right" className="w-4 h-4" />
			</Button>
		</>
	)
}

export default PaginationNextPrev
