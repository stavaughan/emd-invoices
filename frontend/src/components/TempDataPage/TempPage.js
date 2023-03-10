import { Loader } from 'components/Loader';
import { TempPageContent } from '.';
import { InvoicesProvider } from 'contexts/invoices-context';
import { StartingPointsPage } from 'Layout';
import { useSelector } from 'react-redux';
import { Global } from 'globals/js';

const TempPage = ({ collectionID }) => {

	const itemsKey = collectionID === 'products' ? 'invoicedata' : collectionID;
	const sliceKey = collectionID === 'products' ? 'services' : collectionID;

	const sliceData = useSelector(state => state[itemsKey]);

	const pageData = sliceData[sliceKey];
	const isLoading = sliceData.isLoading

	const hasData = pageData?.length > 0;

	return (
		<InvoicesProvider>
			{isLoading && <Loader />}
			<StartingPointsPage
				containerProps={{ className: 'py-3 px-xl-3', fluid: true }}
				dataKey={collectionID}
				noPageData={!isLoading && !hasData}
			>
				<TempPageContent
					data={pageData}
					cid={collectionID}
					collectionID={Global.upperCaseFirst(collectionID)}
					loading={isLoading}
				/>
			</StartingPointsPage>
		</InvoicesProvider>
	)
}

export default TempPage
