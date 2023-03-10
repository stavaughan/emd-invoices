import { useSelector } from "react-redux";

const useAllowed = () => {

    const { access } = useSelector(state => state.auth).user;
    return { allowed: access === 'admin' }
}

export default useAllowed
