import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useFilterCustomers = () => {

	const { customers } = useSelector(state => state.customers)
	const findCustomerByID = useCallback((cid) => customers.find(customer => customer?._id === cid), [customers]);

	return {
		findCustomerByID 
	}
}

export default useFilterCustomers
