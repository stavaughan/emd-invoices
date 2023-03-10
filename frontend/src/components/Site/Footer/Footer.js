import { FooterLinks, SocialLinks, CopyRight } from '.';
import { useUserID, useMobile } from 'hooks';
import clsx from 'clsx';

import Classes from './Footer.module.css'

const Footer = () => {

	const { isXSmall } = useMobile();
	const { userID } = useUserID();

	return (
		<footer className="gradient-indigo border-top d-print-none">
			<div
				className={clsx(
					isXSmall ? 'py-3' : 'pt-4 pb-3',
					'mx-auto overflow-hidden',
					Classes['padding-x']
				)}
				style={{ maxWidth: '80rem', height: '10rem' }}
			>
				<FooterLinks userID={userID} />
				<SocialLinks />
				<CopyRight />
			</div>
		</footer>
	)
}

export default Footer
