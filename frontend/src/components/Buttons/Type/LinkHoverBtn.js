import { useMobile } from 'hooks';
import { Button } from '..'
import { controlProps } from 'globals/js';
import clsx from 'clsx'

const LinkHoverBtn = ({ className, modalID, rest, children }) => {

	const { isXSmall } = useMobile();

	return (
		<Button
			className={clsx(
				isXSmall ? 'btn-sm' : 'text-sm',
				'text-sm link-hover',
				className
			)}
			rest={{
				...rest,
				...controlProps.modalOpen(modalID)
			}}
			children={children}
		/>
	)
}

export default LinkHoverBtn
