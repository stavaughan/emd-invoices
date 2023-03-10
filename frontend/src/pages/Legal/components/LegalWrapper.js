import { useMobile, useLoading } from 'hooks';
import { CenteredBrand } from 'components/Blocks/Brand';
import { BackToTop } from 'components/Widgets';
import { Row } from 'components/HTML';
import { Navigation, LegalContent } from '.';

const LegalWrapper = ({ content, title, activePage }) => {

	const { isXSmall } = useMobile();
	const { loading } = useLoading();

	return (
		<div className="mt-3 pb-5">
			<div className="container">
				<div className="d-flex justify-content-center">
					<CenteredBrand loading={loading} />
				</div>
				<Row
					{...isXSmall && {
						className: 'mb-4 gap-4'
					}}
				>
					<Navigation activePage={activePage} />
					<LegalContent
						title={title}
						content={content}
					/>
				</Row>
			</div>
			<BackToTop />
		</div>
	)
}

export default LegalWrapper
