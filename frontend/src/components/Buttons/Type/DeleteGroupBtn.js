import { RoundIconBtn } from 'components/Icons';

const DeleteGroupBtn = ({ setDelete }) => {

	const handleDelete = (e) => {
		e.stopPropagation()
		setDelete()
	};

	return (
		<div
			className="position-absolute"
			style={{
				top: '30%',
				right: '2%',
				zIndex: 1
			}}
		>
			<RoundIconBtn
				icon={['far', 'trash-alt']}
				color="text-xs"
				onClick={handleDelete}
				xSmall
			/>
		</div>
	)
}

export default DeleteGroupBtn
