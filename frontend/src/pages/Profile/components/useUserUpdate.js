import { useState, useEffect, useMemo } from 'react';
import { updateUserContact } from 'features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useErrorSuccessToast, useUpdateAlerts } from 'hooks';
import { featuresLogic } from 'features';

const useUserUpdate = ({
	userContactData,
	sliceData,
	contactID,
	userID,
	updatePhones = false,
}) => {

	const [contactData, setContactData] = useState(userContactData);

	const { savePW } = featuresLogic.userFromStorage();

	const { isError, isSuccess, message } = sliceData;

	const dispatch = useDispatch();

	const [dataToUpdate, setDataToUpdate] = useState({});
	const [clear, setClear] = useState(false);
	const [entering, setEntering] = useState(false);
	const [ready, setReady] = useState(false);
	const [display, setDisplay] = useState(false);

	const updatedContact = useMemo(() => {
		return clear ? userContactData : contactData;
	}, [clear, contactData, userContactData]);

	useEffect(() => {
		if (clear) {
			setContactData(() => userContactData);
			setEntering(false);
			setReady(false);
			setDataToUpdate(() => { });
		}
		return () => setClear(false)
	}, [clear, userContactData]);

	useErrorSuccessToast({
		selector: { isError, isSuccess, message },
		displayTest: ready,
		errorID: 'editerrorprofile',
		successID: 'editsuccessprofile',
		typeLabel: "Update",
		setClear
	})

	useUpdateAlerts({
		formTitle: 'your profile',
		resetValues: () => setClear(true),
		display,
		setDisplay
	})

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setReady(true);
		dispatch(updateUserContact({
			savePW,
			userID,
			contactID,
			updateData: {
				...dataToUpdate,
				...updatePhones && {
					phones: contactData?.phones?.length
						? contactData?.phones
						: []
				}
			}
		}));
	};

	return {
		clear,
		setClear,
		entering,
		updatedContact,
		handleOnSubmit,
		setDataToUpdate,
		setContactData,
		setEntering,
		setDisplay
	}
}

export default useUserUpdate
