import { useMobile } from 'hooks';
import { GradientTitleBlock } from 'components/Blocks';
import clsx from 'clsx';

import Classes from '../pages/NotFound/NotFound.module.css';

const AlertPage = ({
	h1,
	title,
	label,
	BackGroundSVG,
	onClickHandler,
	BrandBlock
}) => {

	const { isXSmall } = useMobile();

	return (
		<>
			<div className={!isXSmall && 'mt-3'}>
				<div className="container">
					<div className="d-flex justify-content-center">
						<div className={clsx(
							"d-flex flex-column align-items-center",
							!isXSmall && 'mt-3'
						)}>
							{BrandBlock}
							<div className={Classes['notfound--bg-image']}>
								<BackGroundSVG />
							</div>
							<div className={isXSmall ? 'my-2' : 'my-3'}>
								<GradientTitleBlock
									h1={h1}
									title={title}
									gradient
								/>
							</div>
							<div className="mt-4">
								<button
									className={clsx(
										'btn rounded-pill btn-bd-primary m-0',
										//isXSmall && 'btn-sm fw-light',
										//[small, medium].includes(true) && 'px-2',
										isXSmall ? 'btn-sm py-2 px-3' : 'btn-md'
									)}
									onClick={onClickHandler}
								>
									{label}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* {isXSmall && BrandBlock} */}
		</>
	)
}

export default AlertPage
