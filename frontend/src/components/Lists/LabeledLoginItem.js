import clsx from 'clsx';

const LabeledLoginItem = ({
	label,
	inline,
	id,
	length,
	children
}) => {

	return (
		<div className={clsx('list-group-item', length > 1 && 'py-3')} id={id}>
			{inline ? children : (
				<div className="my-2">
					<div className="mb-2 text-muted">
						{label}
					</div>
					<div className="ps-1">
						{children}
					</div>
				</div>
			)}
		</div>
	)
}

export default LabeledLoginItem
