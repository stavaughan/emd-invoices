import clsx from 'clsx';
import { Col } from 'components/HTML';
import { SkeletonElem } from 'components/LoadingSkeleton';
import { GradientTitleBlock } from 'components/Blocks';
import { useLoading } from 'hooks';
import { useContext } from 'react';
import { SettingsContext } from 'contexts';

const PageTitle = ({ pageGroup, baseTitle }) => {

	const { loading } = useLoading();

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

	return (
		<Col className="ms-n3 ms-md-n2">
			{pageGroup && (
				<div
					className={clsx(
						'mt-1 text-uppercase text-slate-500',
						smallText
					)}
					style={{
						letterSpacing: isXSmall ? '.11rem' : '.09em'
					}}
				>
					{loading
						? <SkeletonElem width={isXSmall ? '30px' : '60px'} />
						: (pageGroup || '')}
				</div>
			)}
			<GradientTitleBlock
				gradient
				title={loading
					? <SkeletonElem width={isXSmall ? '90px' : '160px'} />
					: (baseTitle || '')}
			/>
		</Col>
	)
};

export default PageTitle;
