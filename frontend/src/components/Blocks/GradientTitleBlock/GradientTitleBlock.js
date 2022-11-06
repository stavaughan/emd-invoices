import clsx from 'clsx';
import { useMobile } from 'hooks';

import classes from './GradientText.module.css';

const GradientTitleBlock = ({ title, gradient = false }) => {

	const { isXSmall } = useMobile();

	return (
		<>
			{gradient ? (
				<h1 className={classes['title-gradient']}>
					<span className={classes['text-gradient--title']}>
						{title}
					</span>
				</h1>
			) : (
				<h1
					className={clsx(isXSmall ? 'h2' : 'h1', 'text-primary font-bold')}
					style={{ letterSpacing: isXSmall ? '.089rem' : '.095rem' }}
				>
					{title}
				</h1>
			)}
		</>

	)
}

export default GradientTitleBlock
