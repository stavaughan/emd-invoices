import { useLayoutEffect } from 'react'
import clsx from 'clsx'

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'

const ShowDataIcon = ({ show, setShow }) => {

	useLayoutEffect(() => {
		if (show) {
			let subscribed = setTimeout(() => {
				setShow(false)
			}, 3000)
			return () => clearTimeout(subscribed)
		}
	}, [show, setShow])

	return (
		<FAIcon
			icon={show ? 'eye' : 'eye-slash'}
			className={clsx(
				show ? 'text-primary' : 'text-slate-300',
				'pe-n3'
			)}
			onClick={() => setShow(!show)}
			style={{
				position: 'absolute',
				top: '50%',
				right: '4%',
				transform: 'translateY(-50%)'
			}}
		/>
	)
}

export default ShowDataIcon
