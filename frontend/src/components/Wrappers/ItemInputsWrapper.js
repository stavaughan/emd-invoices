import { Col, Row } from 'components/HTML';
import { GroupDeleteLabel } from 'components/Forms/components';

const ItemInputsWrapper = ({
	id,
	itemName,
	setNewItems,
	onRemove,
	idx,
	sub,
	children
}) => {

	const deleteItemHandler = (e) => {
		e.preventDefault();
		!!setNewItems && setNewItems(prev => prev.filter(_ => _.id !== id))
		!!onRemove && onRemove(id);
	};

	return (
		<Col
			cols="12"
			className="mb-3"
		>
			<GroupDeleteLabel
				label={`${itemName} ${idx + 1}`}
				test={true}
				onDelete={deleteItemHandler}
				margin="my-1"
				sub={sub}
			/>
			<Row className="g-2">
				{children}
			</Row>
		</Col>
	);
};

export default ItemInputsWrapper
