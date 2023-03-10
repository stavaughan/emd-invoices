import { useState, useCallback, useMemo} from 'react';
import { nameSchema } from 'state/inputSchemas';
import { Name } from 'state/schemaConstructors';
import { InputCol } from 'components/Forms/components';
import { useClear } from 'hooks';

const NameInputFields = ({
	setContact,
	setEntering,
	contactName,
	setDataToUpdate,
	pfx,
	clear
}) => {

	const currentName = useMemo(() => {
		return contactName && !!contactName?.given_name ? contactName : nameSchema;
	}, [contactName]);

	const [name, setName] = useState(currentName);

	const fullName = useMemo(() => new Name(name).fullName, [name]);

	const onSetFullName = () => {
		setContact(prev => ({ ...prev, fullName }));
		!!setDataToUpdate && setDataToUpdate(prev => ({
			...prev,
			name: {
				...name,
				fullName
			},
			fullName
		}));
		!!setEntering && setEntering(true)
	};

	const setValueState = (fieldKey, value) => setName(prev => ({ ...prev, [fieldKey]: value }));

	const setFormState = useCallback((fieldKey, value) => {
		setContact(prev => ({
			...prev,
			name: { ...prev.name, [fieldKey]: value }
		}));
	}, [setContact]);

	const onSelectValue = useCallback((fieldKey, value) => {
		setValueState(fieldKey, value)
		setFormState(fieldKey, value)
	}, [setFormState]);

	const setInputValue = useCallback((field) => {
		return (value) => onSelectValue(field, value)
	}, [onSelectValue])

	useClear(clear, () => setName(currentName))

	return (
		<>
			<InputCol.Text
				id={pfx + "cpfx"}
				value={name?.prefix || ''}
				onChange={setInputValue('prefix')}
				maxLength={15}
				placeholder=" "
				label="pfx"
				cols="3 md-1"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "cfirstname"}
				value={name?.given_name || ''}
				onChange={setInputValue('given_name')}
				placeholder=" "
				label="First Name"
				autoComplete="given-name"
				cols="9 md-4"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "cmname"}
				value={name?.mName || ''}
				onChange={setInputValue('mName')}
				placeholder=" "
				label="MI"
				maxLength={2}
				cols="2 md-1"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "csurname"}
				value={name?.surname || ''}
				onChange={setInputValue('surname')}
				placeholder=" "
				label="Last Name"
				autoComplete="family-name"
				cols="10 md-5"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "csfx"}
				value={name?.suffix || ''}
				onChange={setInputValue('suffix')}
				maxLength={15}
				placeholder=" "
				label="sfx"
				cols="3 md-1"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "cbtitle"}
				value={name?.title || ''}
				onChange={setInputValue('title')}
				maxLength="150"
				placeholder=" "
				label="Business Title"
				cols="12 md-6"
				onBlur={onSetFullName}
			/>
			<InputCol.Text
				id={pfx + "cdepartment"}
				value={name?.department || ''}
				onChange={setInputValue('department')}
				maxLength="150"
				placeholder=" "
				label="Department, etc."
				cols="12 md-6"
				onBlur={onSetFullName}
			/>
		</>
	)
}

export default NameInputFields
