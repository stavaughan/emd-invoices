import { useSelector } from "react-redux";

const useUserID = () => {
	const { userID } = useSelector(state => state.auth).user;
	return { userID };
}

export default useUserID
