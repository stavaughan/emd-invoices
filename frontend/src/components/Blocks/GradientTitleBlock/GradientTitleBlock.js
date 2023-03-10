import clsx from 'clsx';
import { useMobile } from 'hooks';
import { TitleWrapper } from '.';

import classes from './GradientText.module.css';

const GradientTitleBlock = ({ title, gradient }) => {

	const { isXSmall } = useMobile();

	return (
		<>
			{gradient ? (
				<h1 className={clsx(classes['title-gradient'])}>
					<TitleWrapper>
						<span
							className={classes['text-gradient--titlev2']}
						>
							{title}
						</span>
					</TitleWrapper>
				</h1>
			) : (
				<h1
					className={clsx(
						isXSmall ? 'h2' : 'h1',
						'text-blue-600 font-bold'
					)}
					style={{
						letterSpacing: isXSmall ? '.089rem' : '.095rem'
					}}
				>
					<TitleWrapper>
						{title}
					</TitleWrapper>
				</h1>
			)}
		</>
	)
}

export default GradientTitleBlock
