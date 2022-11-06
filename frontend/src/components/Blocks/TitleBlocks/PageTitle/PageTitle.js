import clsx from 'clsx';
import { Col } from 'components/HTML';
import { SkeletonElem } from 'components/LoadingSkeleton';
import { GradientTitleBlock } from 'components/Blocks';
import { useLoading } from 'hooks';
import { useMemo, useContext } from 'react';
import { SettingsContext } from 'contexts';
import { useSelector } from 'react-redux';

const PageTitle = ({ pageID, page }) => {

	const { loading } = useLoading();

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

	const { settings } = useSelector(state => state.settings)
	const { siteBranding } = settings;

	const title = useMemo(() => {
		return pageID === 'home' ? siteBranding?.brand : page?.baseTitle;
	}, [pageID, page?.baseTitle, siteBranding?.brand]);

	return (
		<Col className="ms-n3 ms-md-n2">
			{page?.pageGroup && (
				<div
					className={clsx(
						'mt-1 text-uppercase text-slate-500',
						smallText
					)}
					style={{
						letterSpacing: isXSmall ? '.11rem' : '.09em'
					}}
				>
					{loading ? <SkeletonElem width={isXSmall ? '30px' : '60px'} /> : page.pageGroup}
				</div>
			)}
			<GradientTitleBlock
				title={loading ? <SkeletonElem width={isXSmall ? '90px' : '160px'} /> : title}
			/>
		</Col>
	)
};

export default PageTitle;
