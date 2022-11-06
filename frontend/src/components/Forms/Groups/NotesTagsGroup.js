import { InputCol, GroupInputRow } from 'components/Forms/components';

const NotesTagsGroup = ({
	id,
	name,
	setValue,
	notes,
	field = 'notes',
	clear
}) => {

	return (
		<>
			<GroupInputRow label={`${name} Filter Tags and Notes`}>
				<InputCol.CreatableMultiText
					label={`${name} Tags`}
					id={`${id}tags`}
					setOptions={setValue('tags')}
					optional="true"
					clear={clear}
				/>
				<InputCol.TextArea
					id={`${id}notes`}
					value={notes || ''}
					label={`${name} Notes`}
					setTextValue={setValue(field)}
					maxLength='500'
					placeholder='Enter notes or comments...'
					optional="true"
				/>
			</GroupInputRow>
		</>
	)
};

export default NotesTagsGroup
