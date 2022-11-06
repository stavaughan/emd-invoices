import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { InputCol } from 'components/Forms/components';
import { SiteData } from 'data';

const Phone = ({
	id,
	clear,
	item,
	setItems,
	setEntering,
	smallLabel
}) => {

	const [phone, setPhone] = useState(item);
	const [phoneValidation, setPhoneValidation] = useState({
		value: item?.number || '',
		error: false
	});

	useEffect(() => {
		if(clear){
			setPhone(item)
			setPhoneValidation({
				value: item?.number || '',
				error: false
			})
		}
	}, [clear, item])

	const allOptions = SiteData.forms.contact.phoneTypes;

	const placeholder = (field, defVal) => phone[field] || defVal || '';

	const setItemState = useCallback((field, value) => setPhone(prev => ({
		...prev,
		[field]: value,
		id
	})), [setPhone, id]);

	const onChangeHandlerNumber = ({ value, error }) => {
		const numValue = value ? value.toString() : '';
        setPhoneValidation({ value: numValue, error });
		!!setEntering && setEntering(true)
	};

	const onBlurHandler = () => {
        setItems({
			...phone,
			number: phoneValidation.value
		})
		setItemState('number', phoneValidation.value);
    }

	const onChangeHandlerExtension = (value) => {
		if (isNaN(value)) {
			return false
		} else {
			setItemState('ext', value);
		}
	};

	return (
		<>
			<InputCol.Dropdown
				cols="4"
				id={`cddphonetype${id}`}
				label="Type"
				selected={phone?.type}
				onChange={(value) => setItemState('type', value)}
				onBlur={() => setItems(phone)}
				optionData={allOptions}
				smallLabel={smallLabel}
			/>
			<InputCol.Phone
				cols="5"
				id={`cddphoneno${id}`}
				phone={phoneValidation}
				defaultValue={phone?.number || ''}
				setPhone={onChangeHandlerNumber}
				placeholder={placeholder('number')}
				onBlur={onBlurHandler}
				label="Number"
				smallLabel={smallLabel}
			/>
			<InputCol.Text
				cols="3"
				id={`cddphoneext${id}`}
				value={phone?.ext}
				onChange={onChangeHandlerExtension}
				placeholder="100"
				onBlur={() => setItems(phone)}
				label="Ext"
				maxLength="5"
				autoComplete="off"
				smallLabel={smallLabel}
			/>
		</>
	);
};

export default Phone;
