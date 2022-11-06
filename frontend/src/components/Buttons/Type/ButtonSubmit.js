import clsx from 'clsx'

import '../styles/focus-styles.css'

const ButtonSubmit = ({ type = 'submit', color = 'indigo', onClick, rest, label }) => {

	const onClickHandler = (e) => {
		e.preventDefault()
		onClick()
	};

	return (
		<button
			type={type}
			className={clsx(
				'd-inline-flex justify-content-center py-2.5 px-3.5 border border-transparent',
				'shadow-sm text-sm font-medium rounded-md text-white',
				`bg-${color}-600 hover:bg-${color}-700`,
				'focus:outline-none focus:ring-2',
				'focus:ring-offset-2',
				`focus:ring-${color}-500`
			)}
			onClick={onClickHandler}
			{...rest}
		>
			{label}
		</button>
	)
}

export default ButtonSubmit
