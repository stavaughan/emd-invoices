import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useFilterBusinesses = () => {

	const { businesses } = useSelector(state => state.businesses)
	const findBusinessByID = useCallback((cid) => businesses.find(business => business?._id === cid), [businesses]);

	return {
		findBusinessByID
	}
}

export default useFilterBusinesses
