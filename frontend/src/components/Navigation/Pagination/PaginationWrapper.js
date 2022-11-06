import { Button } from "components/Buttons";
import { Chevron } from 'components/SVGs';
import clsx from "clsx";

const PaginationWrapper = ({ count, handlers, currentNum, isNext, children }) => {

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="btn-group me-2" role="group" aria-label="First group">
				<Button
					className={clsx(
						'btn-sm',
						currentNum === 1 ? 'btn-secondary' : 'btn-outline-secondary'
					)}
					rest={{
						onClick: handlers.firstPage,
						disabled: currentNum === 1
					}}
				>
					{isNext ? (
						<Chevron dir="double-left" className="w-4 h-4" />
					) : <>{`first page`}</>}
				</Button>
				{children}
				<Button
					className={clsx(
						'btn-sm',
						currentNum === count ? 'btn-secondary' : 'btn-outline-secondary'
					)}
					rest={{
						onClick: handlers.lastPage,
						disabled: currentNum === count
					}}
				>
					{isNext ? (
						<Chevron dir="double-right" className="w-4 h-4" />
					) : <>{`last page`}</>}
				</Button>
			</div>
		</div>
	);
}

export default PaginationWrapper
