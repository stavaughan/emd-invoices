import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { sliceData } from 'features';
import { toast } from "react-toastify";
import { Global } from "globals/js";

const useLoadData = ({ dataName }) => {

	const action = useMemo(() => sliceData.find(_ => _.id === dataName), [dataName])

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const slice = useSelector((state) => state[dataName])

	const status500 = `Request failed with status code 500`;
	const status404 = `not found!`;

	useEffect(() => {
		if (slice?.isError) {
			if ([status500, status404].includes(slice?.message)) {
				navigate('/landing', {
					replace: true,
					state: {
						title: 'No Data',
						message: `${Global.upperCaseFirst(dataName)} data cannot be fetched at this time due to server error. Please try again later.`
					}
				})
			} else {
				toast.error(slice?.message, {
					toastId: `onload${dataName}`,
					position: 'top-center'
				})
			}
		} else {
			dispatch(action.get())
		}
		// eslint-disable-next-line
	}, [])

	return { ...slice }

}

export default useLoadData
