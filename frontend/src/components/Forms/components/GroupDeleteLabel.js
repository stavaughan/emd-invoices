import { DeleteButton } from 'components/Buttons/Type';
import clsx from 'clsx';
import { useMobile } from 'hooks';

const GroupDeleteLabel = ({
	label,
	type,
	ActionLabel,
	test,
	onDelete,
	labelClass,
	margin,
	sub
}) => {

	const { isXSmall } = useMobile();

	return (
		<div className={clsx(
			margin || 'my-2',
			"d-flex justify-content-between align-items-center"
		)}>
			<div>
				<label className={labelClass || clsx(
					'font-medium text-secondary',
					isXSmall && 'text-sm',
					!isXSmall && sub && 'text-sm'
				)}>
					{label}
				</label>
				{ActionLabel && type !== 'physical' && (
					<div className="text-muted text-sm mt-2">
						<ActionLabel />
					</div>
				)}
			</div>
			{(test && !ActionLabel) && (
				<DeleteButton deleteButtonHandler={onDelete} small={sub} />
			)}
		</div>
	)
}

export default GroupDeleteLabel
