import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useLoading = () => {

	const { isLoading: l1 } = useSelector(state => state.settings);
	const { isLoading: l2 } = useSelector(state => state.userRoles);
	const { isLoading: l3 } = useSelector(state => state.userPermissions);
	const { isLoading: l4 } = useSelector(state => state.auth)
	const { isLoading: l5 } = useSelector(state => state.users)
	const { isLoading: l6 } = useSelector(state => state.contacts)

	const dataLoading = useMemo(() => {
		return [l1, l2, l3, l4, l5, l6].includes(true)
	}, [l1, l2, l3, l4, l5, l6])

	return { loading: dataLoading }
}

export default useLoading;
