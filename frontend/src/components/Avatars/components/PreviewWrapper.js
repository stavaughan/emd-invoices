import clsx from 'clsx';

import Classes from 'components/Gallery/styles/images.module.css';

const PreviewWrapper = (props) => {

	const { type, size = 'md' } = props;

	return (
		<span className="text-centered fs-3 my-2">
			<span className={clsx(
				type === 'avatar' ? Classes[`image-avatar-${size}`] : Classes["image-overlay"],
				'shadow-sm'
			)}>
				{props.children}
			</span>
		</span>
	)
}

export default PreviewWrapper
