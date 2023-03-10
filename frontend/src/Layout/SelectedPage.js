import { useMemo } from 'react';
import { SiteModals, useLayoutLogic } from '.';
import { PageHeader } from 'components/Page';
import { SiteHeader, Footer } from 'components/Site';
import { FormInputsProvider } from 'contexts/form-inputs-context';
import { BackToTop } from 'components/Widgets';
import ErrorBoundary from 'state/ErrorBoundary';
import { Loader } from 'components/Loader'
import { useLoading } from 'hooks';

const SelectedPage = ({ pageID }) => {

	const { getSelectedPage } = useLayoutLogic();

	const { loading } = useLoading();

	const { Page, groupPageIDs, unitLabel } = useMemo(() => {
		return getSelectedPage(pageID)
	}, [getSelectedPage, pageID]);

	return (
		<FormInputsProvider pageID={pageID}>
			{loading && <Loader />}
			<SiteModals pageID={pageID} />
			<div className="content">
				<SiteHeader loading={loading} />
				<main>
					{groupPageIDs.includes(pageID) && (
						<PageHeader pageID={pageID} />
					)}
					<ErrorBoundary>
						<Page unitLabel={unitLabel} pageID={pageID} />
					</ErrorBoundary>
				</main>
			</div>
			<BackToTop />
			<Footer />
		</FormInputsProvider>
	);
};

export default SelectedPage;
