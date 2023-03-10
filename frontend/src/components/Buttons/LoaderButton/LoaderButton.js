import { LoadingIcon } from '.';
import { Button } from '..';

const LoaderButton = ({
	type,
	className,
	setLoading,
	setOnclick,
	afterLoading,
	disabled,
	message,
	loading,
	label,
	wait,
	icon
}) => {

	const setLoaderTimeout = () => {
		if (setLoading) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				!!afterLoading && afterLoading();
			}, 1500)
		}
	};

	const onClickHandler = (e) => {
		!!setOnclick && setOnclick(e);
		setLoaderTimeout()
	};

	return (
		<Button
			type={type}
			className={className}
			rest={{
				onClick: onClickHandler,
				...(loading || !!disabled) && { disabled: true }
			}}
		>
			<LoadingIcon
				loading={loading}
				message={message}
				label={label}
				icon={icon}
				wait={wait}
			/>
		</Button>
	)
}

export default LoaderButton
