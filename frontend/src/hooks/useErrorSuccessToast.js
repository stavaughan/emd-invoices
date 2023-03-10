import { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const useErrorSuccessToast = ({
	selector,
	displayTest,
	errorID,
	successID,
	typeLabel,
	setClear,
	logout,
	reset
}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (selector?.isError && displayTest) {
            toast.error(selector?.message, {
                toastId: errorID,
                position: 'top-center'
            })
            if(reset) {
                dispatch(reset())
            }
        }
        if (selector?.isSuccess && displayTest) {
            toast.success(`${typeLabel} item successful`, {
                toastId: successID,
                position: 'top-center'
            })
			if(setClear) {
				setClear(true)
			}
			if(logout) {
				logout()
			}
            if(reset) {
                dispatch(reset())
            }
        }
    }, [
        selector?.isError,
        selector?.isSuccess,
        selector?.message,
        displayTest, errorID,
        successID, typeLabel,
		logout,
        dispatch,
		setClear,
        reset
    ])
}

export default useErrorSuccessToast
