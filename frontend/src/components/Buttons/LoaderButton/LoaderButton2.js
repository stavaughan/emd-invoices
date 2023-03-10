import { useState, useEffect } from 'react'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
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

    const [syntheticLoading, setSyntheticLoading] = useState(false);

	useEffect(() => {
		if (syntheticLoading) {
			let timer = setTimeout(() => {
				setSyntheticLoading(false);
			}, ms || 500);
			return () => clearTimeout(timer);
		}
	}, [syntheticLoading, handleClick, ms])

    const onClickHandler = (e) => {
        e.preventDefault();
		handleClick()
        type !== 'loader' && setSyntheticLoading(true);
    };

    const isLoading = type !== 'loader' ? syntheticLoading : loading;

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
