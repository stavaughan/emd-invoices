import { useLoadData } from ".";

const useLoadAppData = () => {
	useLoadData({ dataName: 'users' })
	useLoadData({ dataName: 'userRoles' })
	useLoadData({ dataName: 'userPermissions' })
    useLoadData({ dataName: 'contacts' })
	useLoadData({ dataName: 'invoicedata' })
	useLoadData({ dataName: 'customers' })
	useLoadData({ dataName: 'businesses' })
}

export default useLoadAppData
