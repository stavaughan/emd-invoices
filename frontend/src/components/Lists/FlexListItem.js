import { RoundIconBtn } from 'components/Icons';
import clsx from 'clsx';

const FlexListItem = ({ label, className, children, onClick, margin }) => {
	return (
		<div className={clsx("d-flex justify-content-between align-items-center leading-wide pb-1 my-1", margin)}>
			<div className="d-flex justify-content-start align-items-center">
				{label}
				<div className={className}>
					{children}
				</div>
			</div>
			{onClick && (
				<RoundIconBtn
					icon="pencil-alt"
					color="text-xs"
					onClick={onClick}
					xSmall
					alt
				/>
			)}
		</div>
	)
}

export default FlexListItem
