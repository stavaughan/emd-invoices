import { useState, useMemo } from 'react';
import { InputCol } from '../components';
import { useClear } from 'hooks';

const ProfilePhoneInput = ({
	setOwner,
	setObject,
	setEntering,
	id,
	clear
}) => {

    const initState = useMemo(() => ({ value: '', error: false }), []);
    const [phoneNumber, setPhoneNumber] = useState(initState);

    const onChangeHandlerNumber = ({ value, error }) => {
        const numValue = value ? value.toString() : '';
        setPhoneNumber({ value: numValue, error });
		!!setEntering && setEntering(true)
    };

    const onBlurHandler = () => {
        if(setObject) {
            setObject('phone', phoneNumber.value)
        }
        if(setOwner) {
            setOwner(prev => ({ ...prev, phone: phoneNumber.value }));
        }
    }

	useClear(clear, () => setPhoneNumber(initState))

    return (
        <InputCol.Phone
			cols="12 sm-6"
			id={id}
            phone={phoneNumber}
            setPhone={onChangeHandlerNumber}
            onBlur={onBlurHandler}
            label="Phone Number"
            autoComplete="tel-national"
        />
    )
}

export default ProfilePhoneInput
