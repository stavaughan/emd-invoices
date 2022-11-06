import { Badge } from 'components/labels';
import { ListGroupDetailItem } from '.';

const LabeledItem = ({
	label,
	inline,
	id,
	length,
	children
}) => {

	return (
		<ListGroupDetailItem
			label={(
				<Badge
					color='light'
					label={label}
					className="me-2"
				/>
			)}
			length={length}
			inline={inline}
			id={id}
		>
			{children}
		</ListGroupDetailItem>
	)
}

export default LabeledItem
