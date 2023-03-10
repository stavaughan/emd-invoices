import { RoundIconBtn } from 'components/Icons';
import clsx from 'clsx';

const FlexListItem = ({ label, className, children, onClick, margin, contentClass }) => {
	return (
		<div className={clsx("d-flex justify-content-between align-items-center leading-wide my-1", margin)}>
			<div className={clsx(
				contentClass || '',
				"d-flex justify-content-start align-items-center"
			)}>
				{label}
				<div className={className}>
					{children}
				</div>
			</div>
			{onClick && (
				<RoundIconBtn
					icon="pencil-alt"
					color="text-xs text-slate-400"
					onClick={onClick}
					hover="alt"
					xSmall
				/>
			)}
		</div>
	)
}

export default FlexListItem
