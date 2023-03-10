import { EditSaveButtons } from 'components/Buttons/Type';

const MaskedItemWrapper = ({
	showEdit,
	setShowEdit,
	onSaveEdit,
	onCancelEdit,
	loading,
	children
}) => {

	return (
		<div className="d-flex justify-content-between align-items-center d-print-none">
			<div className="d-flex justify-content-start align-items-center">
				{children}
			</div>
			<EditSaveButtons
				showEdit={showEdit}
				setShowEdit={setShowEdit}
				onSaveEdit={onSaveEdit}
				onCancelEdit={onCancelEdit}
				handleDelete={() => {}}
				loading={loading}
			/>
		</div>
	)
}

export default MaskedItemWrapper
