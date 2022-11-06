import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from 'features/auth/authSlice'
import { useClearUser } from 'hooks';

const useLogout = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { setClear } = useClearUser()

    const onLogout = () => {
        setClear(true)
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    };

	return { onLogout }
}

export default useLogout;
