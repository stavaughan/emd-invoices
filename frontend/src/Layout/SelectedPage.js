import { useMemo, useCallback } from 'react';
import { SiteModals } from '.';
import { PageHeader } from 'components/Page';
import { SiteHeader, Footer } from 'components/Site';
import { FormInputsProvider } from 'contexts/form-inputs-context';
import { BackToTop } from 'components/Widgets';
import ErrorBoundary from 'state/ErrorBoundary';
import { PageObjects } from "globals/js";
import Pages from 'pages';
import { Loader } from 'components/Loader'
import { useLoading } from 'hooks';

const SelectedPage = ({ pageID }) => {

	const { loading } = useLoading();

	const selected = useCallback((pageID) => {
        const selPage = PageObjects.FILE(pageID)
        return {
            Page: Pages[selPage.page],
            groupPageIDs: PageObjects.groupPageIDs(),
            unitLabel: selPage?.unitLabel || ''
        }
    }, [])

	const { Page, groupPageIDs, unitLabel } = useMemo(() => selected(pageID), [pageID, selected]);

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
