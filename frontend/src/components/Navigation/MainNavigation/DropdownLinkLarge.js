import { SkeletonElem } from 'components/LoadingSkeleton';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { controlProps } from 'globals/js';
import clsx from 'clsx';

const SkeletonLoader = ({ last }) => (
	<li className={clsx(
		"nav-item dropdown d-none d-md-block",
		last && "me-3"
	)}>
		<span
			className="nav-link dropdown-toggle"
			style={{ letterSpacing: '.09rem' }}
			aria-haspopup="true"
		>
			<SkeletonElem
				width="120px"
				style={{
					padding: '0.3rem 0.07rem',
					marginRight: '0.2rem'
				}}
			/>
		</span>
	</li>
)

const DropdownLinkLarge = ({ label, id, last, loading, children }) => {

	if (loading) return <SkeletonLoader last={last} />

	return (
		<li className={clsx(
			"nav-item dropdown d-none d-md-block",
			last && "me-3"
		)}>

			<span
				id={id}
				className="nav-link dropdown-toggle"
				style={{ letterSpacing: '.09rem' }}
				role="button"
				{...controlProps.dropdown()}
				aria-haspopup="true"
			>
				{label}
				<ChevronDownIcon
					className="ms-2 h-5 w-5"
					aria-hidden="true"
				/>
			</span>
			{children}
		</li>
	)
};

export default DropdownLinkLarge;
