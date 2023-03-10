import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDataExport } from 'hooks';

const useExportUserData = () => {

	const { exportData } = useDataExport();

	const { user } = useSelector(state => state.auth);

	const { userContactData } = user;

	const userData = useMemo(() => {
		const today = new Date();
		const timeStamp = today.toISOString().slice(0, 10);
		const name = userContactData?.fullName
			? userContactData.fullName?.replaceAll(',','').replaceAll(' ','_').toLowerCase() + '_' + timeStamp
			: 'user_data';
		return { data: user, name };
	}, [user, userContactData]);

	const exportUserData = useCallback(() => {
		const data = userData?.data;
		const name = userData?.name;
		exportData(data, name);
	}, [userData, exportData]);

	return { exportUserData }
}

export default useExportUserData
