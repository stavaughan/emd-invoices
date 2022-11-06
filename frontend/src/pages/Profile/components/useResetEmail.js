import { useState, useEffect, useMemo } from 'react';
import { resetUserEmail } from 'features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useErrorSuccessToast, useUpdateAlerts, useLogout } from 'hooks';
import { featuresLogic } from 'features';

const useResetEmail = ({
	userEmail,
	sliceData,
	contactID,
	userID
}) => {

	const { onLogout } = useLogout()

	const [newUserEmail, setNewUserEmail] = useState(userEmail);

	const { savePW } = featuresLogic.userFromStorage();

	const { isError, isSuccess, message } = sliceData;

	const dispatch = useDispatch();

	const [entering, setEntering] = useState(false);
	const [ready, setReady] = useState(false);
	const [clear, setClear] = useState(false);
	const [display, setDisplay] = useState(false);

	const updatedEmail = useMemo(() => {
		return clear ? userEmail : newUserEmail;
	}, [clear, newUserEmail, userEmail]);

	useEffect(() => {
		if (clear) {
			setNewUserEmail(() => userEmail);
			setReady(false);
			setEntering(false);
		}
		return () => setClear(false)
	}, [clear, userEmail]);

	useErrorSuccessToast({
		selector: { isError, isSuccess, message },
		displayTest: ready,
		errorID: 'editerrorprofileemail',
		successID: 'editsuccessprofileemail',
		typeLabel: "Update Email",
		logout: onLogout,
		setClear
	})

	useUpdateAlerts({
		formTitle: 'your email',
		resetValues: () => setClear(true),
		display,
		setDisplay
	})

	const onUpdateSumbit = (e) => {
		e.preventDefault();
		setReady(true);
		dispatch(resetUserEmail({
			savePW,
			userID,
			contactID,
			userEmail: newUserEmail,
			currentEmail: userEmail
		}));
	};

	return {
		clear,
		setClear,
		entering,
		updatedEmail,
		onUpdateSumbit,
		setNewUserEmail,
		newUserEmail,
		setEntering,
		setDisplay
	}
}

export default useResetEmail
