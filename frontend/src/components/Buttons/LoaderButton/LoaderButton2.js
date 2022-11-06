import { useState } from 'react'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { Global } from 'globals/js'
import { Button } from '..'

const LoaderButton2 = ({
	className,
	loading,
	label,
	icon,
	handleClick,
	type = 'non',
	ms
}) => {

    const [loadingN, setLoading] = useState(false)

    const onClickHandler = (e) => {
        e.preventDefault()
        type !== 'loader'
            ? Global.loadTime({ setLoading, loadFn: handleClick, ms })
            : handleClick()
    }

    const isLoading = type !== 'loader' ? loadingN : loading;

    return (
        <Button
            className={className}
            rest={{ onClick: onClickHandler }}
        >
            {icon && (
                <FAIcon
                    icon={(icon && icon !== 'sync-alt' && isLoading) ? 'circle-notch' : icon}
                    {...isLoading && { spin: true }}
                    {...label && { className: 'me-2' }}
                />
            )}
            {(isLoading && !icon && !label) && (
				<FAIcon
					icon="circle-notch"
					spin={true}
					className="me-2"
				/>
			)}
            {isLoading && !!label ? 'please wait..' : label}
        </Button>
    )
}

export default LoaderButton2
