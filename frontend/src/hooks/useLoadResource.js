import { useSelector } from 'react-redux';
import { useLoadData } from ".";

// load a single resouce
const useLoadResource = (dataName) => {
	useLoadData({ dataName })
	const { isLoading } = useSelector(state => state[dataName])
	return { loading: isLoading || false }
}

export default useLoadResource
