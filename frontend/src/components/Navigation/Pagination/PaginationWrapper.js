import { Button } from "components/Buttons";
import { Chevron } from 'components/SVGs';
import clsx from "clsx";

const PaginationWrapper = ({
	count,
	handlers,
	currentNum,
	color,
	isNext,
	children
}) => {

	const colorMain = `btn-${color}`;
	const colorOutline = `btn-outline-${color}`;

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="btn-group me-2" role="group" aria-label="First group">
				<Button
					className={clsx(
						'btn-sm',
						currentNum === 1 ? colorMain : colorOutline
					)}
					rest={{
						onClick: handlers.firstPage,
						disabled: currentNum === 1
					}}
				>
					{isNext ? (
						<Chevron dir="double-left" className="w-4 h-4" />
					) : <>{count === 2 ? 'prev' : 'first'} page</>}
				</Button>
				{children}
				<Button
					className={clsx(
						'btn-sm',
						currentNum === count ? colorMain : colorOutline
					)}
					rest={{
						onClick: handlers.lastPage,
						disabled: currentNum === count
					}}
				>
					{isNext ? (
						<Chevron dir="double-right" className="w-4 h-4" />
					) : <>{count === 2 ? 'next' : 'last'} page</>}
				</Button>
			</div>
		</div>
	);
}

export default PaginationWrapper
