import { useSelector } from 'react-redux'
import { controlProps } from 'globals/js';
import { UserLinks } from 'components/Navigation/UsersNavigation';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { UserAvatarSm } from 'components/Gallery';
import { SkeletonElem } from 'components/LoadingSkeleton';
import { useMobile } from 'hooks';
import clsx from 'clsx';

const AvatarSkeleton = () => (
	<span
		className="text-center"
		style={{
			'margin': '-10px 0 0 -10px',
			'float': 'left',
			'marginRight': '10px'
		}}
	>
		<SkeletonElem
			width="36px"
			height="36px"
			style={{ 'borderRadius': '50%' }}
		/>
	</span>
);

const HeaderLinks = ({ isLoading }) => {

	const { isXSmall } = useMobile();
	const { avatarID, userName } = useSelector(state => state.auth).user;
	const { settings } = useSelector(state => state.settings);

	return (
		<li className={clsx(
			isXSmall && 'mb-3',
			'nav-item dropdown'
		)}>
			<span
				className="nav-link dropdown-toggle"
				{...controlProps.dropdown()}
			>
				<span className="d-none d-md-block">
					{isLoading ? <AvatarSkeleton /> : <UserAvatarSm avatarID={avatarID} />}
				</span>
				{isLoading && !userName
					? <SkeletonElem
						className=""
						width="160px"
						height="18px"
					/> : (
						<>
							{userName}
							<ChevronDownIcon
								className="ms-2 h-5 w-5 d-none d-md-inline-block"
								aria-hidden="true"
							/>
						</>
					)}
			</span>
			<UserLinks settings={settings} />
		</li>
	)
}

export default HeaderLinks
